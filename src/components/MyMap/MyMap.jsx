// import React, { Component } from 'react';
// import { MapContainer, GeoJSON } from 'react-leaflet';
// import countriesData from '../../data/countries.json';
// import 'leaflet/dist/leaflet.css';
// import '../MyMap/MyMap.css';

// class MyMap extends Component {
//   state = { color: '#ff0000' };

//   color = ['green', 'blue', 'yellow', 'orange', 'grey', 'violet', 'brown'];

//   componentDidMount() {
//     console.log(countriesData);
//   }

//   countryStyle = {
//     fillColor: 'red',
//     weight: 2,
//   };

//   changeCountryColor = event => {
//     event.target.setStyle({
//       color: 'black',
//       fillColor: this.state.color,
//       fillOpacity: 1,
//     });
//   };

//   onEachCountry = (country, layer) => {
//     const countryName = country.properties.ADMIN;
//     console.log(countryName);
//     layer.bindPopup(countryName);

//     // layer.options.fillOpacity = Math.random();

//     const colorIndex = Math.floor(Math.random() * this.color.length);
//     layer.options.fillColor = this.color[colorIndex];

//     layer.on({
//       click: this.changeCountryColor,
//     });
//   };

//   colorChange = event => {
//     this.setState({ color: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <h1 style={{ textAlign: 'center' }}>World map -</h1>
//         <MapContainer style={{ height: '80vh' }} zoom={2} center={[20, 100]}>
//           <GeoJSON
//             style={this.countryStyle}
//             data={countriesData.features}
//             onEachFeature={this.onEachCountry}
//           />
//         </MapContainer>
//         <input
//           type="color"
//           value={this.state.color}
//           onChange={this.colorChange}
//         />
//       </div>
//     );
//   }
// }

// export default MyMap;

//* Hooks

import React, { useState, useEffect } from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countriesData from '../../data/countries.json';
import '../MyMap/MyMap.css';

const MyMap = () => {
  const [selectedColor, setSelectedColor] = useState('#ff0000');
  const colors = [
    'green',
    'blue',
    'yellow',
    'orange',
    'grey',
    'violet',
    'brown',
    'gold',
    'pink',
    'bisque',
    'aquamarine',
    'midnightBlue',
    'teal',
  ];

  useEffect(() => {
    console.log(countriesData);
  }, []);

  const countryStyle = {
    // fillColor: selectedColor,
    weight: 4,
    fillOpacity: 0.5,
  };

  const changeCountryColor = event => {
    event.target.setStyle({
      color: 'black',
      fillColor: selectedColor,
      fillOpacity: 1,
    });
  };

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);

    const colorIndex = Math.floor(Math.random() * colors.length);
    layer.options.fillColor = colors[colorIndex];

    layer.on({
      click: changeCountryColor,
    });
  };

  const colorChange = event => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>World map -</h1>
      <MapContainer style={{ height: '80vh' }} zoom={2} center={[20, 100]}>
        <GeoJSON
          style={countryStyle}
          data={countriesData.features}
          onEachFeature={onEachCountry}
        />
      </MapContainer>
      <input type="color" value={selectedColor} onChange={colorChange} />
    </div>
  );
};

export default MyMap;
