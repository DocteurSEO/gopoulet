resource "aws_ecs_cluster" "jenkins_cluster" {
  name = "jenkins-cluster"
}

module "ecs_container_definition" {
  source = "terraform-aws-modules/ecs/aws//modules/container-definition"
  name = "jenkins"
  cpu = 512
  memory = 1024
  essential = true
  image = "*.amazonaws.com/jenkins"
  port_mappings = [
    {
        name = "http"
        containerPort = "8080"
        protocol = "tcp"
    },
    {
        name = "Upnp"
        containerPort = "5000"
        protocol = "tcp"
    }
  ]
}