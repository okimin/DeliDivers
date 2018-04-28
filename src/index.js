import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// initialize firebase
var config = {
	apiKey: 'AIzaSyCxiahlpRrCWYpUJCQ5sm7V3GfIw6FOqXc',
	authDomain: 'deli-hero.firebaseapp.com',
	databaseURL: 'https://deli-hero.firebaseio.com',
	projectId: 'deli-hero',
	storageBucket: '',
	messagingSenderId: '572405583565',
};

firebase.initializeApp(config);

export const items = firebase.database().ref('/');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
