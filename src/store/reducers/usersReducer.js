import { ADD_TO_LAST_VIEWED } from "../actions/actionTypes";


const initialState = [];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LAST_VIEWED:
      const { user } = action.payload;

      return [{ ...user }]
        .concat(...state.filter((u) => u.id !== user.id))
        .slice(0, 4);
    default:
      return state;
  }
};

export default usersReducer;
