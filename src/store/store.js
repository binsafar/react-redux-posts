import { createStore } from "redux"
import { GET_POSTS } from "./actions/postActions.js"
import postReducers from "./reducers/postReducer.js"

const store = createStore(
  postReducers
)

export default store;