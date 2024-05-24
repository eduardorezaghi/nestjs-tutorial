# nestjs-coffee | Learn NestJS with Coffee ☕️

## Description

This repository contains the code from my learning journey with NestJS.
I'm using the [official NestJS course](https://courses.nestjs.com/) to learn the framework,
and I'm also using the [official documentation](https://docs.nestjs.com/) to complement my learning.

## Install & Run
Install all the dependencies with the following command:
```bash
$ pnpm install
```
Run the project with the following command:
```bash
$ pnpm start:dev
```

## Testing
You can test the application by running the unit tests with the following command:
```bash
$ pnpm test
```

And, for a more practical approach, you can test the application using curl or Postman.
Below, you can find some examples of how to test the application using curl or curlie.
```bash
# Get a specific coffee
curl http://localhost:3000/coffees/1 | jq -r
curlie http://localhost:3000/coffees/1

# Get all coffees with pagination
curl http://localhost:3000/coffees?limit=10&offset=0
curlie "http://localhost:3000/coffees?limit=10&offset=0"

# Create a new coffee
curl -X POST -H "Content-Type: application/json" -d '{"name": "Espresso", "brand": "Starbucks", "flavors": ["bitter", "strong"]}' http://localhost:3000/coffees
curlie -v POST http://localhost:3000/coffees Content-Type:application/json name=Espresso brand=Starbucks flavors:='["bitter", "strong"]'

# Update a coffee
curl -X PATCH -H "Content-Type: application/json" -d '{"name": "Cappuccino"}' http://localhost:3000/coffees/1
curlie -v PATCH http://localhost:3000/coffees/1 Content-Type:application/json name=Cappuccino

# Delete a coffee
curl -X DELETE http://localhost:3000/coffees/1
```

## Resources
- [NestJS Official Course](https://courses.nestjs.com/)
- [NestJS Official Documentation](https://docs.nestjs.com/)
