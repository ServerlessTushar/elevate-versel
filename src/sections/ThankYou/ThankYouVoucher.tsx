"use client"
import React from 'react'
import Voucher from "../../../public/voucher.svg"
import Image from 'next/image'
import callBtnImg from "../../../public/callimg.svg"
import RecommendationBadge from "../../../public/webp/docCircle.webp";
import { cookies } from 'next/headers'

const ThankYouVoucher = () => {

    function handleButtonClick() {

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'buttonClick',
            'buttonID': 'thankyoucallclick',
            'pageURL': window.location.href,
            'textOnButton': 'Call An Expert Now',
            'numberBehindTheClick': '08006890068'
        });
    }
    return (
        <div className='mx-auto max-w-7xl w-full  flex flex-col items-center py-8 px-4' style={{ fontFamily: "Arial" }}>
            <Image src={Voucher} alt="10% off voucher" />
            <p className='text-xs text-center my-2 mb-8'>Discount voucher valid for next 7 days only. T&C apply.</p>
            <p className='text-center'>Start your weight loss journey today.<br /> It will only take 10 minutes</p>
            <a href="tel:+91-8006890068"><Image src={callBtnImg} className='my-8' alt='call button' style={{ width: 200 }} onClick={handleButtonClick} /></a>
            <p className='text-center mb-8'>Thank you for providing your details. Our team will reach out to you shortly.</p>

            <div className='bg-neutral-100 p-8 py-12 rounded-lg relative mt-12'>
                <Image className='absolute -top-1/3 left-1/2 -translate-x-1/2 rounded-full' src={RecommendationBadge} alt='doctor recommended' style={{ height: 100, width: 100 }} />
                <p className='text-center font-bold'>Did You Know?</p>
                <p className='text-center font-semibold my-2'>You can lose weight by sleeping right!</p>
                <p className='text-center'>Speak to our health expert to learn such tips and tricks for an easy and effecting weight loss journey</p>
            </div>
            <div className='w-full max-w-[400px]  h-[1px] bg-primaryBlue my-8'></div>
            <p className='max-w-[400px] text-center'>Elevate Now is India’s first doctor-led medical weight loss program combining medical science, technology and expert guidance to help you achieve your weight loss goals </p>
        </div>
    )
}

export default ThankYouVoucher