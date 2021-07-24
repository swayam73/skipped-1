# Skipped API

This Node.js service use 
- Express.js framework
- MySQL database
- Sequelize ORM
```
npm install
npm run start --> on server
npm run dev --> for developer
```

## Database

The application connect to MySQL database using sequalize. The configuration of database added in 'models/index.js'.

```
var sequelize = new Sequelize('dbname', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});
```

