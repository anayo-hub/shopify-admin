// Get the user detail element
const userDetail = document.querySelector(".user-detail");

// Get the dropdown content
const dropdownContent = document.querySelector(".dropdown-content");

// Add a click event listener to the user detail element
userDetail.addEventListener("click", function () {
  // Toggle the 'active' class on the user detail element
  this.classList.toggle("active");

  // Toggle the display of the dropdown content
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

// Close the dropdown when clicking outside of it
document.addEventListener("click", function (event) {
  if (
    !userDetail.contains(event.target) &&
    !dropdownContent.contains(event.target)
  ) {
    userDetail.classList.remove("active");
    dropdownContent.style.display = "none";
  }
});
