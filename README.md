1. docker build . -t anokhadocker/aspire-gateway:1

2. docker run --name aspire-gateway -d -p 8080:8080 anokhadocker/aspire-gateway:1

3. minikube service gateway-service
