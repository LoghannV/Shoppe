import React from "react";

function NavItem(props){
    return(
        <>
            <li class="nav-item">
               <a class="nav-link" aria-current="page" href="#"  data-bs-toggle={props.toggle} data-bs-target={props.ident}>{props.item}</a>
            </li>
           
        </>
    )
}
export default NavItem