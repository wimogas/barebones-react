import React from "react";
import classNames from "classnames";

import styles from "./Block.module.css";

type sizes = "s" | "m" | "l" | "xl"

export interface BlockProps {
    children: any,
    classes?: string | undefined,
    column?: boolean,
    size?: sizes | undefined,
    style?: object,
    variant?: "card" | undefined,
    align?: "center" | undefined,
    justify?: "space-between" | undefined,
    flex?: "1" | "2" | "3" | undefined
}

const Index = ({
                   children,
                   classes,
                   column,
                   size,
                   style,
                   variant,
                   align,
                   justify,
               flex}: BlockProps) => {

    return (
        <div
            className={
                classNames(
                    styles.block,
                    size && [styles[size]],
                    variant && [styles[variant]],
                    column && [styles.column],
                    align && [styles[`align-${align}`]],
                    justify && [styles[`justify-${justify}`]],
                    flex && [styles[`flex-${flex}`]],
                    classes
                )
            }
            style={style}
        >
            {children}
        </div>
    );
};

export default Index;
