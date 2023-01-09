import React from "react";
import './Modal.css'
function ModalEntrar(props){
    return(
        <>
        <div class="modal fade" id={props.ident} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Realizar Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mx-auto container">
                        <img src="./img/icon.svg" width={"80px"} class="roudend mx-auto d-block"/>
                    </div>
                    <label class="label-control">Email</label>
                    <input type="text" name="email" placeholder="Digite o seu Email"/>
                    <label class="label-control">Senha</label>
                    <input type="password" name="password" placeholder="Digite o sua senha"  max-width="80%"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-login">Realizar Login</button>
                </div>
                </div>
            </div>
            </div>
        
        </>
    )
}
export default ModalEntrar