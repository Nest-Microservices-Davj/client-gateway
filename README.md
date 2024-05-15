## Client Gateway


## Dev
1. Clone the respository
2. Install dependencies
3. Create the `.env` file based on `.env.template`
4. Start all the microservices (orders and products)
5. Start the project `npm run start:dev`

## Nats
```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```