import React from 'react';

import SimpleMap from '../src/components/SimpleMap';
import getLocation from './utils/getLocation';
import './App.css';

function App() {

  const [location, setLocation] = React.useState({ lat: 0, lng: 0});

  React.useEffect(() => {
    const loc = getLocation();
    setLocation(loc);
  }, [location]);

  return (
    <div className="App">
      <SimpleMap
        center={location}
        zoom={6}
      />
    </div>
  );
}

export default App;
