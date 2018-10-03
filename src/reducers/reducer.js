import _ from 'lodash';
import {FETCH_BLOG_POSTS} from '../actions';
import {FETCH_BLOG_POST} from '../actions';
import {DELETE_BLOG_POST} from '../actions';
export default function(state={}, action){
  switch(action.type){
    case FETCH_BLOG_POSTS:
      return {...state,[action.payload.data.id]:action.payload.data };
      case FETCH_BLOG_POST:
        return _.mapKeys(action.payload.data,"id");
      case DELETE_BLOG_POST:
        return _.omit(state, action.payload);
    default:
      return state;
  }
}
