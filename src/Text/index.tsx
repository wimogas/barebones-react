import React from "react";
import classNames from "classnames";

import styles from './Text.module.scss'

export type TextColorProps =
  "default" | "error" | "success" | "disabled" | "primary" | "secondary" | "" | undefined

export type TextProps = {
  text: string,
  type?: 'span' |'p' | 'h1' | 'h2' | 'h3' | undefined,
  style?: object,
  color?: TextColorProps,
  bold?: boolean,
  size?: 's' | 'm' | 'l' | 'xl' | undefined
}
const Text = ({
                text,
                type = 'span',
                style,
                color= 'default',
                bold,
                size
  }: TextProps) => {

  const Type = type

  return (
    <Type
        className={classNames(
            styles.text,
            color && styles[`color-${color}`],
            bold && styles.bold,
            size && styles[`size-${size}`]
        )}
        style={style}
    >
      {text}
    </Type>
  );
};
export default Text;
