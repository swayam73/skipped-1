const express = require('express');
const app = express();
const constants = require('./utils/constants');
const port = 8080;

const cors = require('cors');
app.use(cors());

//Sync Database
const models = require("./models");
models.sequelize.sync().then(function() {
    console.log('Database is synced')
}).catch(function(err) {
    console.log(err)
});


// routes
const profileService = require('./services/profile');
const profileRoute = require('./routes/profile')(profileService);
app.use('/api/profile', profileRoute);

// index path
app.get('/', function(_, res){
    console.log('app listening on port: '+port);
    res.send('Skipped API running successfully.')
});

app.listen(port, function(){
    console.log('Skipped API started on - ' + port);
});
