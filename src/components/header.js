import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { TbBrandShopee } from "react-icons/tb";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BsChatDots } from "react-icons/bs";



const Header = () => {
    return (
        <div className='w-full'>
            <div className='lg:bg-orange-700 text-white flex flex-col items-center w-full'>


                {/* // mobile */}
                <div className='text-orange-700 w-full lg:hidden flex p-2 gap-2'>
                    <div className='flex items-center'>
                        <TbBrandShopee size={30} />
                        <span className='text-lg'>Shopee</span>
                    </div>
                    <input className='w-full' />
                    <PiShoppingCartSimple size={30} />
                    <BsChatDots size={30} />

                </div>
                {/* // laptop */}
                <div className='hidden lg:block'>
                    <div className='flex max-w-[1240px] justify-between w-full'>
                        <div className='flex items-center'>
                            <div className='p-2'>Seller Centre</div>
                            <span>|</span>
                            <div className='p-2'>เริ่มต้นขายสินค้า</div>
                            <span>|</span>
                            <div className='p-2'>ดาวน์โหลด</div>
                            <span>|</span>
                            <div className='p-2'>ติดตามเราบน</div>
                            <div className='flex gap-2'>
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between items-center'>
                                <IoIosNotificationsOutline size={18} />
                                <div className='p-2'>การแจ้งเตือน</div>
                                <IoIosHelpCircleOutline size={18} />
                                <div className='p-2'>ช่วยเหลือ</div>
                                <AiOutlineGlobal size={18} />
                                <div className='p-2'>ไทย</div>
                                <div className='p-2'>สมัครใหม่</div>
                                <span>|</span>
                                <div className='p-2'>เข้าสู่ระบบ</div>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between py-3'>
                        <div className='flex items-center'>
                            <TbBrandShopee size={40} />
                            <span className='text-3xl'>Shopee</span>
                        </div>
                        <div className='flex items-center flex-col'>
                            <div className='flex items-center border-2 border-white'>
                                <input className='h-10 min-w-[500px] px-3'
                                    placeholder='ลูกค้าใหม่รีบเลย ... ได้ส่วนลด ...' />
                                <FaMagnifyingGlass className='mx-2' size={20} />
                            </div>
                            <div className='pt-1 flex gap-2'>
                                <span>เก้าอี้ 1 บาท</span>
                                <span>ฟรีลูกค้าใหม่</span>
                                <span>โทรศัพท์มือถือราคาถูก</span>
                            </div>

                        </div>
                        <div>
                            <PiShoppingCartSimpleBold
                                size={40} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header