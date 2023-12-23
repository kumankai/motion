# config/

Local configuration related to setup on local machine

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
