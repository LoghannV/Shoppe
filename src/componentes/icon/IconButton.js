import React from "react";
import './Icon.css'
function IconButton(props){

    const CarregaPagina = function(e)
    {
        console.log(e)
    }
    return(
        <>
            <div class="geral" onClick={()=>{CarregaPagina(props.target)}}>
                <div class="border box-item p-1">
                    <img class="img-fluid bg-light mx-auto" src={props.img} width="50"/>
                </div>
                <p>{props.descricao}</p>
            </div>
        </>
    )

}
export default IconButton