

import { Form, Modal } from 'antd';

const ModalLogin = ({ setOpenModal, openModal }) => {

    // const handleOk = () => {
    //     setOpenModal(false);
    // };}
    const handleCancel = () => {
        setOpenModal(false);
    };
    return (
        <Modal width={300} open={openModal} onCancel={handleCancel} footer={null}>

            <Form>
                <h2>Login</h2>
                áksdakads


            </Form>
        </Modal>


    );
};

export default ModalLogin;