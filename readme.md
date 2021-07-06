1 - Docker

REFERÊNCIAS

    https://medium.com/dockerbr/mongodb-no-docker-dd3b72c7efb7
    https://balta.io/blog/mongodb-docker
    https://hub.docker.com/_/mongo

COMANDOS

Baixar imagem mongo para docker, última versão

    sudo docker pull mongo

Conferir as imagens docker existentes

    sudo docker ps -a

Construir nova instancia do mongo no docker

    sudo docker run --name mongo-node -p 27017:27017 -d mongo

visualizar log em tempo real no mongo docker

    sudo docker logs -f mongo-node

Iniciar o docker com o mongo (mongo-node: nome do docker criado)

    sudo docker start mongo-node

