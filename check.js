// Function to manage dropdown menu behavior
function app() {
  // Selecting necessary elements from the DOM
  const menuTrigger = document.querySelector("#profile-menu"); // Element that triggers the dropdown menu
  const menu = document.querySelector("#profile-menu-content"); // Dropdown menu container
  const menuItems = Array.from(menu.querySelectorAll('[role="menuitem"]')); // All items inside the dropdown menu

  // Function to handle Escape key press to close the menu
  function handleMenuEscapeKeypress(e) {
    if (e.key === "Escape") {
      toggleMenu();
    }
  }

  // Function to handle arrow key press for menu item navigation
  function handleMenuItemArrowKeyPress(e, idx) {
    // Creating helpful variables to determine if it's the first or last menu item
    const isLastMenuItem = idx === menuItems.length - 1;
    const isFirstMenuItem = idx === 0;

    // Variables for the next and previous menu items
    const nextMenuItem = menuItems[idx + 1];
    const previousMenuItem = menuItems[idx - 1];

    // Handling arrow right or arrow down key press
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      if (isLastMenuItem) {
        // If the user is on the last item, focus on the first menu item
        menuItems[0].focus();
        console.log("isFirstItem: " + menuItems[0]);
        return;
      }
      // Focus on the next menu item
      nextMenuItem.focus();
    }

    // Handling arrow up or arrow left key press
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      if (isFirstMenuItem) {
        // If the user is on the first item, focus on the last menu item
        menuItems[menuItems.length - 1].focus();
        return;
      }
      // Focus on the previous menu item
      previousMenuItem.focus();
    }
  }

  // Function to open the menu
  function openMenu() {
    menuTrigger.setAttribute("aria-expanded", "true");
    menuItems[0].focus(); // Focus on the first menu item
    console.log(menuItems[0]);

    // Adding keyup event listener to handle Escape key press for menu closing
    document.addEventListener("keyup", handleMenuEscapeKeypress);

    // Adding keyup event listeners for each menu item for navigation
    menuItems.forEach((item, itemIndex) => {
      item.addEventListener("keydown", (e) => {
        handleMenuItemArrowKeyPress(e, itemIndex);
      });
    });
  }

  // Function to close the menu
  function closeMenu() {
    menuTrigger.setAttribute("aria-expanded", "false");
    menuTrigger.focus(); // Focus back on the menu trigger

    // Removing keyup event listener to handle Escape key press for menu closing
    document.removeEventListener("keyup", handleMenuEscapeKeypress);

    // Removing keyup event listeners for each menu item for navigation
    menuItems.forEach((item) => {
      item.removeEventListener("keydown", handleMenuItemArrowKeyPress);
    });
  }

  // Function to toggle the menu's visibility
  function toggleMenu() {
    const isExpanded = menuTrigger.getAttribute("aria-expanded") === "true";
    menu.classList.toggle("menu-active");

    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Adding click event listener to the menu trigger to toggle the menu
  menuTrigger.addEventListener("click", toggleMenu);
}

// Calling the app function to initialize the dropdown menu behavior
app();
