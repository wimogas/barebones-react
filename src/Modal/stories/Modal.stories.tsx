import Modal, {ModalProps} from '../index';

import React, {useEffect, useState} from "react";
import Button from "../../Button";
import CloseFill from '../../assets/icons/close-fill.svg';
import Icon from "../../Icon";
import Block from "../../Block";

export default {
    title: 'COMPONENTS/Modal',
    component: Modal
};

const ThrowModal: React.FC<ModalProps> = (args) => {
    const [showModal, setShowModal] = useState(false)
    function handleShowModal() {
        setShowModal(false)
    }

    return (
        <>
            <Button action={() => setShowModal(true)}>Launch Modal</Button>
            {showModal && <Modal>
                <Block justify={"space-between"}>
                    Modal content
                    <Button action={() => handleShowModal()}><Icon icon={<CloseFill/>}/></Button>
                </Block>

            </Modal>}
        </>
    )
}

export const Launch = ThrowModal.bind({});
Launch.args = {
    title: 'Modal title',
};

