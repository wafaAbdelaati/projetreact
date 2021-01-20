import  React from "react";
import {
  withGoogleMap,
  withScriptjs,
    GoogleMap,
  Marker
} from "react-google-maps";
import mapStyle from './mapStyle';
// import * as parkData from "./data/skateboard-parks.json";

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
      defaultOptions={{ styles: mapStyle }}
      >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function Contact() {
  return (
    <div style={{ width: "55vw", height: "377vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places$key=AIzaSyC8us3So2aTztRQLFoi7eu5PniA6AXDx3U`}
        loadingElement={<div style={{ height: `50%` }} />}
        containerElement={<div style={{ height: `50%` }} />}
        mapElement={<div style={{ height: `50%` }} />}
      />
    </div>
  );
}