import { combineReducers } from 'redux';

import mapReducer from '../src/components/SimpleMap/reducer';

const rootReducer = combineReducers({
    map: mapReducer
});

export default rootReducer;