import NavbarV2 from '@/sections/Nav/NavbarV2'
import React from 'react'
import { cookies } from "next/headers";
import { epilogueBold } from '@/app/fonts';
import Footer from '@/sections/Footer/Footer';
import Link from 'next/link'
import TermsOfUse from './TermsOfUse';

const page = () => {
    const cookieStore = cookies();
    const fbp = cookieStore.get("_fbp");
    const fbc = cookieStore.get("_fbc");
    
    return (
        <div>
            <NavbarV2
                fbc={fbp?.value}
                fbp={fbp?.value}
                //formActionLink={formActions?.["staging-home-page"]}
                isV3={true}
            />
            <div className='bg-[#FFE498]'>
                <h2 className={`${epilogueBold.className} text-center text-4xl py-16 px-4 md:px-24`}>Terms of Use</h2>
            </div>

            <TermsOfUse />
            
            <div className='bg-white rounded-t-xl flex justify-center py-6 fixed bottom-0 w-full h-24 md:hidden border-t-[1px]'>
                <Link className='text-white bg-[#EA6F54] py-6 px-12 rounded-lg flex items-center font-bold' href={"https://blog.joinelevatenow.com/website-eligibility"}>Check your eligibility now!</Link>
            </div>  
            <Footer />
        </div>
    )
}

export default page
