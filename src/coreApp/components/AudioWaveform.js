import React, { useEffect, useRef } from "react";

function AudioWaveform({ audioContext, source }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!audioContext || !source) return;

    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 512;
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    const timeArray = new Uint8Array(analyser.frequencyBinCount);
    const decayArray = new Uint8Array(analyser.frequencyBinCount);

    source.connect(analyser);

    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext("2d");

    function drawWaveform() {
      requestAnimationFrame(drawWaveform);

      analyser.getByteFrequencyData(dataArray);
      analyser.getByteTimeDomainData(timeArray);

      canvasContext.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / analyser.frequencyBinCount) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < analyser.frequencyBinCount; i++) {
        barHeight = (dataArray[i] + (timeArray[i] - 128) * 3) / 2; // Increased the factor for timeArray to 3 for more exaggeration

        if (barHeight > decayArray[i]) {
          decayArray[i] = barHeight;
        } else {
          decayArray[i] *= 0.95;
        }

        canvasContext.fillStyle = "rgba(173, 216, 230, 0.8)"; // light blue color

        const adjustedHeight = Math.min(decayArray[i] / 2.5, canvas.height / 2); // Adjust the height for more exaggeration

        canvasContext.fillRect(
          x,
          canvas.height / 2 - adjustedHeight / 2,
          barWidth,
          adjustedHeight
        );
        canvasContext.fillRect(x, canvas.height / 2, barWidth, -adjustedHeight); // Drawing the mirror reflection

        x += barWidth + 1;
      }
    }

    drawWaveform();

    return () => {
      source.disconnect(analyser);
    };
  }, [audioContext, source]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "1em" }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", maxWidth: "800px" }}
        height="100"
      ></canvas>
    </div>
  );
}

export default AudioWaveform;
