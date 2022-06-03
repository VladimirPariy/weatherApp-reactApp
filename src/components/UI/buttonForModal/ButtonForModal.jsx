import React from 'react';
import style from "./ButtonForModal.module.scss";

const ButtonForModal = ({children, setVisible}) => {
    return (
        <button className={style.buttonForModal} onClick={() => setVisible(true)}>
            {children}
        </button>
    );
};

export default ButtonForModal;