/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// Code Plan
// Need to create accodion to hold all info
// Need to fetch photo, names, address, numbers, DOB
// Need to create an array with users
// Need a list to show all users at one time
// Add button so clicking on name will show each person individually

// Attached fetch API

// Code to create the accordion
const acc = document.getElementsByClassName("accordion")
let i

for (i = 0; i < acc.length; i++) {
  // eslint-disable-next-line prettier/prettier
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active")
    const panel = this.nextElementSibling
    if (panel.style.display === "block") {
      panel.style.display = "none"
    } else {
      panel.style.display = "block"
    }
  })
}
