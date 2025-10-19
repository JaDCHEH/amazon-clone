/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const { FirebaseFunctionsTest } = require("firebase-functions-test/lib/lifecycle");
const stripe = require("stripe")("sk_test_51SJxB3D0vS1AmzRh5hwswLeYUlsmhCEzqoAZ06YjMdmimfd0Sh0QQoyhB2gpkueOZpviUZ3L7E5nl8CrqpqFqkqh001OwLbIYa");

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.use(express.json());


app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  logger.info("Payment request received for amount:", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    logger.info("PaymentIntent created successfully:", paymentIntent.id);

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    logger.error("Error creating PaymentIntent:", error);
    res.status(500).send({ error: error.message });
  }
});

exports.api = functions.https.onRequest(app);


