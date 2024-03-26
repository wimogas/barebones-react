import React from "react";
import classNames from "classnames";

import ArrowDownSLine from '../assets/icons/arrow-down-s-line.svg';

import Icon from '../Icon'

import styles from "./Button.module.scss";

export type ButtonProps = {
    action: () => void,
    children?: any,
    classes?: string | undefined,
    disabled?: boolean | undefined
    icon?: any | null | undefined,
    iconColor?: string | undefined,
    iconSize?: number | undefined,
    style?: object | undefined,
    type?: "submit" | undefined,
}

const Button: React.FC<ButtonProps> = ({
                               action,
                               children,
                               classes,
                               disabled,
                               icon,
                               iconSize = 16,
                               iconColor = '#000',
                               style,
                               type
                                       }) => {


    return (
        <button
            className={classNames(
                styles.button,
                classes)}
            onClick={() => action && action()}
            style={style}
            disabled={disabled}
            type={type}
        >
            {icon && <Icon icon={icon} color={iconColor} size={iconSize}/>}
            {children}
        </button>
    );
};

export default Button;