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
        overlayClasses && overlayClasses)}
    style={overlayStyle ? overlayStyle : {
      "backgroundColor" : "rgba(0,0,0,0.5)"
    }}>
        <Block
            stretch
            classes={classes ? classes : classNames(styles.modal)}
            style={style ? style : {'minWidth':'50vw'}}
        >
          {children}
        </Block>
    </div>
  );
};

export default Modal;
