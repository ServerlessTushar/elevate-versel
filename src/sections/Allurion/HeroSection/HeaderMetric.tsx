import { prospectusBlack } from '@/app/fonts'
import Divider from '@/components/Divider'
import React from 'react'

const HeaderMetric = () => {
    return (
        <div className="w-full md:w-[70%] h-20 flex flex-row items-center border-[1px] border-[#3881c5] bg-white rounded-xl py-2">
            <div className="flex-col flex-1 text-center">
                <p className={`text-2xl ${prospectusBlack.className} textDarkBlue`}>100,000+</p>
                <p className='text-xs'>results globally</p>
            </div>
            <Divider />
            <div className="flex-col flex-1 text-center">
                <p className={`text-2xl ${prospectusBlack.className} textDarkBlue`}>80+</p>
                <p className='text-xs'>countries</p>
            </div>
            <Divider />
            <div className="flex-col flex-1 text-center">
                <p className={`text-2xl ${prospectusBlack.className} textDarkBlue`}>30 min</p>
                <p className='text-xs'>OPD procedure</p>
            </div>
        </div>
    )
}

export default HeaderMetric