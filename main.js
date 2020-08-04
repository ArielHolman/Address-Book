/* eslint-disable no-return-assign */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
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

// const consoleContacts = () => {
//   console.log(arrayOfContacts)
// }

// Hides contacts personal information unless button is click on
const showMoreInfo = (id) => {
  const contactInfo = document.getElementById(id)
  if (contactInfo.style.display === "block") {
    contactInfo.style.display = "none"
  } else {
    contactInfo.style.display = "block"
  }
}
// Displays all of the information from the request. Note, this funtion is within the map method so it goes for every contact. Since we needed information to each contact was getting the button applied we had to use the index to seperate by contact.
// eslint-disable-next-line no-unused-vars
const displayContacts = () => {
  const allContacts = document.getElementById("all-contacts")
  // eslint-disable-next-line array-callback-return
  arrayOfContacts.map((contact, i) => {
    const li = document.createElement("li")
    const { name, phone, email, dob, location, picture } = contact
    const img = document.createElement("img")
    img.src = picture.medium
    const fullName = document.createTextNode(`${name.first} ${name.last}`)
    const moreInfoBtn = document.createElement("button")
    const moreInfoBtnText = document.createTextNode("More Info")
    const moreInfoLi = document.createElement("li")
    moreInfoLi.style.display = "none"
    moreInfoLi.setAttribute("id", `more-info-${i}`)
    console.log(moreInfoLi)
    moreInfoBtn.addEventListener("click", () => {
      showMoreInfo(moreInfoLi.id)
    })
    const contactInfo = document.createTextNode(
      `Phone: ${phone}, Email: ${email}, Address: ${location.street.number} ${location.street.name} ${location.city} ${location.state} ${location.postcode} ${location.country}, Birthday: ${dob.date}`
    )
    // append primary info to list item
    li.appendChild(img)
    li.appendChild(fullName)
    li.appendChild(moreInfoBtn)
    // append contact info to button
    moreInfoLi.append(contactInfo)
    moreInfoBtn.append(moreInfoBtnText)
    // append info to function
    allContacts.append(moreInfoLi)
    allContacts.append(li)
  })
}
