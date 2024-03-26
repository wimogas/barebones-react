import Button, {ButtonProps} from '../index';
import {object} from "prop-types";
import Badge from "../../Badge";

export default {
    title: 'COMPONENTS/Button',
    component: Button,
    argTypes: {
        action: {type: {required: true}, control: 'Event'},
        disabled: {control: 'boolean'},
        dropdown: {control: 'boolean'},
        icon: {control: 'text'},
        iconColor: {control: 'text'},
        dark: {control: 'boolean'},
        style: {control: object},
        classes: {control: 'text'}
    }
};

const Template: React.FC<ButtonProps> = (args) => <Button
    action={args.action}
    style={args.style}
    disabled={args.disabled}
    icon={args.icon}
    classes={args.classes}
>
    {args.children}
</Button>;

export const Default = Template.bind({});
Default.args = {
    children: 'Default',
    action: () => {console.log(`Button Default was clicked`)},
};

export const Custom = Template.bind({});
Custom.args = {
    children: 'Custom',
    action: () => {console.log(`Button Custom was clicked`)},
    style: {
        "backgroundColor" : "black",
        "color" :"white"
    }
};

export const CustomTwo = Template.bind({});
CustomTwo.args = {
    children: <>Custom <Badge style={{"backgroundColor":"#0E66A1"}}>Badge</Badge></>,
    action: () => {console.log(`Button Custom was clicked`)},
    style: {
        "backgroundColor" : "black",
        "color" :"white"
    }
};
