resource "aws_vpc" "main" {
    cidr_block = "10.0.0.0/16"
  
}

resource "aws_subnet" "public" {
  vpc_id = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
  tags={
    Name="public"
  }
}

resource "aws_internet_gateway" "gw"{
    vpc_id = aws_vpc.main.id
}

resource "aws_route_table" "main" {
  vpc_id =  aws_vpc.main.id
  route{
    cidr_block = "0.0.0.0/16"
    gateway_id = aws_internet_gateway.gw.id
  }
}

resource "aws_route_table_association" "a" {
    route_table_id = aws_route_table.main.id
    subnet_id = aws_subnet.public.id
  
}

resource "aws_security_group" "jenkins" {
  name = "jenkins"
  description = "allow port for jenkins"
  vpc_id = aws_vpc.main.id

  ingress {
    from_port        = 8080
    to_port          = 8080
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