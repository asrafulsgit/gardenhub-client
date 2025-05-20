import React from 'react'

const FAQ = () => {
    const fapAns =[
        {
            question :'1. what are your core maintenance practices, and how frequently do you recommend them?' ,
            answer : 'Our core maintenance includes regular weeding, strategic mulching for moisture retention, and routine soil health checks. We recommend weekly or bi-weekly visits for optimal garden vigor and appearance.'
        },
        {
            question :'2. what is your typical process, from initial consultation and design to plant selection and installation?' ,
            answer : 'Our process begins with an in-depth consultation to understand your vision and site conditions, followed by comprehensive design and plant selection. Finally, our skilled team meticulously handles all installation, bringing your new garden to life.'
        },
        {
            question :'3. What specific techniques do you employ for optimal plant health and longevity, including watering, fertilizing, and pruning for different plant types?' ,
            answer : "We employ precise irrigation methods tailored to each plant's needs, using organic fertilizers to enrich soil naturally. Our expert pruning techniques promote strong growth, better flowering, and disease prevention for all plant types."
        },
        {
            question :'4. What preventative measures do you recommend or implement to deter common garden pests, and what non-chemical solutions do you prioritize?' ,
            answer : 'We prioritize natural deterrents like companion planting, beneficial insect introduction, and regular garden hygiene. Our preventative approach focuses on creating a balanced ecosystem resistant to pests, minimizing chemical intervention.'
        },
        {
            question :'5. How do you adapt your garden maintenance and plant care strategies based on seasonal changes and local climate conditions throughout the year?' ,
            answer : 'Our strategies are dynamically adjusted for each season, considering factors like rainfall, temperature, and plant dormancy. We proactively prepare your garden for climate shifts, ensuring resilience and year-round beauty.'
        },
        {
            question :'6. In the event of a significant pest infestation or plant disease, what steps do you take for identification, treatment, and long-term prevention?' ,
            answer : 'Upon detection, we swiftly identify the specific pest or disease through careful inspection. We then implement targeted organic or least-toxic treatments, followed by recommendations for long-term cultural practices to prevent recurrence.'
        }
    ]
  return (
    <div class="mt-12 px-5 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div class="text-center mb-8">
          <h3 className="text-[30px] text-[#111827] mb-2 font-[700] nunito-family">
            Frequently Asked <span className='text-green-600 font-[900]'>Questions</span></h3>
          <p className="text-[18px] font-[400] text-[#4b5563] mb-8 roboto-family">Find quick answers to common questions</p>
        </div>
        
        {fapAns.map((item,index)=>(
        <div key={index} className="collapse collapse-arrow bg-base-100 
        border border-base-300 mt-1.5">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold nunito-family">{item.question}</div>
                <div className="collapse-content text-sm roboto-family opacity-80">{item.answer}</div>
        </div>
       )) }
        
    </div>
  )
}

export default FAQ
