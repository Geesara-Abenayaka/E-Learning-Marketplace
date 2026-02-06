provider "aws" {
  region = "us-east-2"
}

resource "aws_security_group" "allow_ssh" {
  name = "allow_ssh"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "docker_vm" {
  ami           = "ami-0b9064170e32bde34" # Ubuntu 22.04 (us-east-2)
  instance_type = "t3.small"
  key_name      = "ansible"

  vpc_security_group_ids = [aws_security_group.allow_ssh.id]

  tags = {
    Name = "jenkins-docker-builder"
  }
}
