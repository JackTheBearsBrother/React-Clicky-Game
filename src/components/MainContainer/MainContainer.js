import React from 'react';
import MemoryCard from '../MemoryCard';
import images from "../../images.json";


const MainContainer = () => (
<div className="container-fluid">
        <MemoryCard images={images} />
</div>
);

export default MainContainer;