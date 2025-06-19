# CI/CD Node.js Microservice

This project demonstrates a Node.js microservice deployed via CI/CD pipeline using GitHub Actions, Docker, NGINX, and Terraform on AWS EC2.

## Stack
- Node.js
- Docker
- GitHub Actions
- Terraform
- AWS EC2
- NGINX

## How It Works
1. Code push triggers GitHub Actions.
2. Docker image is built and pushed to Docker Hub.
3. SSH into EC2 to pull and deploy the container.
4. NGINX proxies traffic to the Node.js container.

## Terraform Setup
```bash
cd terraform
terraform init
terraform apply -var='key_name=your-key-name'
```
