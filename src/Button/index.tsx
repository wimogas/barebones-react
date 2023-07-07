import React from "react";

import Icon from '../Icon'

import styles from "./Button.module.css";

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
                                           disabled,
                                           dropdown,
                                           icon,
                                           iconSize = 16,
                                           iconColor,
                                           style,
                                           variant,
                                           type
                                       }) => {

    const iconColorDefault = variant === 'primary' ? 'white' : 'var(--color-secondary)'

    return (
        <button
            className={`${styles.button} ${variant && styles[variant]}`}
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
