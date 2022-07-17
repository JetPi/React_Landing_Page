import React from "react";

const CardGroup = (props) => {
    return (
        <div className="card-group m-5">
        <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title text-center">Card title</h5>
            <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item mx-auto"> <a href="#" class="btn btn-primary mx-auto">Go somewhere</a> </li>
            </ul>
        </div>
        <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title text-center">Card title</h5>
            <p className="card-text text-center">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item mx-auto"> <a href="#" class="btn btn-primary mx-auto">Go somewhere</a> </li>
            </ul>
        </div>
        <div className="card position-relative">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title text-center">Card title</h5>
            <p className="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item mx-auto"> <a href="#" class="btn btn-primary">Go somewhere</a> </li>
            </ul>
        </div>
        </div>
    );
}

export default CardGroup;