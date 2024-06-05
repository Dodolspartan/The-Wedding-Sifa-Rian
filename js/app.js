document.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.getElementById("invitationAudio");
  audio.play().catch((error) => {
    console.log("Autoplay was prevented. User interaction is required.");
  });
});

//element date script
// Set the date we're counting down to
var countdownDate = new Date("Juni, 30 2024 23:59:59").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countdownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML =
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds ";

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

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
