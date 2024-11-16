import React from 'react';
import { X } from 'react-feather';
import styles from './Modal.module.css';


function Modal({children, onClose}) {

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.close} onClick={onClose}>
            <X/>
          </div>
        </div>
          {children}
      </div>
    </div>
  );
  
}

export default Modal;
