document.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.getElementById("invitationAudio");
  audio.play().catch((error) => {
    console.log("Autoplay was prevented. User interaction is required.");
  });
});
