import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MyMapComponent from './Map';
import DeliStore from './DeliStore';
import NavBar from './NavBar.jsx';
import Users from './Users.jsx';

class App extends Component {
	render() {
		return (
			<Router>
				<div>	
					<NavBar />
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/topics" component={Topics} />
					<Route path="/map" component={Mapper} />
					<Route path="/store" component={DeliStore} />
					<Route path="/user" component={Users} />
				</div>
			</Router>
		);
	}
}
const Mapper = () => (
	<div>
		<MyMapComponent isMarkerShown={true} />
	</div>
);
const Home = () => (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
		</header>
		<p className="App-intro">
			To get started, edit <code>src/App.js</code> and save to reload.
		</p>
		<p> Hey! </p>
	</div>
);

const About = () => (
	<div>
		<h2>About</h2>
	</div>
);

const Topics = ({ match }) => (
	<div>
		<h2>Topics</h2>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>Rendering with React</Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>Components</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
			</li>
		</ul>

		<Route path={`${match.url}/:topicId`} component={Topic} />
		<Route
			exact
			path={match.url}
			render={() => <h3>Please select a topic.</h3>}
		/>
	</div>
);

const Topic = ({ match }) => (
	<div>
		<h3>{match.params.topicId}</h3>
	</div>
);

export default App;
