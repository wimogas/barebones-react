import React, {FC, ReactNode} from "react";

import styles from "./Grid.module.scss";

export type GridProps = {
  children: ReactNode
}

const Grid: FC<GridProps> = ({children}) => {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
};

export default Grid;
