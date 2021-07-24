const express = require('express');
const cors = require('cors');
const app = express();
const constants = require('./utils/constants');
const port = constants.port;

const models = require("./models");
//Sync Database
models.sequelize.sync().then(function() {
    console.log('Database is synced')
}).catch(function(err) {
    console.log(err)
});

app.use(cors());

// index path
app.get('/', function(_, res){
    console.log('app listening on port: '+port);
    res.send('Skipped API running successfully.')
});

app.listen(port, function(){
    console.log('Skipped API started on - ' + port);
});
