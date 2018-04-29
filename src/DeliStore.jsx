import React from 'react';
import  { Image ,Row ,Col, Grid } from 'react-bootstrap';
import './DeliStore.css'
import ReactStars from 'react-stars'
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
	value: 4,
	sanitation: "https://orig00.deviantart.net/45aa/f/2015/323/9/9/letter_a_by_hillygon-d9h8c6a.jpg",
	image: "https://isthmus.com/downloads/44893/download/food-cart-cali-fresh-crLindaFalkenstein-04272017.jpg?cb=5ee47ae2c26f5460e3b50e4b9c7c3bd1",
	reviews: ["This is the best food cart I ever went to . Recommend" , 
	" People are weird for recommending this, it's the equivalent of farmer with no animals ", " I do this to get free discounts so 5/5" ]

}

const DeliPage = () => (
	<div>
		 
		 
		 <div class="imageWrapper">
		 	<Image className="deli-image" src={item.image} responsive/>
  			<Image className="gradeImage" src={item.sanitation} />
		</div>
		<Grid>
		<Row>
		 <Col xs="6">
		 <header>
		<h2>	
		{item.name}
		</h2>
		
    <h3>{item.location}</h3>
    
    <p>{item.description}</p>
  </header>
  	</Col>	
		 <Col xs="6">
		  <ReactStars count={5} value={item.value} edit={false} size={24} color2={'#ffd700'} />
		  </Col>
		
         
		</Row>
		</Grid>

		<h3> Reviews</h3> 
			<p>{item.reviews[0]}</p>
			<p>{item.reviews[1]}</p>
			<p>{item.reviews[2]}</p>
		
		
		

	</div>
);

export default DeliPage; 
