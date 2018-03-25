import React from 'react';
import MemoryCard from '../MemoryCard';
import images from "../../images.json";
import "./MainContainer.css";


const MainContainer = () => (
<div className="container-fluid mainCardContainer">
	<div className="container">
		<MemoryCard images={images} />
	</div>
</div>
);

export default MainContainer;