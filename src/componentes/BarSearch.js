import React from "react";
import NavItem from "./NavItem";
function BarSearch(props){
    return(
        <>
        <div class="row">

            <div class="col">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder={props.descricao} aria-label="Search"/>
                    <button class="btn" type="submit">Buscar</button>
                </form>
            </div>
            <div class="col-4">
                <ul class="navbar-nav">
                    <NavItem item="Roupas masculinas"/>
                    <NavItem item="Roupas femininas"/>
                    <NavItem item="Calçados masculinos"/>
                    <NavItem item="Calçados femininos"/>
                    <NavItem item="Roupas Sociais/Festas"/>
                    <NavItem item="Aparelhos Eletronicos"/>
                </ul>
            </div>
        </div>
   
      
        
        </>
    )
}
export default BarSearch