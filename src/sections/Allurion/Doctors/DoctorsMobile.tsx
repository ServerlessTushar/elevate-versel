"use client"
import React, { useState } from 'react'
import { doctors } from './Doctors'
import Image from 'next/image'
import useCycle from '@/utils/hooks/useCycle'
import { ChevronLeft, ChevronRight, Stethoscope } from 'lucide-react'
import { epilogue } from '@/app/fonts'
const DoctorsMobile = () => {
    const [current, next, prev] = useCycle(doctors)
    const doc = current
    return (
        <div>
            <div className={`${epilogue.className} bg-textDarkBlue flex lg:hidden justify-center py-8`}>
                <div className='flex flex-row items-center justify-center'>
                    <div>
                        <ChevronLeft onClick={prev} color='#EA6F54' />
                    </div>
                    <div key={doc.name} className={`w-[300px] flex flex-col items-center h-80`}>
                        <Image src={doc.image} alt={doc.experience} loading='lazy' />
                        <div className='w-full translate-x-14 '>
                            <p className='my-2 font-bold text-lg text-white text-left'>{doc.name}</p>
                            <p className='my-2 w-2/3 text-sm text-white text-left'>{doc.qualifications}</p>
                            <div className='flex gap-2 items-center'>
                                <Stethoscope color='white' size={14} /><p className='my-2 font-normal text-white text-left'>{doc.experience}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ChevronRight onClick={next} color='#EA6F54' />
                    </div>
                </div>
            </div>
            <div className='bg-white flex gap-2 justify-center py-4 lg:hidden'>
                {doctors?.map(doc => {
                    const isSelected = doc.name === current.name
                    return <div key={doc.name} className={`h-2  rounded-lg ${isSelected ? "bg-[#969DB6] w-6" : "bg-[#E5E7ED] w-2"}`}></div>
                })}
            </div>
        </div>
    )
}

export default DoctorsMobile