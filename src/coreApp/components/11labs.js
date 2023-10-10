import { getFunctions, httpsCallable } from "firebase/functions";
import AudioWaveform from "./AudioWaveform"; // Import the AudioWaveform component
import { app } from "../firebase";

async function playStreamedAudio(url) {
  return new Promise(async (resolve, reject) => {
    const audioContext = new AudioContext();
    const source = audioContext.createBufferSource();

    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();

    audioContext.decodeAudioData(arrayBuffer, (buffer) => {
      source.buffer = buffer;
      source.connect(audioContext.destination);
      resolve({ audioContext, source }); // Return both context and source
      source.start(0);
    });
  });
}

async function playBase64Audio(base64String) {
  return new Promise(async (resolve, reject) => {
    const audioContext = new AudioContext();
    const source = audioContext.createBufferSource();

    const byteCharacters = atob(base64String);
    const byteNumbers = Array.prototype.slice
      .call(byteCharacters)
      .map((char) => char.charCodeAt(0));
    const arrayBuffer = new Uint8Array(byteNumbers).buffer;

    audioContext.decodeAudioData(arrayBuffer, (buffer) => {
      source.buffer = buffer;
      source.connect(audioContext.destination);
      resolve({ audioContext, source }); // Return both context and source
      source.start(0);
    });
  });
}

async function getResponseAndSpeak(prompt, voiceId = "MF3mGyEYCl7XYWbV9V6O") {
  console.log(
    "getResponseAndSpeak called with prompt:",
    prompt,
    "and voiceId:",
    voiceId
  );

  const functionsInstance = getFunctions(app);
  const textToSpeechFunction = httpsCallable(functionsInstance, "textToSpeech");
  let audioData;

  try {
    const result = await textToSpeechFunction({
      prompt: prompt,
      voiceId: voiceId,
    });

    console.log("Received result from Firebase function:", result);

    if (result.data.audioUrl) {
      const audioUrl = result.data.audioUrl;

      audioData = await playStreamedAudio(audioUrl);
      console.log("Audio should be playing now...");

      const downloadLink = document.createElement("a");
      downloadLink.href = audioUrl;
      downloadLink.download = "audio_output.wav";
      downloadLink.innerText = "Download Audio";
      document.body.appendChild(downloadLink);
    } else if (result.data.audioBase64) {
      audioData = await playBase64Audio(result.data.audioBase64);
      console.log("Audio (from base64 data) should be playing now...");
    } else {
      console.error("Response is missing the expected audio data.");
    }
  } catch (error) {
    console.error("Error:", error.message);

    if (error.details) {
      console.error("Error details:", error.details);
    }
  }

  return audioData;
}

export { getResponseAndSpeak };
