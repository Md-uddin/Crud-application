import * as cons from '../constants/actionType'

export default (posts = [], action) => {
  switch (action.type) {
    case cons.FETCH_ALL:
      console.log(action.payload);
      return action.payload;
    case cons.DELETE:
      return posts.filter((post) => post._id !== action.payload);
      case cons.UPDATE:
        case cons.LIKE:
      console.log("like");
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case cons.CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
