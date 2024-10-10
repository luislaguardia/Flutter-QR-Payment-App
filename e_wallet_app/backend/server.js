const express = require('express');
const stripe = require('stripe')('your_stripe_secret_key');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize express app
const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/e_wallet', { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema for MongoDB
const userSchema = new mongoose.Schema({
  userId: String,
  balance: Number,
});

const User = mongoose.model('User', userSchema);

// Route to handle top-up
app.post('/top-up', async (req, res) => {
  const { amount, userId } = req.body;

  try {
    // Create Stripe PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,  // Stripe works in cents
      currency: 'php',
      payment_method_types: ['card'],
    });

    // Update user's balance after successful payment
    let user = await User.findOne({ userId: userId });
    if (!user) {
      user = new User({ userId: userId, balance: 0 });
    }
    user.balance += parseFloat(amount);
    await user.save();

    res.json({ success: true, message: 'Top-up successful', balance: user.balance });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Payment failed', error: error.message });
  }
});

// Route to get user balance
app.get('/wallet-balance/:userId', async (req, res) => {
  const userId = req.params.userId;
  const user = await User.findOne({ userId: userId });

  if (user) {
    res.json({ balance: user.balance });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
