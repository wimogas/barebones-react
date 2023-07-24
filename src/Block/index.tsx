import React from "react";
import classNames from "classnames";

import styles from "./Block.module.scss";

export type SizesType = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined
export type FlexType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | undefined
export type AlignType = "flex-start" | "flex-end" | "center" | undefined
export type JustifyType =
    "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around"
    | undefined

export interface BlockProps {
    children: any,
    classes?: string | undefined,
    column?: boolean,
    size?: SizesType,
    style?: object,
    variant?: "card" | undefined,
    align?: AlignType,
    justify?: JustifyType,
    flex?: FlexType | undefined,
    stretch?: boolean | undefined,
    dark?: boolean | undefined
}

const Block = ({
                   children,
                   classes,
                   column,
                   size,
                   style,
                   variant,
                   align,
                   justify,
                   flex,
                   stretch,
                    dark
               }: BlockProps) => {

    return (
        <div
            className={
                classNames(
                    styles.block,
                    size && [styles[`gap-${size}`]],
                    variant && [styles[`block-${dark ? 'dark-' : ''}${variant}`]],
                    column && [styles.column],
                    align && [styles[`align-${align}`]],
                    justify && [styles[`justify-${justify}`]],
                    flex && [styles[`flex-${flex}`]],
                    stretch && styles.stretch,
                    classes
                )
            }
            style={style}
        >
            {children}
        </div>
    );
};

export default Block;
