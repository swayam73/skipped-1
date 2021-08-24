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

// profile
const profileService = require('./services/profile');
const profileRoute = require('./routes/profile')(profileService);
app.use('/api/profile', profileRoute);

// role
const roleService = require('./services/role');
const roleRoute = require('./routes/role')(roleService);
app.use('/api/role', roleRoute);

// job
const jobService = require('./services/job');
const jobRoute = require('./routes/job')(jobService);
app.use('/api/job', jobRoute);

// job application
const jobApplicationService = require('./services/jobApplication');
const jobApplicationRoute = require('./routes/jobApplication')(jobApplicationService);
app.use('/api/jobApplication', jobApplicationRoute);

// visa type
const visaTypeService = require('./services/visaType');
const visaTypeRoute = require('./routes/visaType')(visaTypeService);
app.use('/api/visaType', visaTypeRoute);

// index path
app.get('/', function(_, res){
    res.send('Skipped API running successfully.')
});

app.listen(port, function(){
    console.info('Skipped API started on - ' + port);
});
