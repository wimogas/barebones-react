import React, {ReactElement} from "react";
import classNames from "classnames";

import CheckLine from '../assets/icons/check-line.svg';
import AlertFill from '../assets/icons/alert-fill.svg';
import CloseFill from '../assets/icons/close-fill.svg';

import styles from "./Alert.module.scss";
import Block from "../Block";
import Icon from "../Icon";
import Button from "../Button";


export type AlertProps = {
    message: string,
    variant: "success" | "error",
    type?: "toast" | "banner",
    close?: any,
    style?: {},
    icon?: ReactElement,
    iconColor?: string
}
const Alert = ({message, variant, type, close, icon, iconColor, style}: AlertProps) => {

    return (
        <div className={classNames(styles.alert,
            variant && styles[variant],
            type && styles[type],
            )}
             style={style}
        >
            <Block size={300} style={{"alignItems" : "center"}}>
                {icon ? <Icon icon={icon} color={iconColor}/> :
                    variant === 'success' ? <Icon icon={<CheckLine/>} color={'#168B42'} size={24}/> :
                    variant === 'error' ? <Icon icon={<AlertFill/>} color={'#982B1D'} size={24}/> :
                null }
                {message}
            </Block>
            {close && <Block classes={'bb-pl-500'}><Button
                variant={'icon-only'}
                action={close}
                icon={<CloseFill/>}
            /></Block>}
        </div>
    );
};

export default Alert;
