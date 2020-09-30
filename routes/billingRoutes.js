const keys = require('../config/keys');
const stripe = require('stripe');


module.exports = app => {
    app.post('/api/stripe', async (req,res) => 
    {
       const charge = await stripe.charges.create({
           amount: 500,
           currency: 'inr',
           description: '5$ for 5 email credits',
           source: req.body.id
       });
       
       console.log(charge);
    });
};