import React from 'react';
import { X } from 'react-feather';
import styles from './Modal.module.css';


function Modal({children}) {

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.close}>
            <X/>
          </div>
        </div>
          {children}
      </div>
    </div>
  );
  
}

export default Modal;
