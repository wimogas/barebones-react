import React from "react";
import classNames from "classnames";

import styles from './Text.module.scss'

export type TextProps = {
    text: string,
    type?: 'span' |'p' | 'h1' | 'h2' | 'h3' | undefined,
    style?: object,
    classes?: any
}
const Text = ({
                text,
                type = 'span',
                style,
                classes
  }: TextProps) => {

  const Type = type

  return (
    <Type
        className={classNames(
            styles.text,
            classes && classes
        )}
        style={style}
    >
      {text}
    </Type>
  );
};
export default Text;
