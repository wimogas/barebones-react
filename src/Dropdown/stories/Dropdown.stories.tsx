import Dropdown, {DropdownProps} from "../index";
import Block, {BlockProps} from "../../Block";
import React from "react";
import Button from "../../Button";
import Icon from "../../Icon";
import ArrowDownSLine from '../../assets/icons/arrow-down-s-line.svg';

export default {
    title: 'COMPONENTS/Dropdown',
    component: Dropdown,
    argTypes: {
        direction: {type: {required: true}, control: 'select',
            options: [
                'left', 'right',
            ]},
        icon: {control: 'text'},
        buttonStyle: {control: 'object'},
        menuStyle: {control: 'object'}
    }
};


const TemplateLeft: React.FC<DropdownProps> = (args) => {
    const ITEMS = [<Button key="1" action={() => {}}>Item 1</Button>,
        <Button key="2" action={() => {}}>Item 2</Button>];

    return (
        <Block stretch justify={'flex-start'} style={{"min-height" : "120px"}}>
            <Dropdown
                items={ITEMS}
                direction={args.direction}
                buttonChildren={args.buttonChildren}
                icon={args.icon}
                buttonStyle={args.buttonStyle}
                menuStyle={args.menuStyle}
            />
        </Block>

    )
}

const TemplateRight: React.FC<DropdownProps> = (args) => {
    const ITEMS = [<Button key="1" action={() => {}}>Item 1</Button>];

    return (
            <Block stretch justify={'flex-end'} style={{"min-height" : "120px"}}>
                <Dropdown
                    items={ITEMS}
                    direction={args.direction}
                    buttonChildren={args.buttonChildren}
                    icon={args.icon}
                />
            </Block>
    )
}

export const Left = TemplateRight.bind({});
Left.args = {
    buttonChildren: <>Dropdown</>,
    direction: 'left',
};

export const Right = TemplateLeft.bind({});
Right.args = {
    buttonChildren: <>Dropdown</>,
    direction: 'right',
};

export const Custom = TemplateLeft.bind({});
Custom.args = {
    buttonChildren: <>Dropdown<Icon icon={<ArrowDownSLine/>} color={"white"}/></>,
    direction: 'right',
    buttonStyle: {
        "backgroundColor": "black",
        "color": "white"
    },
    menuStyle: {
        "backgroundColor": "black",
        "padding": "16px",
        "borderRadius": "4px"
    }
};
