import React from "react";
import classNames from "classnames";

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
    variant?: 'primary' | 'secondary' | 'inverse' | 'danger' | 'success',
    type?: "submit" | undefined
}

const Button: React.FC<ButtonProps> = ({
                                           action,
                                           children,
                                           classes,
                                           disabled,
                                           dropdown,
                                           icon,
                                           iconSize = 16,
                                           iconColor,
                                           style,
                                           variant,
                                           type
                                       }) => {

    const iconColorDefault = (variant === 'primary' || variant === 'inverse') ? 'white' : 'var(--color-secondary)'

    return (
        <button
            className={classNames(
                styles.button,
                variant && styles[variant],
                classes)}
            onClick={() => action && action()}
            style={style}
            disabled={disabled}
            type={type}
        >
            {icon && <Icon icon={icon} color={iconColor ? iconColor : iconColorDefault} size={iconSize}/>}
            {children}
            {dropdown && <Icon icon={'arrow-down-s-line'} color={iconColorDefault}/>}
        </button>
    );
};

export default Button;
