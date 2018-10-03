import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import BlogPosts from "./reducer";
const rootReducer = combineReducers({
  posts: BlogPosts,
  form: formReducer
});

export default rootReducer;
