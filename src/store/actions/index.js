import qs from "qs";
import { ADD_TO_LAST_VIEWED, GET_POSTS, GET_USERS } from "./actionTypes";


export const getUsersAction = (filters = { name: "", page: 0 }) => {
  return {
    type: GET_USERS,
    payload: {
      request: {
        url: "/users" + qs.stringify(filters, { addQueryPrefix: true }),
      },
    },
  };
};

export const getPostsAction = (userId) => {
  return {
    type: GET_POSTS,
    payload: {
      request: {
        url: `/users/${userId}/posts`,
      },
    },
  };
};

export const addToLastViewedAction = (user) => ({
  type: ADD_TO_LAST_VIEWED,
  payload: {
    user,
  },
});
