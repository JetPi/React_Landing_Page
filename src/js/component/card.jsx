import React from "react";

const Card = (props) => {
    const {image, title, description} = props
    return (
        <div className="card " style={{margin: "0px 10px 20px 10px", border: "1px solid black" }}>
            <img src={image} className="card-img-top"/>
            <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            <p className="card-text text-center">{description}</p>
            </div>
            <div className="card-footer" style={{display: "flex"}}>
                <a href="#" className="btn btn-primary mx-auto">Call to action!</a> 
            </div>
        </div>
        
    );
}

export default Card;