## Client Gateway


## Dev
1. Clone the respository
2. Install dependencies
3. Create the `.env` file based on `.env.template`
4. Start NATS server 
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```
5. Start all the microservices (orders and products)
6. Start the project `npm run start:dev`

## Nats
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```

## Prod
Run the following command to create the image
```
docker build -f Dockerfile.prod -t client-gateway .
```

Run the following command to start the container
```
docker run -e PORT=3000 -e NATS_SERVERS=nats://localhost:4222 -it -dp 3000:3000 client-gateway
```