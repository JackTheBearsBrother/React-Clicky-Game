import React from 'react';

const MemoryCard = props => (
    <div className="card-columns">
        {props.images.map(item => (
            <div className="card">
            <img className="card-img-top" key={item.id} src={item.image} alt={item.name}/>
            </div>
        ))}
    </div>
);

export default MemoryCard;