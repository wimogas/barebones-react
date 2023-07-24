import React, {useState} from "react";
import classNames from "classnames";

import styles from "./Dropdown.module.scss";
import Button from "../Button";
import {useOutsideClick} from "../hooks/useOutsideClick";

export type DropdownProps = {
    variant: 'primary' | 'secondary' | 'tertiary'
    items: any[],
    direction: 'left' | 'right',
    icon?: any,
    text?: string
}

const Dropdown = ({
                      items,
                      direction,
                      variant,
                      icon,
                      text

                  }: DropdownProps) => {

    const [showMenu, setShowMenu] = useState(false)

    const handleOutsideClick = () => {
        setShowMenu(false)
    }

    const ref = useOutsideClick(handleOutsideClick)

    return (
        <div className={classNames(styles.dropdown)} ref={ref}>
            <Button
                variant={variant}
                dropdown
                action={() => setShowMenu(!showMenu)}
                icon={icon}
            >
                {text}
            </Button>

            <div className={
                classNames(styles["dropdown-menu"],
                    styles[direction],
                    showMenu && styles['show-left'],
                    !showMenu && styles['hide-left'],
                )}>
                {items && items.map(item => {
                    return <Button
                        variant={item.variant}
                        classes={classNames(styles['dropdown-item'])}
                        key={item}
                        action={item.action}
                        icon={item.icon}>
                        {item.text}
                    </Button>
                })}
            </div>

        </div>
    );
};

export default Dropdown;
