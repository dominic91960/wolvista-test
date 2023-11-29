// Get references to the overlay and popup elements
const overlay2 = document.getElementById("overlay2");
const popup2 = document.getElementById("popup2");

// Get references to the show and close buttons

const showPopupButton2 = document.getElementById("showPopupButton2");
const closePopupButton2 = document.getElementById("closePopupButton2");

// Function to show the popup
function showPopup() {
  overlay2.style.display = "block";
  popup2.style.display = "block";
}

// Function to close the popup
function closePopup() {
  overlay2.style.display = "none";
  popup2.style.display = "none";
}

// Add click event listeners to the show and close buttons

showPopupButton2.addEventListener("click", showPopup);
closePopupButton2.addEventListener("click", closePopup);

// mobile section here
document.getElementById("showSection").addEventListener("click", function () {
  var section = document.getElementById("mySection");
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
});
