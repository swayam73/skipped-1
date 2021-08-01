const express = require('express');
const app = express();
const port = 8080;

const cors = require('cors');
app.use(cors());
app.use(express.json({limit: '10mb', extended: true}))
app.use(express.urlencoded({limit: '10mb', extended: true}))
//Sync Database
const models = require("./models");
models.sequelize.sync().then(function() {
    console.info('Database is synced')
}).catch(function(error) {
    console.error(error)
});

// authenticate user
const authentication = require('./middlewares/authentication');
app.use(authentication);

// routes
const profileService = require('./services/profile');
const profileRoute = require('./routes/profile')(profileService);
app.use('/api/profile', profileRoute);

// index path
app.get('/', function(_, res){
    res.send('Skipped API running successfully.')
});

app.listen(port, function(){
    console.info('Skipped API started on - ' + port);
});
