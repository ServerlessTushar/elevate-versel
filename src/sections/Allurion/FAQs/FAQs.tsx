import FaqAccordion from '@/components/FaqAccordion'
import React from 'react'

function FAQs() {
    return (
        <section className='bg-[#e9f5ff] h-fit text-center pt-12 pb-24 md:mb-2 px-8'>
            <div>
                <h1 className='text-[#3881C5] text-6xl font-bold mb-8'>FAQs</h1>
                {
                    faqArr.map((faqObj, index) => <FaqAccordion key={index} faq={faqObj} />)
                }
            </div>
        </section>
    )
}

export default FAQs;

const faqArr = [
    {
        question: "How much weight can I expect to lose with the Allurion Program?", 
        answer: "Research has shown that patients can expect lose approximately 10-15% of their total body weight following a 16-week program. If someone wants to lose more weight, the procedure can be repeated after the first balloon has been naturally flushed from the body.For eg. if you are weight 80 kilos, you may lose between 8 to 12 Kgs with Allurion weight-loss program."
    },
    {
        question: "Is this program more effective than dieting?", 
        answer: "Yes, it is. A patient tends to lose nearly two-and-half times more weight during a thorough 16-week journey. Infact, the results are so positive that 17% of the patients lost more than 20% of their body weight. While patients feel hungry during dieting, they require a much lesser food intake in the Allurion program to feel satiated. An added advantage is that people do not have hunger pangs, which are common to diet routines."
    },
    {
        question: "How is the balloon placed in the stomach?", 
        answer: "A safe and painless process, a swallowable capsule attached with a fine catheter is swallowed by the patient. When the x-ray confirms it to be in stomach, the catheter is used to pump in about 550 ml water. The vegan capsule- holds a deflated balloon within. As the balloon fills up, it cracks the pill open. When the second x-ray confirms the water-filled balloon in the right spot in your stomach, the catheter is pulled out.Performed under the supervision of an Allurion-certified doctor, the entire procedure takes roughly about 15-odd minutes. This product is the first weight loss program that neither requires an endoscopy nor anaesthesia for placement or removal."
    },
    {
        question: "Will I gain weight again?", 
        answer: "Up to 95% of the weight loss can be sustained over 12 months since the ingestion."
    },
    {
        question: "Who removes the balloon after 16 weeks?", 
        answer: "At the completion of 16 weeks, the balloon deflates and is naturally flushed out of the body, leaving no traces behind."
    },
    {
        question: "Will other people be able to notice the Balloon in my stomach?", 
        answer: "The balloon offers a discreet experience and it will not show outside your body. Others will come to know of it only when you tell them about it. So, go ahead, and feel confident."
    },
    {
        question: "How long after the procedure can I resume normal life?", 
        answer: "The procedure lasts only about 15 minutes and one can continue with their life soon thereafter. Some people experience mild symptoms such as nausea, tummy cramps and vomiting for a few days. Allurion's dedicated care team will advise you about your nutrition, monitoring weight, exercising and how to go about resuming your activities."
    }
]