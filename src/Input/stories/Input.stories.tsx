import React from 'react';
import Input, {InputProps} from '../index';
import Text from "../../Text";

export default {
    title: 'COMPONENTS/Input',
    component: Input,
    argTypes: {
        onChange: {type: {required: true}, control: 'Event'},
        disabled: {control: 'boolean'},
        name: {control: 'text'},
        type: {control: 'text'},
    }
};

const Template: React.FC<InputProps> = (args) => {

    const [value, setValue] = React.useState<string>('');

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    return (
        <Input
            value={value}
            name={args.name}
            onChange={handleChangeValue}
            label={args.label}
            type={args.type}
            disabled={args.disabled}
            placeholder={args.placeholder}/>
    )
}


export const Simple = Template.bind({});
Simple.args = {
    value: '',
    name: 'email',
    onChange: () => {},
    placeholder: 'email'
};

export const Label = Template.bind({});
Label.args = {
    value: '',
    name: 'email',
    onChange: () => {},
    label: <Text text={"Email"}/>
};

export const Disabled = Template.bind({});
Disabled.args = {
    value: '',
    name: 'email',
    onChange: () => {},
    disabled: true,
    placeholder: 'email'
};