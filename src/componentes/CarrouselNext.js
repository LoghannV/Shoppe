import React from "react";
function CarrouselNext(props){
    return(
        <>
            <button class="carousel-control-next" type="button" data-bs-target={props.target} data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>        
        </>
    )
}
export default CarrouselNext