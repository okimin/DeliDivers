import React, { Component } from 'react';
import { items } from './index';
import MyMapComponent from './Map';

class MyMapContainer extends Component {
	state = { markers: [] };

	constructor() {
		super();
		this.handleMarkerClick = this.handleMarkerClick.bind(this);
		this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
		this.handleMapLoad = this.handleMapLoad.bind(this);
	}

	handleMarkerClick(targetMarker) {
		this.setState({
			markers: this.state.markers.map(marker => {
				if (marker === targetMarker) {
					return {
						...marker,
						showInfo: true,
					};
				}
				return marker;
			}),
		});
	}

	onInfoWindowClose(targetMarker) {
		this.setState({
			markers: this.state.markers.map(marker => {
				if (marker === targetMarker) {
					return {
						...marker,
						showInfo: false,
					};
				}
				return marker;
			}),
		});
	}

	handleMapLoad(map, _window = window) {
		const { LatLngBounds } = _window.google.maps;
		const bounds = new LatLngBounds();
		this.state.markers.forEach(marker =>
			bounds.extend({ lat: marker.lat, lng: marker.lon })
		);
		if (this.state.markers.length) {
			if (this.state.markers.length > 1) map.fitBounds(bounds, 15);
		}
	}

	componentWillMount() {
		items.on('value', snap => this.setState({ markers: snap.val() }));
	}

	render() {
		return (
			<MyMapComponent
				markers={this.state.markers}
				handleMarkerClick={this.handleMarkerClick}
				onInfoWindowClose={this.onInfoWindowClose}
				handleMapLoad={this.handleMapLoad}
			/>
		);
	}
}

export default MyMapContainer;
