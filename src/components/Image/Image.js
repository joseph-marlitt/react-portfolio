import React from "react";
import "./Image.css"


const Image = props => ( 
<a className="image" href={props.link}>   
        <img className="img-responsive" src={props.image} key={props.key} alt={props.alt} />
        <div className="container">
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>    
</a>
);

export default Image