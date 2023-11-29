// Get references to the overlay and popup elements
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

// Get references to the show and close buttons
const showPopupButton = document.getElementById("showPopupButton");

const closePopupButton = document.getElementById("closePopupButton");

// Function to show the popup
function showPopup() {
  overlay.style.display = "block";
  popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
  overlay.style.display = "none";
  popup.style.display = "none";
}

// Add click event listeners to the show and close buttons
showPopupButton.addEventListener("click", showPopup);

closePopupButton.addEventListener("click", closePopup);

// mobile section here
document.getElementById("showSection").addEventListener("click", function () {
  var section = document.getElementById("mySection");
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
});
