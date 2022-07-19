import React from "react";

const Card = (props) => {
    const {image, title, description} = props
    return (
        <div className="col-sm-12 col-md-4 ">
        <div className="card">
            <img src={image} className="card-img-top"/>
            <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            <p className="card-text text-center">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item mx-auto"> <a href="#" className="btn btn-primary mx-auto">Go somewhere</a> </li>
            </ul>
        </div>
        </div>
    );
}

export default Card;