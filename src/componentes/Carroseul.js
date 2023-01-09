import React from "react";
import CarrouselPrev from "./CarrouselPrev";
import CarrouselNext from "./CarrouselNext";
function Carroseul(props){
    return(
        <>
        <div id={props.ident} class="carousel slide">
            {props.children}
            <CarrouselPrev target={"#"+props.ident}/>
            <CarrouselNext target={"#"+props.ident}/>
        </div>
        </>
    )
}
export default Carroseul