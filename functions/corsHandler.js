const cors = require("cors");

const corsHandler = cors({ origin: true });

const allowedOrigins = [
  "https://aimedscribe-786ef.web.app",
  "http://localhost:3000",
];

function handleCORS(req, res) {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.set("Access-Control-Allow-Origin", origin);
  }

  res.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  console.log(`Incoming request method: ${req.method}`);
  console.log(`Incoming request origin: ${req.headers.origin}`);

  if (req.method === "OPTIONS") {
    console.log("Handled OPTIONS request");
    res.status(204).send("");
    return true; // Indicates that an OPTIONS request was handled
  }
  return false; // Indicates that it was not an OPTIONS request
}

module.exports = {
  handleCORS,
  corsHandler,
};
