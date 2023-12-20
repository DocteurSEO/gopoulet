provider "aws" {
    region = "eu-west-3"
    access_key = "*"
    secret_key = "*"
}



resource "aws_security_group" "jenkins" {
  name = "jenkins"
  description = "allow port for jenkins"
  vpc_id = "vpc-05339a29fee8bb83c"

  ingress {
    from_port        = 8080
    to_port          = 8080
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    }
  ingress {
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    }
  ingress {
        from_port   = 22
        to_port     = 22
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}




resource "aws_instance" "jenkins" {
  ami = "ami-01d21b7be69801c2f"
  instance_type = "t2.micro"
  vpc_security_group_ids = [aws_security_group.jenkins.id]
  key_name = "ec2"
  
}

resource "null_resource" "ec2" {
  triggers = {
    instance_id = aws_instance.jenkins.id
  }

provisioner "remote-exec" {
    inline = [ 
        "sudo apt update",
        "sudo apt install -y fontconfig openjdk-17-jre",
        "wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -",
        "sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'",
        "sudo apt update",
        "sudo apt install -y jenkins",
        "sudo systemctl start jenkins",
        "sudo systemctl enable jenkins",
        "sudo cat /var/lib/jenkins/secrets/initialAdminPassword"
     ]

     connection {
        type        = "ssh"
        user        = "ubuntu"
        private_key = file("./ec2.pem")
        host        = aws_instance.jenkins.public_ip
    }

}
}