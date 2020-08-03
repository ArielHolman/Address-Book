/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
// Code Plan
// Need to create accodion to hold all info
// Need to fetch photo, names, address, numbers, DOB
// Need to create an array with users
// Need a list to show all users at one time
// Add button so clicking on name will show each person individually
let arrayOfContacts

window.onload = function () {
  getContacts()
}

// Attach fetch API
const getContacts = () => {
  fetch(
    "https://randomuser.me/api?results=7&inc=name,location,email,phone,dob,picture"
  )
    .then((res) => res.json())
    .then((contacts) => (arrayOfContacts = contacts.results))
}

const consoleContacts = () => {
  console.log(arrayOfContacts)
}

const displayContacts = () => {
  const allContacts = document.getElementById("all-contacts")
  arrayOfContacts.map((contact) => {
    const li = document.createElement("li")
    const { name, phone, email, dob, location, picture } = contact
    const img = document.createElement("img")
    img.src = picture.medium
    const text = document.createTextNode(
      `${name.first} ${name.last}, Phone: ${phone}, Email: ${email}, Address: ${location.street.number} ${location.street.name} ${location.city} ${location.state} ${location.postcode} ${location.country}, Birthday: ${dob.date}`
    )
    li.appendChild(img)
    li.appendChild(text)
    allContacts.append(li)
  })
}

// Code to create the accordion
const acc = document.getElementsByClassName("accordion")
let i

for (i = 0; i < acc.length; i++) {
  // eslint-disable-next-line prettier/prettier
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active")
    const panel = this.nextElementSibling
    if (panel.style.display === "block") {
      panel.style.display = "none"
    } else {
      panel.style.display = "block"
    }
  })
}
