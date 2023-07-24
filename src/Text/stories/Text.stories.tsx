import Text, {TextProps} from '../index';
import React from "react";
import Block from "../../Block";

export default {
    title: 'COMPONENTS/Text',
    component: Text,
    argTypes: {
        type: {control: 'select',
            options: [
                'span', 'p', 'h1', 'h2', 'h3', undefined
            ]},
        text: {control: 'text'},
        style: {control: 'object'},
        bold: {control: 'boolean'},
        size: {control: 'select',
            options: [
                's', 'm', 'l', 'xl', undefined
            ]},
        color: {control: 'select',
            options: [
                'default', 'primary', 'secondary', 'error', 'success', 'disabled', undefined
            ]},
        dark: {control: 'boolean'}
    }
};

const Template: React.FC<TextProps> = (args) =>
    <Text
        type={args.type}
        text={args.text}
        color={args.color}
        style={args.style}
        bold={args.bold}
        size={args.size}
    dark={args.dark}/>;

const DarkTemplate: React.FC<TextProps> = (args) =>
    <Block
        classes={'bb-p-400 bb-border-radius-400'}
        size={400}
        style={{
            "backgroundColor": "#151515",
        }}>
        <Text
        type={args.type}
        text={args.text}
        color={'primary'}
        style={args.style}
        bold={args.bold}
        size={args.size}
        dark={args.dark}/>
        <Text
        type={args.type}
        text={args.text}
        color={'secondary'}
        style={args.style}
        bold={args.bold}
        size={args.size}
        dark={args.dark}/>
        <Text
        type={args.type}
        text={args.text}
        color={'error'}
        style={args.style}
        bold={args.bold}
        size={args.size}
        dark={args.dark}/>
        <Text
        type={args.type}
        text={args.text}
        color={'success'}
        style={args.style}
        bold={args.bold}
        size={args.size}
        dark={args.dark}/>
        <Text
        type={args.type}
        text={args.text}
        color={'default'}
        style={args.style}
        bold={args.bold}
        size={args.size}
        dark={args.dark}/>
        <Text
        type={args.type}
        text={args.text}
        color={'disabled'}
        style={args.style}
        bold={args.bold}
        size={args.size}
        dark={args.dark}/>
    </Block>;

export const Span = Template.bind({});
Span.args = {
    text: 'Hello world',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec massa magna. Donec eget justo nec quam consequat vestibulum consectetur a velit. Quisque tincidunt, sapien quis laoreet rutrum, magna libero maximus lectus, sed semper mauris ligula vitae sapien. Donec lacus felis, maximus id accumsan vitae, congue nec mi. Sed mollis scelerisque est placerat consequat. Donec venenatis quam ut enim dignissim fermentum. Sed tristique lacus eget arcu vehicula finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc elementum consectetur eros, eu convallis turpis tincidunt at. Nullam et metus metus. Phasellus imperdiet, quam ac viverra mattis, libero velit accumsan odio, vel dignissim orci arcu ac urna. Nam consequat justo vitae mattis feugiat. Fusce in dictum ipsum. Nunc sed nisi et urna mollis efficitur sit amet sagittis libero.',
};

export const Heading1 = Template.bind({});
Heading1.args = {
    type: 'h1',
    text: 'Hello world',
};

export const Heading2 = Template.bind({});
Heading2.args = {
    type: 'h2',
    text: 'Hello world',
};

export const Heading3 = Template.bind({});
Heading3.args = {
    type: 'h3',
    text: 'Hello world',
};

export const CustomSpan = Template.bind({});
CustomSpan.args = {
    size: 's',
    color: 'primary',
    bold: true,
    text: 'Hello world',
};

export const DarkMode = DarkTemplate.bind({});
DarkMode.args = {
    size: 's',
    color: 'primary',
    text: 'Hello world',
    dark: true
};