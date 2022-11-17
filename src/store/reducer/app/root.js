import { combineReducers } from 'redux';
import device from './device';
import page from './page';

export const appRoot = combineReducers({
    deviceState: device,
    page
});