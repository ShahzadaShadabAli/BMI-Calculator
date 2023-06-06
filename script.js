const form = document.querySelector('form')
const invited = document.querySelector('#invited')
const modalBody = document.querySelector('.modal-body')
const removeGuests = document.getElementById('removeGuests')

// Global Variables
let guestsArray = [];
let guests = {};

let Guestinvited = 'was not Invited!';

function createDOM() {
    modalBody.textContent = ''
    guestsArray.forEach(function(guest, i) {
        const guestCon = document.createElement('div')
        guestCon.classList.add('guest-container')
        const digit = document.createElement('p')
        digit.classList.add('digit')
        digit.textContent= `${i+1}.`
        const nameDiv = document.createElement('div')
        const nameTitle = document.createElement('span')
        nameTitle.classList.add('font-weight-bold')
        nameTitle.textContent='Name: '
        const name = document.createElement('span')
        name.textContent = guest.name
        const SnameDiv = document.createElement('div')
        const SnameTitle = document.createElement('span')
        SnameTitle.classList.add('font-weight-bold')
        SnameTitle.textContent='Surname: '
        const surname = document.createElement('span')
        surname.textContent = guest.surname
        const statusDiv = document.createElement('div')
        const statusTitle = document.createElement('span')
        statusTitle.classList.add('font-weight-bold')
        statusTitle.textContent='Status: '
        const status = document.createElement('span')
        status.textContent = guest.status

         nameDiv.append(nameTitle, name)
         SnameDiv.append(SnameTitle, surname)
         statusDiv.append(statusTitle, status)
         guestCon.append(digit, nameDiv, SnameDiv, statusDiv)
         modalBody.append(guestCon)

    })
}

function getValue() {
    if (Guestinvited === 'was Invited!') {
        Guestinvited = 'was not Invited!'
    } else {
        Guestinvited = 'was Invited!'
    }
   
    console.log(Guestinvited)
}

function getDataFromLocalStorage() {
    if (localStorage.getItem('guests')){
        guestsArray = JSON.parse(localStorage.getItem('guests'))
        createDOM()
    }
}

function clearLocalStorage() {
    localStorage.clear()
    guestsArray = JSON.parse(localStorage.getItem('guests'))
    createDOM()
}

function collectData(e) {
    e.preventDefault()
    const guestSname = e.srcElement[0].value
    const guestname = e.srcElement[1].value
    guests = {
        name: guestname,
        surname: guestSname,
        status: Guestinvited,
    }
    guestsArray.push(guests)
    console.log(guestsArray)
    localStorage.setItem('guests', JSON.stringify(guestsArray))
    form.reset()
    createDOM()
}

//Event Listeners
form.addEventListener('submit', collectData)
removeGuests.addEventListener('click', clearLocalStorage)

getDataFromLocalStorage()