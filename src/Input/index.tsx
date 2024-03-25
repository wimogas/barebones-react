import React from 'react'
import classNames from "classnames";

import {convertToTitle} from "../helpers";

import styles from './Input.module.scss'

import Text, {TextColorProps} from "../Text";

export type InputProps = {
    name: string,
    label?: string | undefined,
    value?: string | undefined,
    error?: boolean | undefined,
    onChange: any,
    type?: "password" | "email" | "text" | undefined,
    disabled?: boolean | undefined,
    dark?: boolean | undefined
}

const Input = ({
                   name,
                   label,
                   value,
                   error,
                   onChange,
                   type = "text",
                   disabled,
                    dark
               }: InputProps) => {

    const labelColor: TextColorProps = error ? 'error' : disabled ? 'disabled' : ''

    return (
        <label>
            {label && <Text
                text={convertToTitle(label)}
                color={labelColor}
            />}
            <input className={classNames(
                    dark && styles["input-dark"],
                    error && styles.error
            )}
                   name={name}
                   value={value}
                   type={type}
                   onChange={onChange}
                   disabled={disabled}
            />
        </label>
    )
}

export default Input;


