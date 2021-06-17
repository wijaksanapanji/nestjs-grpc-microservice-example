# Nestjs gRPC Microservice Example

## Description
An example of simple microservice with [nestjs](https://docs.nestjs.com/) using gRPC.

## Installation

1. open your prefered terminal application and clone this repository
2. Move into this example directory

    ```cd nestjs-grpc-microservice-example```

3. change directory to `hero-service`

    ```cd hero-service```

4. run `npm install` and then `npm run start:dev`

5. open another terminal window and change into `gateway` directory
6. run `npm install` and then `npm run start:dev`
7. Open your browser go to `http://localhost:3000/hero` to list of heroes or `http://localhost:3000/1` to see hero with id of `1`

## Directory structure

    gateway                 -> Api gateway to serve data as json
    hero-service            -> hero service to provide hero data
    protos                  -> directory contains proto file to describe the structure of data.
