'use client'
import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { epilogue } from '@/app/fonts';

interface FaqProps {
    faq: {
      question: string;
      answer: string;
    };
  }

const FaqAccordion: React.FC<FaqProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-[60%] mx-auto mb-2">
      <div
        className={`${epilogue.className} flex justify-between items-start md:items-center bg-[#3881C5] text-white cursor-pointer py-4 px-4 rounded-md text-sm md:text-lg text-left`}
        onClick={toggleAccordion}
      >
        <span>{faq.question}</span>
        <span>{isOpen ? <Minus color='white' size={24} /> : <Plus color='white' size={24} />}</span>
      </div>
      {isOpen && (
        <div className="bg-white text-left p-4 rounded-md mb-4 text-sm md:text-lg">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqAccordion;
