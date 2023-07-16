import React, {ReactNode} from "react";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: ReactNode
}
const Icon = ({size = 20, color, icon}: IconProps) => {

    return (
        <div style={{
            width: `${size}px`,
            height: `${size}px`,
            fill: color}
            }>
            {icon}
        </div>
    );
};
export default Icon;