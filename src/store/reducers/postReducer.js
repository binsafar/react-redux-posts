import { GET_POSTS } from "../actions/postActions.js";

const initialState = {
  posts: null,
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        posts: payload,
      };
    default:
      break;
  }
};

export default postsReducer;
