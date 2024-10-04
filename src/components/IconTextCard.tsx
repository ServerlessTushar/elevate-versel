import React from 'react';
import Image from 'next/image';

interface IconTextCardProps {
    img: any;
    title: string;
    disc: string
}

 const IconTextCard: React.FC<IconTextCardProps> = ({ img, title, disc }) => {
  return (
    <div className='bg-white rounded-lg text-center'>
        <div className='flex justify-center my-8'>
            <Image src={img} alt={title} />
        </div>
        <h1 className='text-2xl font-bold md:text-4xl mb-8'>{title}</h1>
        <p className='md:text-2xl md:mb-8 md:mx-14'>{disc}</p>
    </div>
  )
}

export default IconTextCard;