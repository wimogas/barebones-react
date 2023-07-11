import React, {FC} from "react";

import styles from "./Badge.module.scss";
import classNames from "classnames";

export type BadgeProps = {
  children: string,
  variant?: "primary" | "secondary" | "inverse" | "error" | "success" | undefined
}

const Badge: FC<BadgeProps> = ({children, variant}) => {
  return (
    <div className={classNames(
        styles.badge,
        variant && styles[`badge-${variant}`])}>
      {children}
    </div>
  );
};

export default Badge;
