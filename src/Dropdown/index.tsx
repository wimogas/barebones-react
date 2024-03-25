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
    text?: string,
    dark?: boolean | undefined
}

const Dropdown = ({
                      items,
                      direction,
                      variant,
                      icon,
                      text,
                      dark
                  }: DropdownProps) => {

    const [showMenu, setShowMenu] = useState(false)

    const handleOutsideClick = () => {
        setShowMenu(false)
    }

    const ref = useOutsideClick(handleOutsideClick)

    return (
        <div className={classNames(
            styles.dropdown
        )} ref={ref}>
            <Button
                variant={variant}
                dropdown
                action={() => setShowMenu(!showMenu)}
                icon={icon}
                dark={dark}
            >
                {text}
            </Button>

            <div className={
                classNames(styles[`dropdown-menu${dark ? '-dark' : ''}`],
                    styles[direction],
                    showMenu && styles['show-left'],
                    !showMenu && styles['hide-left'],
                )}>
                {items && items.map(item => {
                    return <Button
                        variant={item.variant}
                        classes={classNames(styles['dropdown-item'])}
                        key={item.text}
                        action={item.action}
                        icon={item.icon}
                        dark={dark}>
                        {item.text}

                    </Button>
                })}
            </div>

        </div>
    );
};

export default Dropdown;
