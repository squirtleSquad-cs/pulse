import {
  requestEventsInRange,
  requestEventCreate,
  requestEventUpdate,
  requestEventDelete,
  requestUserLogin,
  requestRegisterUser,
} from "../requests";

export default {
  toggleWeekends() {
    return {
      type: "TOGGLE_WEEKENDS",
    };
  },

  requestEvents(startStr, endStr) {
    return (dispatch) => {
      return requestEventsInRange(startStr, endStr).then(
        (plainEventObjects) => {
          dispatch({
            type: "RECEIVE_EVENTS",
            plainEventObjects,
          });
        }
      );
    };
  },

  createEvent(plainEventObject) {
    return (dispatch) => {
      return requestEventCreate(plainEventObject).then((newEventId) => {
        dispatch({
          type: "CREATE_EVENT",
          plainEventObject: {
            id: newEventId,
            ...plainEventObject,
          },
        });
      });
    };
  },

  updateEvent(plainEventObject) {
    return (dispatch) => {
      return requestEventUpdate(plainEventObject).then(() => {
        dispatch({
          type: "UPDATE_EVENT",
          payload: plainEventObject,
        });
      });
    };
  },

  deleteEvent(eventId) {
    return (dispatch) => {
      return requestEventDelete(eventId).then(() => {
        dispatch({
          type: "DELETE_EVENT",
          payload: eventId,
        });
      });
    };
  },

// this will get triggered by the on click button on the login component 
  userLogin() {
    return (dispatch) => {
      const getLoginstate = async () => {
        const loggedInState = await requestUserLogin();
        return loggedInState;
      }
      getLoginstate()
        .then((plainEventObjects) => {
          console.log('please work', plainEventObjects);
          dispatch({
            type: "LOGIN_USER",
            payload: plainEventObjects
          });
          window.location.href = '/main';
          window.location.assign('/main');        
        })
        .catch((err) => console.log(err));
  }},
  
  registerUser() {
    return (dispatch) => {
      return requestRegisterUser().then(() => {
        dispatch({
          type: "REGISTER_USER",
        });
      });
    };
  },

};
