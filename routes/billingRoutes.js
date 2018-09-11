const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
   app.post('/api/stripe', async (req, res) => {
      if(!req.user) {
         return res.status(404).send({ error: 'You Must Log In' });
      }
      const charge = await stripe.charges.create({
         amount: 500, 
         currency: 'usd',
         description: '$5 for 5 credits',
         source: req.body.id
      });
      //increments the credits by 5 since charge was created
      //save the new updates to user and send 
      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user);

   });
};