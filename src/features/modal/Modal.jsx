import React  from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { changeVisible } from "../visible/visibleSlice" ;
import styles from "./ModalStyle.module.css" ;

export default function Modal({visible , changeVisible ,children}) {

return (
         <div className = {visible ? styles.modal+" "+styles.visible:styles.modal} 
         onClick={()=>changeVisible(false)} >
             <div className = {visible ? styles.modalContent+' '+styles.modalContentVisible:styles.modalContent}
                    onClick={(e)=>e.stopPropagation()}>
                 {children}
             </div>
        </div>
        )
}