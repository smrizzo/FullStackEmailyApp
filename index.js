const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/user');
require('./services/passport');


const app = express();
//some cookie middleware

if(process.env.NODE_ENV === 'production') {
   //Express will serve up production issues
   //like our main.js file, or main.css file

   app.use(express.static('client/build'));

   //Express will serve up our index.html if it doesnt recognize the route thats being requested
   const path = require('path');
   app.get('*', (req, res) => {
      res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });

}

app.use(bodyParser.json());

app.use(
   cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
   })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
//could use equire('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);



mongoose.connect(keys.mongoURI);

const port = process.env.PORT || 5000;
app.listen(port);