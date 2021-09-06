# Vite Boilerplate

> Derived from my project 'Radunia'.

Lightweight repos for development w/ `Vite.js` and `Docker`

Just clone the code and integrate it into your `docker-compose` setup (or use it standalone).

## Docker compose

```docker-compose
# ... your other services ...
  app:
    build:
      context: ./vite-boilerplate
      dockerfile: dev.dockerfile
    ports:
      - '3000:3000'
    volumes:
    # Bind mount for development, remove in production
      - ./vite-boilerplate/src/:/app/src/
    depends_on:
      - api
    stdin_open: true
    tty: true
```

## Standalone setup (development)

Can also be run standalone using smth like

```bash
docker build -t vite-boilerplate:development -f dev.dockerfile .
```

Then, run:

```bash
docker run -it --rm \
  --name vite-dev-container
  -p 3000:3000
  # Bind mount for development
  -v '</path/to/project>'/vite-boilerplate/src/:/app/src
  vite-boilerplate:development
```

To bring it down (in case you didn't specify the `--rm` flag)

```bash
docker stop vite-dev-container \
docker container rm vite-dev-container
```

## Productive usage with nginx

There is a `prod.dockerfile` inside the repos. It uses nginx as a static webserver, which can possibly be extended to also proxy incoming requests to an API. Read more on the [official nginx Dockerhub image](https://hub.docker.com/_/nginx/)