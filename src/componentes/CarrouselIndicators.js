import React from "react";

function CarrouselIndicators(props){
    return(
        <>
        <div class="carousel-indicators">
            {props.children}
        </div>
        </>
    )
}
export default CarrouselIndicators