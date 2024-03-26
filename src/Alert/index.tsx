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
const Alert = ({children, type, icon, iconColor, style, classes}: AlertProps) => {

    return (
        <div className={classNames(
            classes ? classes : styles.alert,
            styles.alert,
            type && styles[type])}
             style={style}
        >
            {children}
        </div>
    );
};

export default Alert;
