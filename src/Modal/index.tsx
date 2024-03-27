import React, {ReactNode} from "react";
import classNames from "classnames";

import styles from './Modal.module.scss'

import Block from "../Block";


export type ModalProps = {
  children: ReactNode,
  classes?: any,
  overlayStyle?: any,
  overlayClasses?: any,
  style?: any
}
const Modal = ({children, overlayClasses, overlayStyle, classes, style}: ModalProps) => {

  return (
    <div className={classNames(
        styles['modal-overlay'],
        overlayClasses ? overlayClasses : styles["overlay-default"])}
    style={overlayStyle}>
        <Block
            stretch
            classes={classNames(
                styles.modal,
                classes ? classes : styles.default
            )}
            style={style ? style : {'minWidth':'50vw'}}
        >
          {children}
        </Block>
    </div>
  );
};

export default Modal;
