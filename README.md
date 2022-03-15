Hi, first I would like to thank you for giving me the opportunity to do this test, it has been a lot of fun to develop this API for you.

Now to configure the database (MongoDB) you need to go to: https://www.mongodb.com/es/cloud/atlas/register 
Here you can register and you will be given a free Cluster, where you can create a database and then with this link you can connect putting it in the app.module.ts
mongodb+srv://USERNAME:PASSWORD@cluster0.8uvul.mongodb.net/DATABASENAME?retryWrites=true&w=majority

(Please change USERNAME, PASSWORD, DATABASENAME for your credentials, also in the "connect" section you have this information) 

I hope you like it, as I really enjoyed programming everything. 

I look forward to your comments. 


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
