import * as actions from "./actionsTypes";

const defaultState = {
  staffs: [],
  loading: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actions.GET_STAFF_REQUEST:
      return state;
    case actions.ADD_STAFF_REQUEST:
      let staffs = [action.data, ...state.staffs];
      return { staffs, loading: false };
    case actions.DELETE_STAFF_REQUEST:
      const deletStaff = state.staffs.filter((user) => {
        return user.id !== action.data;
      });
      return { staffs: deletStaff, loading: false };
    case actions.EDIT_STAFF_REQUEST:
      return { ...state, loading: false, shortlisted: action.data };
    case actions.ADD_TIME_REQUEST:
      const timeStaff = state.staffs.map((user) => {
        if (user.id === action.data.id) {
          return action.data;
        }
        return user;
      });
      return { staffs: timeStaff, loading: false };
    default:
      return state;
  }
};
