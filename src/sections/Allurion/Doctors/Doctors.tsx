import React from 'react'
import Neeta from "../../../../public/Allurion/drfirstmobile.webp"
import Mohit from "../../../../public/Allurion/drmohitmobile.webp"
import Image from 'next/image'
import { epilogue, prospectus, prospectusBold } from '@/app/fonts'
import dynamic from 'next/dynamic'
import { Stethoscope } from 'lucide-react'
const DoctorsMobile = dynamic(
    () => import("./DoctorsMobile")
);
const Doctors = () => {
    return (
        <div>
            <div className={`${epilogue.className} flex flex-col`}>
                <div className='max-w-7xl mx-auto px-4 py-2 pb-4 md:mt-20'>
                    <h2 className={`text-center font-md my-2 text-textDarkBlue ${prospectusBold.className} text-lg md:text-3xl translate-y-3`} >Designed by the best for </h2>
                    <p className={` ${prospectusBold.className} text-center text-3xl md:text-7xl md:my-8 font-bold text-primaryBlue md:mb-20`}>Weight Management</p>
                </div>
                <div className='hidden lg:flex bg-textDarkBlue py-16  w-400px  '>
                    <div className='max-w-7xl mx-auto flex flex-col items-center md:flex-row gap-4 md:justify-center '>
                        {doctors?.map((doc, idx) => {
                            return <div key={doc.name} className={`w-[300px] flex flex-col items-center ${idx !== 2 ? 'md:border-r-[1px] border-slate-500' : 'border-0'}`}>
                                <Image src={doc.image} alt={doc.experience} loading='lazy' />
                                <div className='w-full translate-x-14 '>
                                    <p className='my-2 font-bold text-lg text-white text-left'>{doc.name}</p>
                                    <p className='my-2 w-2/3 text-sm text-white text-left'>{doc.qualifications}</p>
                                    <div className='flex gap-2 items-center'>
                                        <Stethoscope color='white' size={14} /><p className='my-2 font-bold text-white text-left'>{doc.experience}</p>
                                    </div></div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
            <DoctorsMobile />
        </div>
    )
}

export default Doctors

export const doctors = [
    {
        name: "Dr Neeta Deshpande",
        qualifications: "Cert Obesity (USA)\nMD, FRCP (Edin), PD Endo\nABSP",
        experience: "30 years of experience",
        image: Neeta
    },
    {
        name: "Dr Mohit Bhandari",
        qualifications: "Obesity expert\nMS, DMAS, FICS, FIAGES, FALS",
        experience: "15 years of experience",
        image: Mohit
    }
];