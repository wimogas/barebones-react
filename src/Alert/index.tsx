import React, {ReactElement} from "react";
import classNames from "classnames";

import styles from "./Alert.module.scss";

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
            styles.alert,
            classes ? classes : styles.default,
            type && styles[type])}
             style={style}
        >
            {children}
        </div>
    );
};

export default Alert;
