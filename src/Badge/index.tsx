import React, {FC} from "react";

import styles from "./Badge.module.scss";
import classNames from "classnames";

export type BadgeProps = {
  children: any,
  classes?: string,
  style?: any
}

const Badge: FC<BadgeProps> = ({children, classes, style}) => {
  return (
    <div className={classNames(
        styles.badge,
        classes ? classes : styles.default
    )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Badge;
