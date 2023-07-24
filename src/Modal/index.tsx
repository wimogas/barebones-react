import React, {ReactNode} from "react";
import classNames from "classnames";

import CloseFill from '../assets/icons/close-fill.svg';

import styles from './Modal.module.scss'

import Block from "../Block";
import Text from "../Text";
import Button from "../Button";

export type ModalProps = {
  children: ReactNode,
  close: any,
  title?: string,
  dark?: boolean
}
const Modal = ({children, close, title, dark}: ModalProps) => {

  return (
    <div className={classNames(styles['modal-overlay'])}>
      <div>
        <Block
          variant={'card'}
          dark={dark}
          column
          style={{'minWidth':'50vw'}}
          size={400}
        >
          <div className={styles['modal-header']}>
            {title && <Text dark={dark} type={'h3'} color={'default'} text={title}/>}
            <Button icon={<CloseFill/>} variant={'icon-only'} dark={dark} action={close}/>
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
