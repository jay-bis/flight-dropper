import * as MapActions from './actions';
// set initial location as Iowa City for now
const initialState = {
    location: {
        lat: 41.66,
        lng: -91.53
    }
}

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case MapActions.UPDATE_PLANE_LOC:
            return { ...state, location: action.location }
    default:
        return state;
    }
};

export default mapReducer;