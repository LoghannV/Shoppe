import React from "react";

function ButtonIndicator(props){

    return(
        <>
            <button type="button" data-bs-target={props.target} data-bs-slide-to={props.slide} class={props.cls} aria-current="true" aria-label="Slide 1">
            </button>
        </>
    )

}
export default ButtonIndicator