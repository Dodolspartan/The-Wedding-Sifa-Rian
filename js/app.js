document.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.getElementById("invitationAudio");
  audio.play().catch((error) => {
    console.log("Autoplay was prevented. User interaction is required.");
  });
});

//element date script
document.addEventListener("DOMContentLoaded", function () {
  // Set the date we're counting down to
  const countDownDate = new Date("Juni 30, 2024 15:00:00").getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="days", "hours", "minutes", "seconds"
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".countdown-container").innerHTML =
        "<h2>Wedding Ceremony Started</h2>";
    }
  }, 1000);
});

// RSVP
function submitRSVP() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var errorMessage = document.getElementById("error-message");

  if (name && validateEmail(email)) {
    // Hide the form and show confirmation message
    document.getElementById("rsvp-form").style.display = "none";
    document.getElementById("confirmation").style.display = "block";

    // Send data to server
    sendDataToServer(name, email);
  } else {
    errorMessage.style.display = "block";
  }
}

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

function sendDataToServer(name, email) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "your-server-endpoint", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("RSVP successfully sent to the server.");
    }
  };
  var data = JSON.stringify({ name: name, email: email });
  xhr.send(data);
}
// Clipboard Js
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".element-kado-items div");

  elements.forEach((element) => {
    element.addEventListener("click", () => {
      const accountNumber = element.getAttribute("data-account-number");
      navigator.clipboard
        .writeText(accountNumber)
        .then(() => {
          alert(
            `Nomor rekening ${accountNumber} berhasil disalin ke clipboard.`,
          );
        })
        .catch((err) => {
          console.error("Gagal menyalin teks: ", err);
        });
    });
  });
});
