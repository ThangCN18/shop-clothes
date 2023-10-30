
import { Avatar, Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Header, } = Layout;
import { AiOutlineShoppingCart } from "react-icons/ai";
import ModalLogin from '../ModalLogin/ModalLogin';
import { useState } from 'react';
// import { BiLogIn, BiUser } from "react-icons/bi";

const HeaderConponent = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleShow = () => {
        setOpenModal(true);
    };
    return (

        <Header className='flex justify-between items-center'

        >
            <div className="demo-logo" >
                <Avatar className='rounded-none w-[100px] h-[40px]' src="data:image/png;base64,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" />
            </div>
            <ul className='flex justify-center items-center gap-5 font-semibold'>
                <li>
                    <Link className='hover:border-b-black hover:border-b-2 duration-75' to="/">
                        Home
                    </Link>

                </li>
                <li>
                    <Link className='hover:border-b-black hover:border-b-2 duration-75' to="/">
                        Products
                    </Link>
                </li>
                <li>
                    <Link className='hover:border-b-black hover:border-b-2 duration-75' to="/">
                        Blogs
                    </Link>

                </li>
                <li>
                    <Link className='hover:border-b-black hover:border-b-2 duration-75' to="/">
                        About Us
                    </Link>

                </li>
            </ul>
            <div className='gap-5 flex justify-center items-center'>
                <Button className='rounded-full w-[30px] h-[30px] p-0 flex justify-center items-center'>
                    <AiOutlineShoppingCart />
                </Button>
                {/* <Button className='rounded-full w-[30px] h-[30px] p-0 flex justify-center items-center'>
                    <BiUser />
                   
                </Button> */}
                <Button onClick={handleShow} className='rounded-2   flex justify-center items-center'>
                    Login
                </Button>
            </div>
            <ModalLogin setOpenModal={setOpenModal} openModal={openModal} />
        </Header>
    );
};

export default HeaderConponent;