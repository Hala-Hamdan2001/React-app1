import React from "react";
export default function Producte(props){
    return(
        <div className="col-md-4 mt-5">
            <div className="product">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}