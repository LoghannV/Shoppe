import React from "react";

function CarroseulItem(props){
    return(
        <>
           <div class={props.classe}>
               <img src={props.img} class="d-block w-100" alt="..."/>
            </div>
        </>
    )
}
export default CarroseulItem