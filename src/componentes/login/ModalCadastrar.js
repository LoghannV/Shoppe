import React from "react";
import './Modal.css'
function ModalCadastrar(props){
    return(
        <>
        <div class="modal fade" id={props.ident} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Realizar Cadastro</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mx-auto container">
                        <img src="./img/icon.svg" width={"80px"} class="roudend mx-auto d-block"/>
                    </div>
                    <label class="label-control">Email</label>
                    <input type="text" name="email" placeholder="Digite o seu Email"/>
                    <label class="label-control">Senha</label>
                    <input type="password" name="password" placeholder="Digite a sua senha"/>
                    <label class="label-control">Digite novamente sua senha</label>
                    <input type="password" name="password" placeholder="Repita sua senha" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-login">Realizar Cadastro</button>
                </div>
                </div>
            </div>
            </div>
        
        </>
    )
}
export default ModalCadastrar