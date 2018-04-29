import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import mapStyles from './mapStyles.json';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	InfoWindow,
} from 'react-google-maps';

const MyMap = ({ markers, handleMarkerClick, onInfoWindowClose }) => {
	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={{ lat: 40.7128, lng: -74.006 }}
			defaultOptions={{ styles: mapStyles }}
		>
			{markers.map((marker, index) => {
				const lat = parseFloat(
					(((marker.locations || {}).location || [])[0] || {}).lat
				);
				const lng = parseFloat(
					(((marker.locations || {}).location || [])[0] || {}).lng
				);
				return (
					<Marker
						onClick={handleMarkerClick.bind(this, marker)}
						key={index}
						position={{ lat, lng }}
					>
						{marker.showInfo && (
							<InfoWindow onCloseClick={onInfoWindowClose.bind(this, marker)}>
								<div>
									<a href="/topics">{marker.name}</a>
								</div>
							</InfoWindow>
						)}
					</Marker>
				);
			})}
		</GoogleMap>
	);
};

const MyMapComponent = compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `65vh` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)(MyMap);

export default MyMapComponent;
