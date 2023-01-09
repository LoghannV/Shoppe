import React from "react";
import './Card.css'
function CarroseulBoxCard(props)
{

    return(
        <>
            <div class="container grupo-cartas p-1 m-1">
                {props.children}
            </div>
           
        </>
    )

}
export default CarroseulBoxCard