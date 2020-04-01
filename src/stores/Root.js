import { createStore, combineReducers } from 'redux';
import launchCollection from './LaunchCollectionReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  launchCollection
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
