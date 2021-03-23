import React, { useState } from 'react';
import './App.css'; 

import CardList from './CardList';

function App() {
	const [meals, setMeals] = useState([]);

	fetch('https://api.spoonacular.com/recipes/search?&apiKey=3df764b426424927b03b93e59378d406')
	.then(response => response.json())
	.then(meals => {setMeals(meals)});
	
	return (
		<div>
			<h1 className= 'purple center'> Meals </h1>
			<CardList meals={meals}/>
		</div>
		);
}

export default App;