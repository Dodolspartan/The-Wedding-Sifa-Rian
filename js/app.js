document.addEventListener("DOMContentLoaded", function () {
  var music = document.getElementById("backgroundMusic");
  var controlButton = document.getElementById("controlButton");
  var controlIcon = document.getElementById("controlIcon");

  // Play music automatically when the website loads
  music.play();
  controlButton.classList.add("rotate");

  controlButton.addEventListener("click", function () {
    if (music.paused) {
      music.play();
      controlIcon.classList.remove("fa-play");
      controlIcon.classList.add("fa-pause");
      controlButton.classList.add("rotate");
    } else {
      music.pause();
      controlIcon.classList.remove("fa-pause");
      controlIcon.classList.add("fa-play");
      controlButton.classList.remove("rotate");
    }
  });
});
// Animasi akad
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".element-akad-nikah, .element-resep-nikah, .countdown, .button",
  );

  function checkVisibility() {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add("animate");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
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
// Animate Galery
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".animate__animated");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__fadeInUp");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  items.forEach((item) => {
    observer.observe(item);
  });
});
