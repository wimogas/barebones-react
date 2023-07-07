import React from "react";

import styles from './Text.module.css'

type Props = {
  text: string,
  type?: 'p' | 'h1' | undefined,
  style?: object,
}
const Text = ({text, type, style}: Props) => {

  const Type = type || 'span'

  return (
    <Type
        className={styles.text}
        style={style}
    >
      {text}
    </Type>
  );
};
export default Text;
