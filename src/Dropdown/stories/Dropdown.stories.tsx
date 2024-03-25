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
        dark: {control: 'boolean'},
    }
};


const TemplateRight: React.FC<DropdownProps> = (args) => {
    const ITEMS = [
        {
            action: () => console.log('clicked 1'),
            text: 'Item 1',
            variant: 'tertiary',
        },
        {
            action: () => console.log('clicked 2'),
            text: 'Item 2',
            variant: 'tertiary'
        }
    ];

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

const TemplateDark: React.FC<DropdownProps> = (args) => {
    const ITEMS = [
        {
            action: () => console.log('clicked 1'),
            text: 'Item 1',
            variant: 'tertiary',
        },
        {
            action: () => console.log('clicked 2'),
            text: 'Item 2',
            variant: 'tertiary'
        }
    ];

    return (
        <Block
            classes={'bb-p-400 bb-border-radius-400'}
            size={400}
            style={{
                "backgroundColor": "#0D1117",
            }}>
            <Block stretch justify={'flex-start'} style={{"min-height" : "120px"}}>
                <Dropdown
                    variant={args.variant}
                    items={ITEMS}
                    direction={args.direction}
                    text={args.text}
                    icon={args.icon}
                    dark={args.dark}
                />
            </Block>
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

export const DarkRight = TemplateDark.bind({});
DarkRight.args = {
    variant: 'tertiary',
    text: 'Dropdown Dark',
    direction: 'right',
    dark: true,
};
