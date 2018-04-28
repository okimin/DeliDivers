import React from 'react';
import  { Image } from 'react-bootstrap';

const item = {
	name:"Astoria Park Mobile Food Truck",
	location:"Shore Blvd., Hoyt Ave. and Ditmars Blvd",
	park_id:"Q004",
	permit_start_date:"2014-07-14",
	permit_end_date:"2018-12-31",
	permit_number:"Q4-1-MT",
	description: "My truck",
	type:"Mobile Food Truck",
	emails:{
		email:[]
	},
	phones:{
		phone:[]
	},
	websites:{
		website:[]
	},
	locations:{
		location:[{
			lat:"40.779252",
			lng:"-73.923809"
		}]

	},
	image: "https://isthmus.com/downloads/44893/download/food-cart-cali-fresh-crLindaFalkenstein-04272017.jpg?cb=5ee47ae2c26f5460e3b50e4b9c7c3bd1"
}

const DeliPage = () => (
	<div>
		<Image src={item.image} rounded/>

		{item.name}
		

	</div>
);

export default DeliPage; 