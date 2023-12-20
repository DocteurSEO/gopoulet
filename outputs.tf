output "instance_ip" {
  value = aws_instance.jenkins.public_ip
  description = "Adresse IP publique de la VM"
}

