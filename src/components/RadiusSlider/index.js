import React from 'react';
import { connect } from 'react-redux';

import { updateRadius } from './actions';
import './RadiusSlider.css';

// props might be func to take radius and use it somewhere else,
// change max radius, etc
const RadiusSlider = props => {

    const [radius, setRadius] = React.useState(50);

    const getSliderValue = event => {
        const element = event.target;
        setRadius(parseInt(element.value));
        props.updateRad(parseInt(element.value));
    }

    return (
        <div>
            <div className="RadiusSlider-container">
                <label for="radSlider">Adjust radius!</label>
                <br />
                <input 
                    className="RadiusSlider__slider" 
                    min="50" 
                    value={radius}
                    max="400" 
                    type="range" 
                    id="radSlider"
                    onChange={(e) => getSliderValue(e)} 
                />
            </div>
            <div className="RadiusSlider__rad-text">
                Current radius: {radius}
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    updateRad: rad => dispatch(updateRadius(rad))
});

export default connect(null, mapDispatchToProps)(RadiusSlider);