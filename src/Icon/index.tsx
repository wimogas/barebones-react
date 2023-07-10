import React from "react";
import 'remixicon/fonts/remixicon.css'
import classNames from "classnames";

type IconProps = {
    size?: number | undefined,
    classes?: string | undefined,
    color?: string | undefined,
    icon: string
}
const Icon = ({size = 20, classes, color, icon = 'ghost-line'}: IconProps) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: `${size}px`,
            height: `${size}px`}}>
            <i className={classNames(
                `ri-${icon}`,
                classes
            )} style={{ fontSize: `${size}px`, color }}></i>
        </div>
    );
};
export default Icon;