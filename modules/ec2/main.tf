resource "aws_instance" "jenkins" {
  ami = "ami-0ac1b923393d5082a"
  instance_type = "t2.micro"
  key_name = "ec2"
}

resource "null_resource" "delay" {
  triggers = {
    instance_id = aws_instance.jenkins.id
  }

  
provisioner "remote-exec" {
    inline = [ 
        "sudo apt update",
        "sudo apt install -y fontconfig openjdk-17-jre jenkins",
        "sudo systemctl start jenkins"
     ]

     connection {
        type        = "ssh"
        user        = "ubuntu"
        private_key = file("./ec2.pem")
        host        = aws_instance.jenkins.public_ip
    }

}
}
