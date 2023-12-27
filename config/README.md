# config/

Local configuration related to setup on local machine

## For the APIs

### For backend devs

To install necessaries dependencies, run the followings

auth-api

```
npm i jest --save-dev
npm i express bcrypt jsonwebtoken dotenv mongoose
```

account-api

```
npm i jest --save-dev
npm i express dotenv
```

### Setting up Mysql on local machine

Copy the .sql files to the docker container

```
docker cp file.sql container_name:/path/in/container/
```

### Access the Mysql container

Refer to the .env file for the password

## For the Fronted

### To run react native

You must have expo installed

To install:

```
npm i expo
```

To run:

```
npm start
```

### To view changes

- Download expo go on your phone
- If you do not have an account, please make one
- Scan the QR code generated in the terminal

If you have a Mac with Xcode installed, you may enable hot reload on your Mac.

### Running the APIs

Run while in the same directory as docker-compose:

```
docker-compose up
```
