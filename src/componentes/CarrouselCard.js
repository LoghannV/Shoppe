import React from "react";
import './Card.css'
function CarroseulCard(props){
    return(
        <>
        <div class="card">
            <img src={props.img} class="card-img-top" alt="..."/>
            <div class="card-body">
                    <h3 class="card-title custo">{props.preco}</h3>
                    <p class="text-center popular">Popular</p>
            </div>
        </div>
        </>
    )
}
export default CarroseulCard