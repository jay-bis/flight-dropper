import * as RadiusSliderActions from './actions';
// set initial location as Iowa City for now
const initialState = {
    // default is set to 50
    radius: 50
};

const radiusSliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case RadiusSliderActions.UPDATE_RADIUS:
            return { ...state, radius: action.radius }
    default:
        return state;
    }
};

export default radiusSliderReducer;