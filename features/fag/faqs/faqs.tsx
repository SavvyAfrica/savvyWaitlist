import React from 'react'
import { Button } from '../../../components/Button/Button'
import { Text } from '../../../components/typography/typography'

function Faqs() {
  const faqData = [
    {
      id: `1`,
      tittle: `Orders & Delivery`,
      description: `How soon can I get my product?`,
      description2: `Can I cancel my order?`,
    },
    {
      id: `2`,
      tittle: `Payment`,
      description: `How soon can I get my product?`,
      description2: `Can I cancel my order?`,
    },
    {
      id: `3`,
      tittle: `Return & Renewal`,
      description: `How do I send my gadget back to Savvy for upgrade?`,
      description2: `Can I renew my rent after returning the gadget?`,
    },
    {
      id: `4`,
      tittle: `Damages & Replacement`,
      description: `How soon can I get my product?`,
      description2: `Can I cancel my order?`,
    },
  ]
  return (
    <div className='w-full flex flex-col justify-center items-center mt-4'>
      {faqData.map((item) => (
        <div
          className='w-full flex flex-col justify-center items-center mt-4'
          key={item.id}
        >
          <div className='bud w-[50%] rounded-md px-3 py-5'>
            <Text variant='home_heading_3_32px' className='font-normal'>
              {item.tittle}
            </Text>
            <Text variant='paragraph_4' className='font-light not-italic'>
              {item.description}
            </Text>
            <Text variant='paragraph_4' className='font-light not-italic'>
              {item.description2}
            </Text>
          </div>
        </div>
      ))}
      <div>
        <Button className='bg-[#00B0F0] w-[118px] h-[39px] rounded-lg mt-6 mb-6'>
          <Text variant='paragraph_4' className='font-light'>
            Get Help
          </Text>
        </Button>
      </div>
    </div>
  )
}

export default Faqs
