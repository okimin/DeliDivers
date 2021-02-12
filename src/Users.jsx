import React from 'react';
import {Image} from 'react-bootstrap';
import './Users.css';

const userPerson = {
    name: "Bob The Builder",
    username: "secureusername",
    password: "securepassword",
    profile_image: "https://vignette.wikia.nocookie.net/goanimate-v2/images/c/c5/Bob_the_builder.jpg/revision/latest?cb=20161214211700"
}

const loginSignup = () =>(
    <div>
		 
		 <Image className="user-image" src={userPerson.profile_image} square />
		
	<header>
		<h2>	
		{userPerson.name}
		</h2>
		
    <h3>{userPerson.location}</h3>
    
  </header>

  <body>
      <p> 
          Hey guys, I'm a builder. I love to build things. But sometimes, after building something I need something quick to eat. That's why I love grabbing a hero at the nearest deli
      </p>
    </body>
		
	</div>
)

export default loginSignup;
