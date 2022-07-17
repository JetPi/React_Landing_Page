import React from "react"

const Jumbotron = (props) =>{
    return(
        <div className=" bg-secondary bg-opacity-25 m-5 px-4 py-5"> 
            <span style={{fontSize: "10vh"}} >
                {props.title}
            </span> 
            <p className="fs-5">
                {props.description}
            </p>
            <button type="button" className="btn btn-primary">
                Call to action!
            </button>
        </div>
    )
}

export default Jumbotron