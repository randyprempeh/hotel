import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "24%"
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={{
          lat: 51.130887,
          lng: 10.16515
        }}
      >
        <Marker
          position={{
            lat: 51.130887,
            lng: 10.16515
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBHR5v2pKz8eDukaRSlKNHJAbIpSzrRo3Q"
})(MapContainer);
