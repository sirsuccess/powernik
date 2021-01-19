import * as actions from "./actionsTypes";



export const addStaffRequest = (data) => {
  return {
    type: actions.ADD_STAFF_REQUEST,
    data: data,
  };
};
export const deleteStaffRequest = (data) => {
  return {
    type: actions.DELETE_STAFF_REQUEST,
    data: data,
  };
};
export const addTimeRequest = (data) => {
  return {
    type: actions.ADD_TIME_REQUEST,
    data: data,
  };
};