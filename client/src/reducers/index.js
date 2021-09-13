import { combineReducers } from "redux";

import posts from "./Posts.js";

export default combineReducers({
  posts: posts,
});
