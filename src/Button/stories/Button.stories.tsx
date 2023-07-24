import Block, {BlockProps} from '../../Block';

import CloseFill from '../../assets/icons/close-fill.svg';

import Button, {ButtonProps} from '../index';

export default {
    title: 'COMPONENTS/Button',
    component: Button,
    argTypes: {
        variant: {type: {required: true}, control: 'select',
            options: [
                'primary', 'secondary', 'tertiary', 'success', 'error'
            ]},
        action: {type: {required: true}, control: 'Event'},
        disabled: {control: 'boolean'},
        dropdown: {control: 'boolean'},
        icon: {control: 'text'},
        iconColor: {control: 'text'},
        dark: {control: 'boolean'},
    }
};

const Template: React.FC<ButtonProps> = (args) => <Button
    variant={args.variant}
    action={args.action}
    style={args.style}
    disabled={args.disabled}
    icon={args.icon}
    dropdown={args.dropdown}
>
    {args.children}
</Button>;

const DarkTemplate: React.FC<ButtonProps> = (args) =>
    <Block
        classes={'bb-p-400 bb-border-radius-400'}
        size={400}
        style={{
            "backgroundColor": "#000",
        }}>
        <Button
            variant={'primary'}
            action={args.action}
            style={args.style}
            disabled={args.disabled}
            icon={args.icon}
            dropdown={args.dropdown}
            dark={args.dark}
        >
            Primary
        </Button>
        <Button
            variant={'secondary'}
            action={args.action}
            style={args.style}
            disabled={args.disabled}
            icon={args.icon}
            dropdown={args.dropdown}
            dark={args.dark}
        >
            Secondary
        </Button>
        <Button
            variant={'tertiary'}
            action={args.action}
            style={args.style}
            disabled={args.disabled}
            icon={args.icon}
            dropdown={args.dropdown}
            dark={args.dark}
        >
            Tertiary
        </Button>

        <Button
            variant={'success'}
            action={args.action}
            style={args.style}
            disabled={args.disabled}
            icon={args.icon}
            dropdown={args.dropdown}
            dark={args.dark}
        >
            Success
        </Button>

        <Button
            variant={'danger'}
            action={args.action}
            style={args.style}
            disabled={args.disabled}
            icon={args.icon}
            dropdown={args.dropdown}
            dark={args.dark}
        >
            Danger
        </Button>
        <Button
            variant={'icon-only'}
            action={args.action}
            style={args.style}
            disabled={args.disabled}
            icon={<CloseFill/>}
            dropdown={args.dropdown}
            dark={args.dark}
        />
    </Block>;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Primary',
    action: () => {console.log(`Button Primary was clicked`)},
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    children: 'Secondary',
    action: () => {console.log(`Button Secondary was clicked`)},
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    variant: 'tertiary',
    children: 'Tertiary',
    action: () => {console.log(`Button Tertiary was clicked`)},
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
    children: 'Danger',
    action: () => {console.log(`Button Danger was clicked`)},
    icon: undefined,
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    children: 'Success',
    action: () => {console.log(`Button Success was clicked`)},
    icon: undefined,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    variant: 'primary',
    children: 'With Icon',
    action: () => {console.log(`Button With Icon was clicked`)},
    icon: <CloseFill/>,
};

export const Dropdown = Template.bind({});
Dropdown.args = {
    variant: 'secondary',
    children: 'Dropdown',
    action: () => {console.log(`Button Dropdown was clicked`)},
    dropdown: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'primary',
    children: 'Disabled',
    action: () => {console.log(`Button Disabled was clicked`)},
    disabled: true,
}

export const IconOnly = Template.bind({});
IconOnly.args = {
    variant: 'icon-only',
    action: () => {console.log(`Button With Icon was clicked`)},
    icon: <CloseFill/>,
};

export const DarkMode = DarkTemplate.bind({});
DarkMode.args = {
    action: () => {console.log(`Button Primary was clicked`)},
    dark: true,
    disabled: false,
};
