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

// Function to navigate through dropdown options using arrow keys
const navigateDropdownOptions = (event) => {
  const dropdownItems = Array.from(
    dropdownContent.querySelectorAll(".dropdown-item")
  );

  // Get the index of the active element among dropdown items
  let currentIndex = dropdownItems.findIndex(
    (item) => item === document.activeElement
  );

  if (currentIndex !== -1) {
    if (event.key === "ArrowDown") {
      currentIndex = (currentIndex + 1) % dropdownItems.length;
    } else if (event.key === "ArrowUp") {
      currentIndex =
        (currentIndex - 1 + dropdownItems.length) % dropdownItems.length;
    }

    // Remove focus from the currently focused element
    dropdownItems[currentIndex].focus();
  }
};

// on dropdwon focus should stay on the trigger
// on first down arrow focus should be on  the first item in the content
// while foucus is on first item if up arrow is pressed focus should be moved back to trigger
//if on first item and down arrow is pressed focus should move to second and then next and next
//on last item and down arrow is pressed focus should go back to first item
// when on last and up is pressed focus should go back to previous item and in order back to first and back to trigger and close dropdown
