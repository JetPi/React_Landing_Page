import React from "react";

const CardGroup = (props) => {
    let title1= props.titles[0]
    let title2= props.titles[1]
    let title3= props.titles[2]

    let image1= props.images[0]
    let image2= props.images[1]
    let image3= props.images[2]

    let description1= props.descriptions[0]
    let description2= props.descriptions[1]
    let description3= props.descriptions[2]

    return (
        <div className="card-group m-5">
        <div className="card">
            <img src={image1} className="card-img-top"/>
            <div className="card-body">
            <h5 className="card-title text-center">{title1}</h5>
            <p className="card-text text-center">{description1}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item mx-auto"> <a href="#" className="btn btn-primary mx-auto">Go somewhere</a> </li>
            </ul>
        </div>
        <div className="card">
            <img src={image2} className="card-img-top"/>
            <div className="card-body">
            <h5 className="card-title text-center">{title2}</h5>
            <p className="card-text text-center">{description2}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item mx-auto"> <a href="#" className="btn btn-primary mx-auto">Go somewhere</a> </li>
            </ul>
        </div>
        <div className="card position-relative">
            <img src={image3} className="card-img-top"/>
            <div className="card-body">
            <h5 className="card-title text-center">{title3}</h5>
            <p className="card-text text-center">{description3}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item mx-auto"> <a href="#" className="btn btn-primary">Go somewhere</a> </li>
            </ul>
        </div>
        </div>
    );
}

export default CardGroup;