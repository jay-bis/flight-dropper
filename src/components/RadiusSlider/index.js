import React from 'react';
import './RadiusSlider.css';

// props might be func to take radius and use it somewhere else,
// change max radius, etc
const RadiusSlider = props => {

    const [radius, setRadius] = React.useState(1);

    const getSliderValue = event => {
        const element = event.target;
        setRadius(parseInt(element.value));
    }

    return (
        <div>
            <div className="RadiusSlider-container">
                <label for="radSlider">Adjust radius!</label>
                <br />
                <input 
                    className="RadiusSlider__slider" 
                    min="10" 
                    value={radius}
                    max="250" 
                    type="range" 
                    id="radSlider"
                    onChange={(e) => getSliderValue(e)} 
                />
            </div>
            <div className="RadiusSlider__rad-text">
                Current radius: {radius} mi.
            </div>
        </div>
    )
};

export default RadiusSlider;