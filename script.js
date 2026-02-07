onload = () => {
  // Play audio when website loads
  const audio = document.getElementById("backgroundAudio");
  if (audio) {
    audio.play().catch(error => {
      // Handle autoplay restrictions - some browsers require user interaction
      console.log("Audio autoplay prevented:", error);
    });
  }
  
  // Hide flowers initially
  const flowers = document.getElementById("flowers");
  flowers.style.opacity = "0";
  
  // Get message elements
  const message1 = document.getElementById("message1");
  const message2 = document.getElementById("message2");
  
  // Sequence: First message fades in after 3 seconds
  setTimeout(() => {
    message1.classList.add("active");
  }, 3000);
  
  // First message fades out after showing for 6 seconds (3 original + 3 extra for readability)
  // Fade in takes 1.5s, so we wait 6s after fade in starts = 3s + 6s = 9s total
  setTimeout(() => {
    message1.classList.remove("active");
  }, 9000);
  
  // Second message fades in after first message fully fades out
  // First message fade out takes 1.5s, so wait 1.5s after fade out starts
  // 9s (when fade out starts) + 1.5s (fade out duration) = 10.5s
  setTimeout(() => {
    message2.classList.add("active");
  }, 10500);
  
  // Second message fades out after showing for 6 seconds (3 original + 3 extra for readability)
  // Fade in takes 1.5s, so we wait 6s after fade in starts = 10.5s + 6s = 16.5s total
  setTimeout(() => {
    message2.classList.remove("active");
  }, 16500);
  
  // Show flowers after second message fully fades out
  // Second message fade out takes 1.5s, so wait 1.5s after fade out starts
  // 16.5s (when fade out starts) + 1.5s (fade out duration) = 18s
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
    flowers.style.opacity = "1";
  }, 18000);
};