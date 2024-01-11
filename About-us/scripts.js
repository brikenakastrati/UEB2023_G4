document.addEventListener("DOMContentLoaded", function () {
  const newsletterSection = document.getElementById("newsletter-section");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  // Append overlay to the body
  document.body.appendChild(overlay);

  let popUpShown = false;

  window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100 && !popUpShown) {
          newsletterSection.style.display = "block"; // Show the section
          newsletterSection.classList.add("pop-up");
          overlay.classList.add("show-overlay");
          popUpShown = true; // Set the flag to true once the pop-up is shown
      }
  });
});

function submitForm() {
  // Add your form submission logic here

  // Close the pop-up after 2 seconds
  setTimeout(closePopup, 2000);
}

function closePopup() {
  const newsletterSection = document.getElementById("newsletter-section");
  const overlay = document.querySelector(".overlay");

  newsletterSection.style.display = "none"; // Hide the section
  newsletterSection.classList.remove("pop-up");
  overlay.classList.remove("show-overlay");
}
