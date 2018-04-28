import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import mapStyles from './mapStyles.json';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from 'react-google-maps';
import { items } from './index';

class MyMap extends Component {
	constructor() {
		super();
		this.state = {
			markers: [],
		};
	}

	componentDidMount() {
		const markers = items.on('value', snap =>
			this.setState({ markers: snap.val() })
		);
	}

	render() {
		return (
			<GoogleMap
				defaultZoom={12}
				defaultCenter={{ lat: 40.7128, lng: -74.006 }}
				defaultOptions={{ styles: mapStyles }}
			>
				{this.props.isMarkerShown &&
					this.state.markers.map((marker, index) => {
						const lat = parseFloat(
							(((marker.locations || {}).location || [])[0] || {}).lat
						);
						const lng = parseFloat(
							(((marker.locations || {}).location || [])[0] || {}).lng
						);
						return <Marker key={index} position={{ lat, lng }} />;
					})}
			</GoogleMap>
		);
	}
}

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
