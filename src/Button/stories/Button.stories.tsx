import Block, {BlockProps} from '../../Block';

import Button, {ButtonProps} from '../index';

export default {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        variant: {type: {required: true}, control: 'select',
            options: [
                'primary', 'secondary', 'inverse', 'success', 'error'
            ]},
        action: {type: {required: true}, control: 'Event'},
        disabled: {control: 'boolean'},
        dropdown: {control: 'boolean'},
        icon: {control: 'text'},
        iconColor: {control: 'text'}
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
        style={{
            "backgroundColor":"var(--color-primary-darker)",
            "padding" : "12px",
            "borderRadius" : "6px"
    }}>
        <Button
            variant={args.variant}
            action={args.action}
            style={args.style}
            disabled={args.disabled}
            icon={args.icon}
            dropdown={args.dropdown}
        >
            {args.children}
        </Button>
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

export const Inverse = DarkTemplate.bind({});
Inverse.args = {
    variant: 'inverse',
    children: 'Inverse',
    action: () => {console.log(`Button Secondary was clicked`)},
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    children: 'Success',
    action: () => {console.log(`Button Success was clicked`)},
    icon: undefined,
};

export const Danger = Template.bind({});
Danger.args = {
    variant: 'danger',
    children: 'Danger',
    action: () => {console.log(`Button Danger was clicked`)},
    icon: undefined,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    variant: 'primary',
    children: 'With Icon',
    action: () => {console.log(`Button With Icon was clicked`)},
    icon: 'admin-fill',
};

export const IconOnly = Template.bind({});
IconOnly.args = {
    variant: 'primary',
    action: () => {console.log(`Button Icon was clicked`)},
    icon: 'admin-fill',
};

export const Dropdown = Template.bind({});
Dropdown.args = {
    variant: 'secondary',
    children: 'Dropdown',
    action: () => {console.log(`Button Dropdown was clicked`)},
    dropdown: true,
};

