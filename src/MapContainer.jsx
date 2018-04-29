import React, { Component } from 'react';
import { items } from './index';
import MyMapComponent from './Map';

class MyMapContainer extends Component {
	state = { markers: [] };

	constructor() {
		super();
		this.handleMarkerClick = this.handleMarkerClick.bind(this);
		this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
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

	componentWillMount() {
		items.on('value', snap => this.setState({ markers: snap.val() }));
	}

	render() {
		return (
			<MyMapComponent
				markers={this.state.markers}
				handleMarkerClick={this.handleMarkerClick}
				onInfoWindowClose={this.onInfoWindowClose}
			/>
		);
	}
}

export default MyMapContainer;
