import React from 'react'
import classNames from "classnames";

import {convertToTitle} from "../helpers";

import styles from './Input.module.css'

import Text from "../Text";

type Props = {
    name: string,
    label?: string,
    value?: string,
    error?: boolean,
    onChange: any,
    parent?: any
}

const FIELD_TYPES = [
    'email',
    'password',
]

const Input = ({name, label, value, error, onChange}: Props) => {

    const handleOptions = (field: string) => {
        const foundType = FIELD_TYPES.filter(f => field.includes(f))[0]
        if (foundType) {
            return foundType
        } else {
            return 'text'
        }
    }

    return (
        <label>
            {label && <Text text={convertToTitle(label)}/>}
            <input className={classNames(error && styles.error)}
                   name={name}
                   value={value}
                   type={handleOptions(name)}
                   onChange={onChange}
            />
        </label>
    )
}

export default Input;


