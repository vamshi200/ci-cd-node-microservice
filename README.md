# CI/CD Pipeline for Node.js Microservice 🚀

This project demonstrates a complete DevOps workflow by deploying a Node.js microservice to an AWS EC2 instance using Docker, NGINX, and GitHub Actions.

## 🔧 Tech Stack

- Node.js
- Docker
- GitHub Actions
- AWS EC2
- NGINX (Reverse Proxy)
- Terraform (Infra-as-Code - optional)

## ⚙️ Features

- REST API microservice built with Express.js
- Dockerized application
- CI/CD workflow with GitHub Actions:
  - Builds Docker image
  - Pushes to Docker Hub
  - SSH into EC2 and deploys the container
- NGINX for production-level reverse proxy

## 🚀 Deployment Flow

1. Code pushed to `main` branch
2. GitHub Action triggered
3. Docker image built and pushed
4. SSH to EC2 → pull image and run container
5. App runs on `http://<ec2-ip>:3000`

## 🧪 Usage

```bash
curl http://<EC2_PUBLIC_IP>:3000
