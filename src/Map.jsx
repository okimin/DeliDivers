import React from 'react';
import { compose, withProps } from 'recompose';
import mapStyles from './mapStyles.json';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps';

const MyMap = props => (
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: 40.7128, lng: -74.006 }}
		defaultOptions={{ styles: mapStyles }}
	>
		{props.isMarkerShown && (
			<Marker position={{ lat: 40.7128, lng: -74.006 }} />
		)}
	</GoogleMap>
);

const MyMapComponent = compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `400px` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)(MyMap);

export default MyMapComponent;
