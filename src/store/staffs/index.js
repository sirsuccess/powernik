import * as actions from "./actionsTypes";
import users from "../../utills/users";

const defaultState = {
  staffs: users,
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
      const staffss = state.staffs.filter((user) => {
        return user.id !== action.data;
      });
      return { staffs: staffss, loading: false };
    case actions.EDIT_STAFF_REQUEST:
      return { ...state, loading: false, shortlisted: action.data };
    case actions.ADD_TIME_REQUEST:
      const staffsss = state.staffs.map((user) => {
        if (user.id === action.data.id) {
          return action.data;
        }
        return user;
      });
      return { staffs: staffsss, loading: false } ;
    default:
      return state;
  }
};
