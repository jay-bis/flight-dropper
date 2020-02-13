import { combineReducers } from 'redux';

import mapReducer from '../src/components/SimpleMap/reducer';
import radiusSliderReducer from '../src/components/RadiusSlider/reducer';

const rootReducer = combineReducers({
    map: mapReducer,
    radius: radiusSliderReducer
});

export default rootReducer;