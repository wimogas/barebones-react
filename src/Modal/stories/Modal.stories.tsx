import Modal, {ModalProps} from '../index';

import {useEffect, useState} from "react";
import Button from "../../Button";

export default {
    title: 'COMPONENTS/Modal',
    component: Modal,
    argTypes: {
        close: {type: {required: true}, control: 'Event'},
    }
};

const Template: React.FC<ModalProps> = (args) =>
    <Modal title={args.title} close={args.close}>
        This is modal content
    </Modal>

const ThrowModal: React.FC<ModalProps> = (args) => {
    const [showModal, setShowModal] = useState(false)
    function handleShowModal() {
        setShowModal(false)
    }

    return (
        <>
            <Button variant='primary' action={() => setShowModal(true)}>Launch Modal</Button>
            {showModal && <Modal
                title={args.title}
                close={handleShowModal}
            >Modal content </Modal>}
        </>
    )
}

export const Open = Template.bind({});
Open.args = {
    title: 'Modal title',
    close: () => console.log('closing...')
};

export const Launch = ThrowModal.bind({});
Launch.args = {
    title: 'Modal title',
};
