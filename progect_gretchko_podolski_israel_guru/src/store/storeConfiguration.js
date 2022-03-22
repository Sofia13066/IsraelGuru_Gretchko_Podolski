import {createStore} from 'redux';

const initialState = {events: [{}], guides: [], tourists: []};

const store = createStore(initialState);
