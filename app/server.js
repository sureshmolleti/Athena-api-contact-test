const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
var secret = "!@#DWe$%^gge&&**";
const registerController = require('./controllers/registrationController');
const loginController = require('./controllers/loginControllers');
const favController = require('./controllers/favouriteController');
const historyController = require('./controllers/historyController');
const blueService = require('./services/scheduleJob');
// setInterval(()=>{
// },30000)

(async function mongooseConnection() {
    try {
        await mongoose.connect('mongodb://localhost/my_database', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (e) {
        console.log("============mongoose err=>", e);
    }
})();



app.use('/api', jwt({ secret: secret }).unless({ path: ['/register', '/login', '/fav'] }));
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());
app.use('/register', registerController);
app.use('/login', loginController);
app.use('/fav', favController);
app.use('/history', historyController);
app.use('/getUsers', require('./controllers/bluegroupUsers'));
app.listen(5000, () => {
    console.log('server connected successfully')
})