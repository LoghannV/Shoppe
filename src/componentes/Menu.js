
import React from "react";
import Navbrand from "./Navbrand";
import NavItem from "./NavItem";
import BarSearch from "./BarSearch";
import ModalEntrar from "./login/ModalEntrar";
import ModalCadastrar from "./login/ModalCadastrar";
import '../Menu.css'
function Menu(){
    return(
        <>
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Navbrand titulo="ShoP" icon="img/icon.svg"/>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
         
                    <BarSearch descricao="Buscar no ShoPP"/>
                    
                    <NavItem item="Entre" ident="#Login" toggle="modal"/>
                    <NavItem item="Cadastrar" ident="#Cadastro" toggle="modal"/>
                </ul>
                </div>
            </div>
            </nav>
            <ModalEntrar ident="Login"/>
            <ModalCadastrar ident="Cadastro"/>
        </>
    )
}
export default Menu