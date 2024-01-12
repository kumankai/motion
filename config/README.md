# config/

Local configuration related to setup on local machine.

## For the APIs

### For backend devs

To install necessaries dependencies, run the followings:

auth-api

```
npm i jest --save-dev
npm i express dotenv bcrypt jsonwebtoken mongoose mysql2 knex objection node-schedule
```

account-api

```
npm i jest --save-dev
npm i express dotenv
```

### Access the Mysql container

run:

```
docker exec -it CONTAINER_ID mysql -p
```

It will prompt you to enter a password.

Refer to the .env file for the password.

## For the Fronted

### To run react native

You must have expo installed.

To install:

```
npm i expo
```

To run:

```
npm start
```

### To view changes

- Download expo go on your phone.
- If you do not have an account, please make one.
- Scan the QR code generated in the terminal.

If you have a Mac with Xcode installed, you may enable hot reload on your Mac.

### Running the APIs

Run while in the same directory as docker-compose:

```
docker-compose up
```
