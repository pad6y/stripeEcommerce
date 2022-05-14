const stripeAPI = require('../stripe');

function calcOrderAmount(cartItems) {
  return (
    cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0) * 100
  );
}

async function paymentIntent(req, res) {
  const { cartItems, description, receipt_email, shipping } = req.body;
  let paymentIntent;
  // console.log(cartItems);
  // console.log('amount ', calcOrderAmount(cartItems));
  try {
    paymentIntent = await stripeAPI.paymentIntents.create({
      amount: calcOrderAmount(cartItems),
      currency: 'GBP',
      description,
      payment_method_types: ['card'],
      receipt_email,
      shipping,
    });

    res
      .status(200)
      .json({
        clientSecret: paymentIntent.client_secret,
        id: paymentIntent.id,
      });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ error: 'an error occurred, unable to create payment intent' });
  }
}

module.exports = paymentIntent;