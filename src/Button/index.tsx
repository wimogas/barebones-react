import React from "react";
import classNames from "classnames";

import ArrowDownSLine from '../assets/icons/arrow-down-s-line.svg';

import Icon from '../Icon'

import styles from "./Button.module.scss";

export type ButtonProps = {
    action: () => void,
    children?: string | undefined,
    classes?: string | undefined,
    disabled?: boolean | undefined
    dropdown?: boolean | null | undefined
    icon?: any | null | undefined,
    iconColor?: string | undefined,
    iconSize?: number | undefined,
    style?: object | undefined,
    variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'icon-only',
    type?: "submit" | undefined,
    dark?: boolean | undefined
}

const Button: React.FC<ButtonProps> = ({
                                           action,
                                           children,
                                           classes,
                                           disabled,
                                           dropdown,
                                           icon,
                                           iconSize = 16,
                                           iconColor = '#ccc',
                                           style,
                                           variant,
                                           type,
                                           dark
                                       }) => {


    return (
        <button
            className={classNames(
                styles.button,
                variant && styles[`button${dark ? '-dark' : ''}-${variant}`],
                classes)}
            onClick={() => action && action()}
            style={style}
            disabled={disabled}
            type={type}
        >
            {icon && <Icon icon={icon} color={iconColor} size={iconSize}/>}
            {children}
            {dropdown && <Icon icon={<ArrowDownSLine/>} color={iconColor}/>}
        </button>
    );
};

export default Button;
