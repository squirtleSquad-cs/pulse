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
          plainEventObject,
        });
      });
    };
  },

  deleteEvent(eventId) {
    return (dispatch) => {
      return requestEventDelete(eventId).then(() => {
        dispatch({
          type: "DELETE_EVENT",
          eventId,
        });
      });
    };
  },

// this will get triggered by the on click button on the login component 
   login() {
    return (dispatch) => {
      return requestUserLogin().then(() => {
        dispatch({
          type: "LOGIN_USER",
        });
      });
    };
  },

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
