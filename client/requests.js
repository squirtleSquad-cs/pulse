import React from "react";
import { excludeById, getTodayStr } from './utils'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

let loggedIn = false;
let todayStr = getTodayStr()
// EventGuid is event index within eventDb
let eventGuid = 0
// creates id for each object
function createEventId() {
  return String(eventGuid++)
}
// EventDb will hold all events for users
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

export function requestEventsInRange(startStr, endStr) {
  console.log(`[STUB] requesting events from ${startStr} to ${endStr}`)

  return new Promise((resolve, reject) => {
        resolve(eventDb) // won't use the start/end, always return whole DB
  })
}

export function requestEventCreate(plainEventObject) {
  console.log('[STUB] requesting event create:', plainEventObject)

  return new Promise((resolve, reject) => {
        let newEventId = createEventId()
        let objWithId = {...plainEventObject, id: newEventId}
        eventDb.push(objWithId)
        resolve(newEventId)
      })
}

export function requestEventUpdate(plainEventObject) {
  console.log('[STUB] requesting event update:', plainEventObject)

  return new Promise((resolve, reject) => {
        eventDb = excludeById(eventDb, plainEventObject.id)
        eventDb.push(plainEventObject)
        resolve(eventDb)
  })
}

export function requestEventDelete(eventId) {
  console.log('[STUB] requesting event delete, id:', eventId)

  return new Promise((resolve, reject) => {
        eventDb = excludeById(eventDb, eventId)
        resolve(eventDb)
  })
}


export function requestUserLogin() {
  console.log('user log in request')
    return fetch('/login/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        username: document.querySelector('#username').value,
        password: document.querySelector('#password').value,
      })
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("up to here", data);
      return data;
    } )
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
        username: document.querySelector('#username').value,
        password: document.querySelector('#password').value,
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


