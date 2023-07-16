import React, {ReactNode} from "react";
import classNames from "classnames";

import CloseFill from '../assets/icons/close-fill.svg';

import styles from './Modal.module.scss'

import Block from "../Block";
import Button from "../Button";

export type ModalProps = {
  children: ReactNode,
  close: any,
  title?: string
}
const Modal = ({children, close, title}: ModalProps) => {

  return (
    <div className={classNames(styles['modal-overlay'])}>
      <div>
        <Block
          variant={'card'} 
          column
          style={{'minWidth':'50vw'}}
          size={400}
        >
          <div className={styles['modal-header']}>
            {title && <h1 className={styles.title}>{title}</h1>}
            <Button icon={<CloseFill/>} variant={'icon-only'} action={close}/>
          </div>
          <div className={styles['modal-body']}>
            {children}
          </div>
        </Block>
      </div>
    </div>

    
  );
};

export default Modal;
