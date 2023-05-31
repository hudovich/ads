import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk"
import init from './init'
import category from './category'
import post from './post'
import pages from './pages'
import User from './users';
import Massage from './chat';

const redusers = combineReducers({
    init: init,
    category:category,
    post: post,
    pages: pages,
    user: User,
    massage: Massage,
})

const store = createStore(redusers, applyMiddleware(thunk));

export default store;
