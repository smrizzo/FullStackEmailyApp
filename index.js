const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');


const app = express();
//some cookie middleware
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

mongoose.connect(keys.mongoURI);

const port = process.env.PORT || 5000;
app.listen(port);