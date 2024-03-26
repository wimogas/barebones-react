import React, {ReactElement} from "react";
import classNames from "classnames";

import CheckLine from '../assets/icons/check-line.svg';

import styles from "./Alert.module.scss";
import Block from "../Block";
import Icon from "../Icon";


export type AlertProps = {
    children: any,
    type?: "toast" | "banner",
    close?: any,
    style?: {},
    icon?: ReactElement,
    iconColor?: string,
    classes?: any
}
const Alert = ({children, type, close, icon, iconColor, style, classes}: AlertProps) => {

    return (
        <div className={classNames(
            classes && classes,
            styles.alert,
            type && styles[type])}
             style={style ? style : {
                 "backgroundColor": "white",
                 "border": "1px solid #000"
             }}
        >
            <Block size={300}>
                <Icon icon={icon ? icon : <CheckLine/>} color={iconColor ? iconColor : "#000"}/>
                {children}
            </Block>
        </div>
    );
};

export default Alert;
