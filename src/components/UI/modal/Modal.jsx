import React from 'react';
import style from "./../../../styles/Modal.module.scss"

const Modal = ({children, visible, setVisible}) => {

    let rootClasses = [style.modalWrapper]
    if(visible){
        rootClasses = [...rootClasses, style.active]
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=> setVisible(false)}>
            <div className={style.modalContainer} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;