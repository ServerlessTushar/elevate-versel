import { prospectusBold, epilogue, prospectusSemiBold, prospectus } from '@/app/fonts'
import Bullet from '@/components/Bullet'
import React from 'react'
import HeroImgIcon from "../../../../public/Allurion/En12.webp"
import Image from 'next/image'
import NoSurgeryIcon from '../../../../public/Allurion/no-surgery-icon.svg'
import NoEndoscopyIcon from '../../../../public/Allurion/no-endoscopy-icon.svg'
import NoAnesthesiaIcon from '../../../../public/Allurion/no-anesthesia-icon.svg'

const HeroText = () => {
    return (
        <div className='w-3/4 md:h-[540px] flex flex-col text-white ml-4 md:ml-6'>
            <h4 className={`${prospectus.className} text-sm md:text-3xl mt-8`}>Tired of failed weight</h4>
            <h4 className={`${prospectus.className} text-sm md:text-3xl`}>loss attempts?</h4>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <h4 className={`${prospectusSemiBold.className} text-sm md:text-3xl mt-10 md:mt-20`}>Try a scientifically</h4>
                    <h4 className={`${prospectusSemiBold.className} text-sm md:text-3xl`}>proven way to</h4>
                </div>
                <div className='w-20 h-20 ml-2 mt-4 md:w-36 md:36 md:ml-6 md:mt-10'>
                    <Image
                        src={HeroImgIcon}
                        alt={"New Banner Img2"}
                        priority
                    />
                </div>
            </div>
            <h1 className={`${prospectusSemiBold.className} text-3xl md:text-8xl mt-8`}>Lose Weight!</h1>
            <ul className={`${epilogue.className} mb-4 font-normal`}>
                <li className='flex items-center text-xs  md:text-xl my-2 gap-2'><span className='h-4 w-4 md:h-8 md:w-8'><Image src={NoSurgeryIcon} alt="No Surgery Icon" /></span>No surgery</li>
                <li className='flex items-center text-xs md:text-xl my-2 gap-2'><span className='h-4 w-4 md:h-8 md:w-8'><Image src={NoEndoscopyIcon} alt="No Endoscopy Icon" /></span>No endoscopy</li>
                <li className='flex items-center text-xs  md:text-xl my-2 gap-2'><span className='h-4 w-4 md:h-8 md:w-8'><Image src={NoAnesthesiaIcon} alt="No Anesthesia Icon " /></span>No anesthesia</li>
            </ul>
        </div>)
}

export default HeroText