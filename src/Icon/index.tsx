import React from "react";
import 'remixicon/fonts/remixicon.css'

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Icon = ({size = 20, color='black', icon = 'ghost-line'}: IconProps) => {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: `${size}px`,
            height: `${size}px`}}>
            <i className={`ri-${icon}`} style={{ fontSize: `${size}px`, color }}></i>
        </div>
    );
};
export default Icon;