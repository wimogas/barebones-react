import React from 'react';

import Block from '../../Block';
import Badge, {BadgeProps} from '../index';

export default {
    title: 'COMPONENTS/Badge',
    component: Badge,
    argTypes: {
        variant: {type: {required: true}, control: 'select',
            options: [
                'primary', 'secondary', 'tertiary', 'success', 'error'
            ]},
    }
};

const Template: React.FC<BadgeProps> = (args) =>
    <Badge
        variant={args.variant}
    >
        {args.children}
    </Badge>

const DarkTemplate: React.FC<BadgeProps> = (args) =>
    <Block
        classes={'bb-p-400 bb-border-radius-400'}
    style={{"backgroundColor" : "black"}}>
        <Badge variant={args.variant}>{args.children}</Badge>
    </Block>;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    children: 'Secondary',
};

export const Tertiary = DarkTemplate.bind({});
Tertiary.args = {
    variant: 'tertiary',
    children: 'Tertiary',
};


export const Error = Template.bind({});
Error.args = {
    variant: 'error',
    children: 'Error',
};

export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    children: 'Success',
};
