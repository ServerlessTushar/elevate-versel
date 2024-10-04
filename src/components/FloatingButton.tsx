"use client"
import { epilogue } from '@/app/fonts';
import { formActions } from '@/utils/formActions';
import { CircleX } from 'lucide-react';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
const ConsultationForm = dynamic(
    () => import("../sections/ConsultationForm/ConsultationForm")
);
const FloatingButton = ({ fbc, fbp, formActionLink }: { fbc?: string, fbp?: string, formActionLink?: string }) => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => setModal(p => !p)
    return (<div className='absolute md:hidden'>
        <button onClick={toggleModal} className={`${epilogue.className} text-textDarkBlue rounded-tr-xl rounded-tl-xl bg-default-gradient fixed bottom-0 w-full px-4 py-2 text-xl font-semibold`}>Book Free Consultation</button>
        <div className={`z-10 fixed bg-white pt-8 rounded-tl-xl rounded-tr-xl bottom-0 transition-transform  h-[70vh] overflow-scroll  ${modal ? "translate-y-0" : "translate-y-[100vh]"}`}>
            <CircleX color='#163949' className='top-4 absolute right-4 cursor-pointer' onClick={toggleModal} />
            <ConsultationForm formLocation='bannerform' formActionLink={formActionLink} fbc={fbc} fbp={fbp} />
        </div>
        {modal && <div onClick={toggleModal} className='fixed bottom-0 h-screen w-screen bg-black opacity-60 '></div>}
    </div>
    )
}

export default FloatingButton