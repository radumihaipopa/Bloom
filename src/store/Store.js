import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/rootReducer';

function getStore() {
    return createStore(reducer, applyMiddleware(thunk));
}
export default getStore;