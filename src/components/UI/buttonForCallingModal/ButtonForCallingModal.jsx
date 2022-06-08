import React from 'react';
import style from "./ButtonForCallingModal.module.scss";

const ButtonForCallingModal = ({children, setVisible}) => {
    return (
        <button className={style.buttonForModal} onClick={() => setVisible(true)}>
            {children}
        </button>
    );
};

export default ButtonForCallingModal;