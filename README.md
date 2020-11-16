# Blog react app

This is a simple blog app with react frontend and express backend endpoints.
It allows to fetch/create/update posts and comments

## Available Scripts

There are 6 subproject folders: client (React frontend client),
posts, comments, moderation, query, event-bus ( express backend )

### Running the project

## Requirements:

- Docker
- Kubernetes
- Scaffold

# Install nginx kubernetes (load balancer + ingress controller)

(https://kubernetes.github.io/ingress-nginx/deploy/)
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.2/deploy/static/provider/cloud/deploy.yaml

# HOSTS FILE

Add the following line
127.0.0.1 posts-ms.blogms.com

# Install Scaffold

https://skaffold.dev/docs/install/

# From project base folder

skaffold dev
