import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import { K_SIZE } from '../Plane/styles'
import { updatePlaneLoc } from './actions';
import AirplaneRadius from '../AirplaneRadius';
import Plane from '../Plane';

const SimpleMap = (props) => {

  // control draggin of plane markers
  const [canDrag, setCanDrag] = React.useState(true);
  // render a radius around marker once it is done
  // dragging
  const [renderCircle, setRenderCircle] = React.useState(null);

  const onChildMouseDown = () => {
    setCanDrag(false);
    setRenderCircle(null);
  };

  const onChildMouseUp = () => {
    setCanDrag(true);
    // give setRenderCircle the last set of coordinates
    // before it stopped moving
    setRenderCircle({lat: props.location.lat, lng: props.location.lng});
  };

  const onChildMouseMove = (key, marker, newCoords) => {
    props.updateLocation(newCoords);
  };

  let radiusDisplay = null;
  // render airplane radii
  if (renderCircle) {
    radiusDisplay = 
      <AirplaneRadius
        lat={renderCircle.lat}
        lng={renderCircle.lng}
      />
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '800px', width: '100%' }}>
      <GoogleMapReact
        //bootstrapURLKeys={{ key: '' }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        onChildMouseEnter={props.onChildMouseEnter}
        onChildMouseLeave={props.onChildMouseLeave}
        onChildMouseDown={onChildMouseDown}
        onChildMouseUp={onChildMouseUp}
        onChildMouseMove={onChildMouseMove}

        hoverDistance={K_SIZE}
        draggable={canDrag}
      >
        <Plane
          lat={props.location.lat}
          lng={props.location.lng}
        />
        {radiusDisplay}

      </GoogleMapReact>
    </div>
  )
};

SimpleMap.propTypes = {
  center: propTypes.object.isRequired,
  zoom: propTypes.number.isRequired
}

SimpleMap.defaultProps = {
  center: {
    lat: 41.66,
    lng: -91.53
  },
  zoom: 6
}

const mapStateToProps = state => ({
  location: state.map.location
});

const mapDispatchToProps = dispatch => ({
  updateLocation: loc => dispatch(updatePlaneLoc(loc))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SimpleMap);