import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { appRoot } from './app/root';
import { dataRoot } from './data/root';
import { uiRoot } from './ui/root';

const persistConfig = {
    key: 'root',
    storage
};

const combinedRoot = combineReducers({
    app: appRoot,
    data: dataRoot,
    ui: uiRoot
});

const rootReducer = (state, action) => {
    if (action.type === 'CLEAR_PERSIST') {
        storage.removeItem('persist:root');
        return combinedRoot(undefined, action);
    }
    else { return combinedRoot(state, action); };
};

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

export default persistedReducer;