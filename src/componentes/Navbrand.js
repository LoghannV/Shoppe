import React from "react";

function Navbrand(props){
    return(
        <>
            <a class="navbar-brand" href="#">
                <img src={props.icon} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
                {props.titulo}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>          
        </>
    )
}
export default Navbrand