import React from 'react';
import { connect } from 'react-redux';

import './AirplaneRadius.css';

// props might be radius set from filter, circle color,
// how many results you want to show up, etc
const AirplaneRadius = props => {
    
    const circleRadius = {
        width: props.radius.toString() + 'px',
        height: props.radius.toString() + 'px',
        borderRadius: props.radius.toString() + 'px'
    }

    return (
        <div className="AirplaneRadius" style={circleRadius}>
            
        </div>
    )
}

const mapStateToProps = state => ({
    radius: state.radius.radius
});

export default connect(mapStateToProps)(AirplaneRadius);