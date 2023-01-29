import { GET_POSTS } from "../actions/postActions.js";

export const getPosts = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        res.data;
        dispatch({ type: GET_POSTS, payload: res.data });
      })
      .catch((err) => console.log("get posts", err));
  };
};
