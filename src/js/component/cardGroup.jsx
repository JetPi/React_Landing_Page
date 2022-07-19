import React from "react"
import Card from "./card.jsx"

const CardGroup = (props) =>{
    const {cardData} = props
    const cards = cardData.map(
        (element) => <Card title={element.title} image={element.image} description={element.description}/>
    );

    return (
        <div className="card-group">
            {cards}
        </div>
    )
}

export default CardGroup;