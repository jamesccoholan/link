require("dotenv").config();

const stripe = require("stripe")(process.env.REACT_APP_STRIPE_API_KEY);
const admin = require("firebase-admin");

const createCheckoutSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      client_reference_id: req.body.userId,
    });
    res.json({ sessionId: session.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const stripeWebhook = async (req, res) => {
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      req.headers["stripe-signature"],
      process.env.REACT_APP_STRIPE_ENDPOINT_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session.client_reference_id;
    await admin.firestore().collection("users").doc(userId).update({
      subscriptionStatus: "active",
    });
  }

  res.status(200).send("Received event");
};

module.exports = {
  createCheckoutSession,
  stripeWebhook,
};
