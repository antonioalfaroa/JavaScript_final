import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class Maps extends Component {
 
  render() {
    const { closeApp } = this.props; 
    
    const mapStyles = {
      position: 'relative',
      left: '-170px', 
      width: '600px',
      height: '600px',
      top: '70px',
    };

    return (
      <div className="map-container">
        <div className="map-inner-container">
          <div className="title">
            <h1>Maps App</h1>
          </div>
          <button className="close-button" onClick={closeApp}>Close</button> 
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{ lat: 37.774929, lng: -122.419416 }} 
            ref={(map) => { this.map = map && map.map; }}
          />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC71w3MwA-tt8JCrzPEWl3liey56O9VjXI' 
})(Maps);
