# Portfolio

## Run dev container with hot refresh
```bash
docker build -f Dockerfile.dev -t portfolio:dev .
```


```bash
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    portfolio:dev
```

## Run prod container

```bash
docker build -f Dockerfile.prod -t portfolio:prod .
```

```bash
docker run -it --rm -p 1919:80 portfolio:prod
```
