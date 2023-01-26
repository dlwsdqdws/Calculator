import React from 'react';
import * as ReactDOM from 'react-dom';
import { Scene } from '@esri/react-arcgis';
import Campus from './campus'; 

function MapApp() {
  ReactDOM.render(
    <Scene /> ,
    document.getElementById('container')
  );
  }
  
  export default (props) => (
      <Scene style={{ width: '70vw', height: '90vh' }}
          //mapProperties={{ basemap: 'satellite' }}
          viewProperties={{
              center: [-118.28538,34.0205],
              zoom: 15
          }}>
          <Campus />
      </Scene>
  )