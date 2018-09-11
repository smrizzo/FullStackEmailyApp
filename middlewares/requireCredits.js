//next is going to be a function call that runs when our middleware is complete
module.exports = (req, res, next) => {
   if(req.user.credits < 1) {
      return res.status(403).send({ error: 'Not enough credits!' });
   }

   next();
};