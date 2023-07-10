import React from "react";
import classNames from "classnames";

import styles from "./Alert.module.scss";
import Block from "../Block";
import Icon from "../Icon";
import Button from "../Button";


export type AlertProps = {
    message: string,
    variant: "success" | "error",
    type?: "toast" | "banner",
    close?: any,
    style?: {}
}
const Index = ({message, variant, type, close, style}: AlertProps) => {

    return (
        <div className={classNames(styles.alert,
            variant && styles[variant],
            type && styles[type],
            )}
             style={style}
        >
            <Block size={300} style={{"alignItems" : "center"}}>
                {variant === 'success' ? <Icon icon={'checkbox-circle-line'} classes={'icon-success'}/> :
                    <Icon icon={'close-circle-line'} classes={'icon-error'}/>}
                {message}
            </Block>
            {close && <Block classes={'bb-pl-500'}><Button
                variant={'icon-only'}
                action={close}
                icon={'close-fill'}
            /></Block>}
        </div>
    );
};

export default Index;
