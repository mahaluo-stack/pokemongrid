import { combineReducers } from 'redux';
import searchbar from './searchbar';
import typeFilter from './typeFilter';

export const uiRoot = combineReducers({ 
    searchbar,
    typeFilter
});