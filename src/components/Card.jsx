import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"



const card = ({ data ,referance }) => {
    return (
        <>
            <motion.div drag dragConstraints={referance} whileDrag={{scale:.9}}  dragElastic={0.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className='flex-shrink-0 relative w-60 h-[310px] rounded-[40px] bg-zinc-950 text-white py-10 px-6 overflow-hidden'>
                <FaRegFileAlt />
                <p className='text-sm mt-6 font-semibold leading-tight'>
                    {data.desc}
                </p>

                <div className='footer absolute bottom-0 w-full h-15 left-0 '>
                    <div className='flex items-center justify-between mb-3 py-3 px-8'>
                        <h5>{data.filesize}</h5>
                        <span className='w-8 h-8 rounded-full bg-zinc-500 flex items-center justify-center'>
                            {data.close ? <IoMdClose /> : <GoDownload size="1em" color='#ffff' />}
                        </span>
                    </div>
                    {data.tag.isopen && (
                        <div className={`w-full flex item-center justify-center py-4 ${data.tag.tagcolor == "blue" ? "bg-blue-600":"bg-green-600"}`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
                        </div>
                    )
                    }

                </div>
            </motion.div>

        </>
    )
}

export default card
