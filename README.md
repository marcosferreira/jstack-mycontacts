# Quick Started

## Requirements
- NodeJS
- Yarn
- Docker

## Install
- Run `yarn` for install dependences
- Run ` docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres`, for install Database PostgreSQL in container

## Create DataBase
- Enter in container with command `docker exec -it pg bash`
- Access the SGBD server with command `psql -U root`
- Create DB with with `CREATE DATABASE mycontacts;` in line 1 file src/database/schema.sql
- Access DB with `\c mycontacts`;
- Run others command in file src/database/schema.sql
