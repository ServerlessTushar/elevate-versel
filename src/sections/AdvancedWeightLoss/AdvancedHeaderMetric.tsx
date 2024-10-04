import { prospectusBlack } from '@/app/fonts'
import Divider from '@/components/Divider'
import React from 'react'

const AdvancedHeaderMetric = () => {
    return (
        <div className="w-[90%] md:w-full h-16 md:h-20 flex flex-row items-center border-[1px] border-[#3881c5] bg-white rounded-xl py-2">
            <div className="flex-col flex-1 text-center">
                <p className={`text-base ${prospectusBlack.className} textDarkBlue`}>~15%</p>
                <p className='text-xs'>weight loss</p>
            </div>
            <Divider />
            <div className="flex-col flex-1 text-center">
                <p className={`text-base ${prospectusBlack.className} textDarkBlue`}>Minimal</p>
                <p className='text-xs'>Lifestyle Changes</p>
            </div>
            <Divider />
            <div className="flex-col flex-1 text-center">
                <p className={`text-base ${prospectusBlack.className} textDarkBlue`}>Lasting</p>
                <p className='text-xs'>Results</p>
            </div>
        </div>
    )
}

export default AdvancedHeaderMetric;