import Dropdown, {DropdownProps} from "../index";
import Block, {BlockProps} from "../../Block";

export default {
    title: 'COMPONENTS/Dropdown',
    component: Dropdown,
    argTypes: {
        direction: {type: {required: true}, control: 'select',
            options: [
                'primary', 'secondary', 'inverse'
            ]},
        variant: {type: {required: true}, control: 'select',
            options: [
                'left', 'right',
            ]},
        icon: {control: 'text'},
        text: {control: 'text'},
    }
};


const TemplateRight: React.FC<DropdownProps> = (args) => {
    const ITEMS = [{
        action: () => console.log('clicked'),
        text: 'Item 1',
        variant: 'tertiary'
    }];

    return (
        <Block stretch justify={'flex-start'} style={{"min-height" : "120px"}}>
            <Dropdown
                variant={args.variant}
                items={ITEMS}
                direction={args.direction}
                text={args.text}
                icon={args.icon}
            />
        </Block>

    )
}

const TemplateLeft: React.FC<DropdownProps> = (args) => {
    const ITEMS = [{
        action: () => console.log('clicked'),
        text: 'Item 1',
        variant: 'tertiary'
    }];

    return (
        <Block stretch justify={'flex-end'} style={{"min-height" : "120px"}}>
            <Dropdown
                variant={args.variant}
                items={ITEMS}
                direction={args.direction}
                text={args.text}
                icon={args.icon}
            />
        </Block>

    )
}


export const Right = TemplateRight.bind({});
Right.args = {
    variant: 'secondary',
    text: 'Dropdown Right',
    direction: 'right',
};

export const Left = TemplateLeft.bind({});
Left.args = {
    variant: 'secondary',
    text: 'Dropdown Left',
    direction: 'left',
};
