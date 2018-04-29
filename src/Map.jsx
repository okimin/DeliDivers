import React from 'react';
import { compose, withProps } from 'recompose';
import mapStyles from './mapStyles.json';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
	InfoWindow,
} from 'react-google-maps';

const MyMap = ({
	markers,
	handleMarkerClick,
	handleMapLoad,
	onInfoWindowClose,
}) => {
	return (
		<GoogleMap
			ref={handleMapLoad}
			defaultZoom={12}
			defaultCenter={{ lat: 40.766877, lng: -73.973173 }}
			defaultOptions={{ styles: mapStyles }}
		>
			{markers.map((marker, index) => {
				if (
					marker.type === 'Food Cart' ||
					marker.type === 'Snack Bar' ||
					marker.type === 'Mobile Food Truck'
				) {
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
				}
			})}
		</GoogleMap>
	);
};

const MyMapComponent = compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyBP6JSmxhchCK_bt9Govjc4WmTdcbo1fl0&v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `65vh` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	}),
	withScriptjs,
	withGoogleMap
)(MyMap);

export default MyMapComponent;
