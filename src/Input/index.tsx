import React from 'react'
import classNames from "classnames";

import styles from './Input.module.scss'

export type InputProps = {
    name: string,
    label?: any,
    value?: string | undefined,
    onChange: any,
    type?: "password" | "email" | "text" | undefined,
    disabled?: boolean | undefined,
    classes?: any,
    style? : any,
    placeholder?: any
}

const Input = ({
                   name,
                   label,
                   value,
                   onChange,
                   type = "text",
                    disabled,
                    classes,
                    style,
                   placeholder
               }: InputProps) => {


    return (
        <label>
            {label && label}
            <input className={classNames(classes ? classes : styles.base)}
                   style={style}
                   name={name}
                   value={value}
                   type={type}
                   onChange={onChange}
                   disabled={disabled}
                   placeholder={placeholder}
            />
        </label>
    )
}

export default Input;