async function handleElevenLabsRequest(req, res) {
  console.log("Received a request with the following body:", req.body);

  const functions = require("firebase-functions");
  const axios = require("axios");

  const ELEVEN_LABS_API_KEY = "0e8e4a935c3e0f56f31041dfc475fbca";

  const {
    prompt,
    voiceId = "MF3mGyEYCl7XYWbV9V6O",
    stability = 0.5,
    similarityBoost = 0.5,
    optimizeStreamingLatency = 0,
  } = req.body.data;

  if (!prompt) {
    console.error("Error: Missing 'prompt' field in request.");
    return res.status(400).send({ error: "The 'prompt' field is required." });
  }

  const API_ENDPOINT = `https://api.elevenlabs.io/v1/text-to-speech/MF3mGyEYCl7XYWbV9V6O/stream`;

  const headers = {
    Accept: "audio/mpeg",
    "xi-api-key": ELEVEN_LABS_API_KEY,
    "Content-Type": "application/json",
  };

  const data = {
    text: prompt,
    model_id: "eleven_monolingual_v1",
    voice_settings: {
      stability,
      similarity_boost: similarityBoost,
      style: 0.5,
      use_speaker_boost: true,
    },
  };

  console.log("Sending request to ElevenLabs with data:", data);

  try {
    const response = await axios.post(API_ENDPOINT, data, {
      headers,
      responseType: "arraybuffer",
      params: {
        optimize_streaming_latency: optimizeStreamingLatency,
      },
    });

    if (response.status !== 200) {
      console.error(
        "Unexpected response status from ElevenLabs API:",
        response.status
      );
      console.error("Response data:", response.data);
      return res
        .status(400)
        .send({ error: "Unexpected response from ElevenLabs API." });
    }

    // Convert the array buffer to a base64 string
    const audioBase64 = Buffer.from(response.data).toString("base64");

    console.log("Successfully received response from ElevenLabs.");
    res.status(200).send({ success: true, data: { audioBase64: audioBase64 } });
  } catch (error) {
    console.error("Error while calling ElevenLabs API:", error.message);
    if (error.response) {
      console.error("Error details:", error.response.data);
      if (error.response.status === 422) {
        console.error(
          "Validation error from ElevenLabs API:",
          error.response.data.toString()
        );
        return res.status(422).send({
          error: "Validation error from ElevenLabs API.",
          details: error.response.data,
        });
      }
    }
    return res
      .status(500)
      .send({ error: "Internal server error.", message: error.message });
  }
}

module.exports = {
  handleElevenLabsRequest,
};
