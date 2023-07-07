import React from "react";
export type ButtonProps = {
    action: () => void;
    children?: string | undefined;
    classes?: string | undefined;
    disabled?: boolean | undefined;
    dropdown?: boolean | null | undefined;
    icon?: any | null | undefined;
    iconColor?: string | undefined;
    iconSize?: number | undefined;
    style?: object | undefined;
    variant?: 'primary' | 'secondary' | 'inverse' | 'danger' | 'success';
    type?: "submit" | undefined;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
