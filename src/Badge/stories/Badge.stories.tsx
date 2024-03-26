import React from 'react';

import Badge, {BadgeProps} from '../index';
import {object} from "prop-types";

export default {
    title: 'COMPONENTS/Badge',
    component: Badge,
    argTypes: {
        style: {control: object}
    }
};

const Template: React.FC<BadgeProps> = (args) =>
    <Badge>
        {args.children}
    </Badge>

const CustomTemplate: React.FC<BadgeProps> = (args) =>
    <Badge style={args.style}>{args.children}</Badge>

export const Default = Template.bind({});
Default.args = {
    children: 'Default',
};

export const Custom = CustomTemplate.bind({});
Custom.args = {
    children: 'Custom',
    style: {
        "backgroundColor" : "#0E66A1",
        "color": "white"
    }
};