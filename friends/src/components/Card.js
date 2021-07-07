import React from 'react';

const Card = props => {
    console.log("Card: ", props)
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <h4>{props.email}</h4>
        </div>
    )
};

export default Card;