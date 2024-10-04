"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { epilogue, prospectus } from '@/app/fonts';
import { Minus, Plus } from 'lucide-react';
const Accordion = ({ title, titleIcon, content, initialValue = false }: { initialValue: boolean, title: string, titleIcon: any, content: { heading: string, text: string }[] }) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    return (
        <div className="flex flex-1 flex-col shadow-lg bg-white rounded md:my-8">
            <button
                className={`${epilogue.className} w-full flex justify-between items-center px-2 py-1 md:p-4 text-left rounded-lg focus:outline-none bg-[#3881c5]`}
                onClick={initialValue === true ? () => { } : () => setIsOpen(!isOpen)}
            >
                <div className='flex gap-4 h-12 justify-center items-center'>
                    <div className='overflow-hidden rounded-full min-h-8 min-w-8 w-8 h-8 bg-white flex justify-center items-center'>
                        <Image src={titleIcon} alt={"img" + title + "img"} style={{ objectFit: "contain", height: 30, width: 30 }} />
                    </div>
                    <span className="text-md  text-white">{title}</span>
                </div>
                {initialValue === false ? isOpen ? <Minus color='white' size={18} /> : <Plus color='white' size={18} /> : null}
            </button>
            {isOpen && (
                <div className="p-4 flex flex-col gap-2 bg-white relative">
                    <div className='flex'>
                        <div className='flex gap-2'>
                            {/* <div className='absoluteh-40 w-[1px] border-r-0 border-dotted border-[2px] border-black'>
                            </div> */}
                            {/* {initialValue === false && <div className='w-4' />} */}
                            <div className='flex-col gap-2'>
                                {content?.map(el => {
                                    return <div key={el.heading}>
                                        <h4 className={`${epilogue.className} font-semibold my-2`}>{el.heading}</h4>
                                        <p className={`${epilogue.className}`} >{el.text}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Accordion