import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/home_page';
import AboutUs from './components/about_us';
import EBoard from './components/e_board';
import Events from './components/events';
import BlogPost from './components/blog_post';
import Blog from './components/blog';
import NewBlogPost from './components/new_blog_post';
import reducers from './reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Route path="/home" component={HomePage}/>
      <Route path="/about" component={AboutUs}/>
      <Route path="/eboard" component={EBoard}/>
      <Route path="/events" component={Events}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/blog/:id" component={BlogPost}/>
      <Route path="/post" component={NewBlogPost}/>
    </div>
    </ BrowserRouter>
  </ Provider>
  , document.querySelector('.container'));
