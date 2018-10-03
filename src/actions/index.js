import axios from 'axios';

export const FETCH_BLOG_POSTS = 'fetch_posts';
export const CREATE_BLOG_POST = 'create_blog_post';
export const FETCH_BLOG_POST = 'fetch_post';
export const DELETE_BLOG_POST = 'delete_post';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

export function fetchPosts(){
const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return{
    type: FETCH_BLOG_POSTS,
    payload: request
  };
}

export function createBlogPost(values,callback){
const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
.then(() => callback());
return{
  type: CREATE_BLOG_POST,
  payload: request
};
}
export function fetchPost(id){
const request = axios.get(`${ROOT_URL}/posts${id}${API_KEY}`)
.then(() => callback());
return{
  type: FETCH_BLOG_POST,
  payload: request
};
}

export function deletePost(id,callback){
const request = axios.delete(`${ROOT_URL}/posts${id}${API_KEY}`)
.then(() => callback());
return{
  type: DELETE_BLOG_POST,
  payload: id
};
}
