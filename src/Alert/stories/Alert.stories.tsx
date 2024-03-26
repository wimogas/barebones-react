import React, {useEffect, useState} from "react";

import Alert, {AlertProps} from '../index';
import Button from "../../Button";

export default {
    title: 'COMPONENTS/Alert',
    component: Alert,
    argTypes: {
        type: {type: {required: true}, control: 'select',
            options: [
                'banner', 'toast', null
            ]},
    }
};

const Template: React.FC<AlertProps> = (args) =>
    <Alert
        type={args.type}
        close={args.close}
        icon={args.icon}
        iconColor={args.iconColor}>
        {args.children}
    </Alert>

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
            <Button action={() => setShowAlert(true)}>Launch Alert</Button>
            {showAlert && <Alert
                type={args.type}
                close={args.close}
                icon={args.icon}
                iconColor={args.iconColor}>
                {args.children}
            </Alert>}
        </>
    )
}

export const Default = Template.bind({});
Default.args = {
    children: 'Alert alert!',

};

export const Banner = ThrowAlert.bind({});
Banner.args = {
    children: 'Error alert',
    type: 'banner',
};

export const Toast = ThrowAlert.bind({});
Toast.args = {
    children: 'Successful alert',
    type: 'toast',
};
