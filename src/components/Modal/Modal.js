import React from 'react';
import styles from './Modal.module.css';


function Modal({children}) {

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
          {children}
      </div>
    </div>
  );
  
}

export default Modal;
