import React from "react";

function CarrouselPrev(props){
    return(
        <>
            <button class="carousel-control-prev" type="button" data-bs-target={props.target} data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
        </>
    )
}
export default CarrouselPrev