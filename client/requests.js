import { excludeById, getTodayStr } from './utils'

/*
functions that simulate network requests
*/

let todayStr = getTodayStr()
let eventGuid = 0
let eventDb = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  }
]

const DELAY = 200
let simulateErrors = false

document.addEventListener('keypress', (ev) => {
  if (ev.key === 'e') {
    alert('You pressed the key "e". Will begin to simulate errors.')
    simulateErrors = true
  }
})



export function requestEventsInRange(startStr, endStr) {
  console.log(`[STUB] requesting events from ${startStr} to ${endStr}`)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('error'))
      } else {
        resolve(eventDb) // won't use the start/end, always return whole DB
      }
    }, DELAY)
  })
}

export function requestEventCreate(plainEventObject) {
  console.log('[STUB] requesting event create:', plainEventObject)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('error'))
      } else {
        let newEventId = createEventId()
        let objWithId = {...plainEventObject, id: newEventId}
        eventDb.push(objWithId)
        resolve(newEventId)
      }
    }, DELAY)
  })
}

export function requestEventUpdate(plainEventObject) {
  console.log('[STUB] requesting event update:', plainEventObject)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateErrors) {
        reject(new Error('problem'))
      } else {
        eventDb = excludeById(eventDb, plainEventObject.id)
        eventDb.push(plainEventObject)
        resolve(eventDb)
      }
    }, DELAY)
  })
}

export function requestEventDelete(eventId) {
  console.log('[STUB] requesting event delete, id:', eventId)

  return new Promise((resolve, reject) => {
    setTimeout(() => { // simulate network delay
      if (simulateErrors) {
        reject(new Error('problem'))
      } else {
        eventDb = excludeById(eventDb, eventId)
        resolve(eventDb)
      }
    }, DELAY)
  })
}


export function requestUserLogin() {
  console.log('user log in request')
    fetch('/login/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username: document.querySelector('#Username').value,
        password: document.querySelector('#Password').value,
      })
    })
    .then((resp) => resp.json())
    .then((data) => {
      // user interview data.userStuff
      dispatch(data.userStuff)
      })
    .catch((err) => {
      console.log('Login page: user not found', err)
      })
  };

export function requestRegisterUser() {
  console.log('user log in request')
    fetch('/login/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username: document.querySelector('#Username').value,
        password: document.querySelector('#Password').value,
      })
    })
    .then((resp) => resp.json())
    .then((data) => {
      // update our state with the hooks we defined earlier
      })
    .catch((err) => {
      console.log('Login page: user not found', err)
      })
  };


function createEventId() {
  return String(eventGuid++)
}