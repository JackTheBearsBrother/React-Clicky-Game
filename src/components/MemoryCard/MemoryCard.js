import React from 'react';
import "./MemoryCard.css";

const MemoryCard = props => (
    <div className="row">
        {props.images.map(item => (
            <div className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3" key={item.id}>
                <img className=""  src={item.image} alt={item.name}/>
            </div>
        ))}
    </div>
);

export default MemoryCard;