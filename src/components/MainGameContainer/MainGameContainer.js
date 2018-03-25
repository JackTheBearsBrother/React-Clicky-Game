import React from 'react';
import MemoryCard from '../MemoryCard';
import images from "../../images.json";
import "./MainGameContainer.css";


const MainGameContainer = () => (
<div className="container-fluid mainCardContainer">
	<div className="container">
		<div className="gameMessage">
			<p>Click an image to begin! | You guessed correctly! | You guessed incorrectly!</p>
		</div>
		<div className="gameScores">
			<p>Score: 0 | Top Score: 2</p>
		</div>
		<MemoryCard images={images} />
	</div>
</div>
);

export default MainGameContainer;