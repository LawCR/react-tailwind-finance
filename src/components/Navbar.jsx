import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const toogleMenuNav = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] '>REACT</h1>
            <ul className='hidden md:flex'>
                <li className='px-4 py-2  border-[#00df9a] hover:border-b'>
                    <a className='cursor-pointer py-2 px-2' href="#hero">Home</a> 
                </li>
                <li className='px-4 py-2 border-[#00df9a] hover:border-b'>
                    <a className='cursor-pointer py-2' href="#analytics">Company</a> 
                </li>
                <li className='px-4 py-2 border-[#00df9a] hover:border-b'>
                    <a className='cursor-pointer py-2' href="#newsletter">Contact</a> 
                </li>
                <li className='px-4 py-2 border-[#00df9a] hover:border-b'>
                    <a className='cursor-pointer py-2' href="#cards">Resources</a> 
                </li>
                <li className='px-4 py-2 border-[#00df9a] hover:border-b'>
                    <a className='cursor-pointer py-2' href="#footer">About</a> 
                </li>
            </ul>
            <div onClick={toogleMenuNav} className='block md:hidden cursor-pointer'>
                {
                    isOpenMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />
                }
            </div>
            {/* Mobile Menu */}
            <div className={isOpenMenu ? `fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500`: 'fixed left-[-100%] ease-in- duration-500'}  >
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>
                <ul className='p-4 uppercase '>
                    <li className='p-4 border-b border-gray-600'>
                        <a className='cursor-pointer' onClick={toogleMenuNav} href="#hero">Home</a> 
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <a className='cursor-pointer' onClick={toogleMenuNav} href="#analytics">Company</a> 
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <a className='cursor-pointer' onClick={toogleMenuNav} href="#newsletter">Contact</a> 
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <a className='cursor-pointer' onClick={toogleMenuNav} href="#cards">Resources</a> 
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <a className='cursor-pointer' onClick={toogleMenuNav} href="#footer">About</a> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar