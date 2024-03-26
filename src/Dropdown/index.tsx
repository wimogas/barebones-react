import React, {useState} from "react";
import classNames from "classnames";

import styles from "./Dropdown.module.scss";
import Button from "../Button";
import {useOutsideClick} from "../hooks/useOutsideClick";

export type DropdownProps = {
    items: any[],
    direction: 'left' | 'right',
    icon?: any,
    buttonChildren?: any,
    buttonClasses?: any,
    buttonStyle?: any,
    menuClasses?: any,
    menuStyle?: any
}

const Dropdown = ({
                      items,
                      direction,
                      icon,
                      buttonChildren,
                      buttonClasses,
                      buttonStyle,
                      menuClasses,
                      menuStyle
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
                action={() => setShowMenu(!showMenu)}
                icon={icon}
                classes={buttonClasses}
                style={buttonStyle && buttonStyle}
            >
                {buttonChildren}
            </Button>

            <div className={
                classNames(
                    styles["dropdown-menu"],
                    styles[direction],
                    showMenu && styles['show-left'],
                    !showMenu && styles['hide-left'],
                    menuClasses && menuClasses
                )}
            style={menuStyle ? menuStyle : {
                "backgroundColor": "white",
                "borderRadius": "4px",
                "padding": "16px",
                "boxShadow": "0 4px 15px rgba(128, 128, 128, 0.25)"
            }}>
                {items && items.map(item => {
                    return item
                })}
            </div>

        </div>
    );
};

export default Dropdown;
