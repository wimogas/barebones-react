import React, {useEffect, useState} from "react";

import Alert, {AlertProps} from '../index';
import Button from "../../Button";

import CircleCheck from "../../assets/icons/checkbox-circle-line.svg";
import CloseCircle from "../../assets/icons/close-circle-line.svg";
import Icon from "../../Icon";

export default {
    title: 'COMPONENTS/Alert',
    component: Alert,
    argTypes: {
        variant: {type: {required: true}, control: 'select',
            options: [
                'success', 'error'
            ]},
        type: {type: {required: true}, control: 'select',
            options: [
                'banner', 'toast', null
            ]},
        children: {control: 'text'},
        close: {control: 'boolean'}
    }
};

const Template: React.FC<AlertProps> = (args) =>
    <Alert
        variant={args.variant}
        message={args.message}
        type={args.type}
        close={args.close}
        icon={args.icon}
        iconColor={args.iconColor}/>

const ThrowAlert: React.FC<AlertProps> = (args) => {
    const [showAlert, setShowAlert] = useState(false)
    function handleShowAlert() {
        setShowAlert(false)
    }
    useEffect(() => {
        const cleanAlerts = setTimeout(()=> {
            if(showAlert) {
                setShowAlert(false)
            }
        }, 3000)
        return () => clearTimeout(cleanAlerts);
    }, [showAlert])
    return (
        <>
            <Button variant='primary' action={() => setShowAlert(true)}>Launch Alert</Button>
            {showAlert && <Alert
                variant={args.variant}
                message={args.message}
                type={args.type}
                close={args.close && handleShowAlert}
                icon={args.icon}
                iconColor={args.iconColor}/>}
        </>
    )
}


export const Success = Template.bind({});
Success.args = {
    variant: 'success',
    message: 'Successful alert',
};

export const Error = Template.bind({});
Error.args = {
    variant: 'error',
    message: 'Error alert',
};

export const Banner = ThrowAlert.bind({});
Banner.args = {
    variant: 'error',
    message: 'Error alert',
    type: 'banner',
};

export const BannerDismissable = ThrowAlert.bind({});
BannerDismissable.args = {
    variant: 'error',
    message: 'Error alert',
    type: 'banner',
    close: true,
};

export const Toast = ThrowAlert.bind({});
Toast.args = {
    variant: 'success',
    message: 'Successful alert',
    type: 'toast',
};

export const ToastDismissable = ThrowAlert.bind({});
ToastDismissable.args = {
    variant: 'success',
    message: 'Successful alert',
    type: 'toast',
    close: true,
};

