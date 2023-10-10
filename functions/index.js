const functions = require("firebase-functions");
const { handleCORS, corsHandler } = require("./corsHandler");
const { handleElevenLabsRequest } = require("./elevenLabsHandler");
const { verifyAccess } = require("./subscriptionChecker");

console.log("Function environment:", process.env);

console.log(
  "Imported functions from elevenLabsHandler:",
  require("./elevenLabsHandler")
);

const env = functions.config().env;

exports.textToSpeech = functions.https.onRequest((req, res) => {
  console.log("textToSpeech function called with method:", req.method);

  if (req.method === "OPTIONS") {
    // This is a preflight request. Reply successfully:
    const allowedOrigin =
      env && env.mode === "production"
        ? "https://aimedscribe-786ef.web.app"
        : "http://localhost:3000";
    res.set("Access-Control-Allow-Origin", allowedOrigin);
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.set("Access-Control-Allow-Headers", "*");
    res.status(204).send("");
    return;
  }

  if (handleCORS(req, res)) {
    return;
  }

  corsHandler(req, res, () => {
    if (req.method !== "POST") {
      console.error("Received non-POST request");
      return res.status(405).send({ error: "Method Not Allowed" });
    }

    console.log("Handling request with handleElevenLabsRequest function.");
    handleElevenLabsRequest(req, res);
  });
});

exports.checkAccess = functions.https.onRequest(async (req, res) => {
  console.log("checkAccess function called with method:", req.method);

  if (handleCORS(req, res)) {
    return;
  }

  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      console.error("Received non-POST request");
      return res.status(405).send({ error: "Method Not Allowed" });
    }

    // Assuming you have userId from the request
    const userId = req.body.userId;
    if (!userId) {
      return res.status(400).send({ error: "User ID is required" });
    }

    const verificationResult = await verifyAccess(userId);
    if (!verificationResult.accessGranted) {
      // Redirect user to Stripe checkout or send them the session ID
      return res.status(403).send({
        error: "Subscription required",
        stripeSessionId: verificationResult.stripeSessionId,
      });
    }

    res.status(200).send({ accessGranted: true });
  });
});
