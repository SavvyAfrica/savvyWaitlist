import React from 'react'
import { Text } from '../../../components/typography/typography'
// import { Eye, MessageSquare, Box } from 'react-feather'
import Image from 'next/image'
// import * as Icons from 'react-feather'
import MessageIcon from '../../../assets/message.svg'
import EyeIcon from '../../../assets/eye.svg'
import BoxIcon from '../../../assets/box.svg'

const Info = [
  {
    id: `1`,
    tittle: `Easy Discovery`,
    description: `Our simplified product discovery and tips makes it super easy for you to find all your needs in just few clicks.`,
    icon: EyeIcon,
  },
  {
    id: `2`,
    tittle: `In-App Messaging`,
    description: `Connect privately with our inhouse experts to assist with troubleshooting, installation, repair, and other issues.`,
    icon: MessageIcon,
  },
  {
    id: `3`,
    tittle: `Doorstep Delivery`,
    description: `You’ll be notified as soon as our
associates are ready to deliver
or pick up the device at your
preferred location.`,
    icon: BoxIcon,
  },
]
// type IconType = {
//   [key: string]: React.ElementType<any>
// }

// const Icons: IconType = {
//   Eye,
//   MessageSquare,
//   Box,
// }

const Frame = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mb-10'>
      <div className='flex justify-center items-center flex-col'>
        <Text
          variant='home_heading_3_32px'
          className='font-semibold text-[24px]'
        >
          Built With Simplicity In Mind
        </Text>
        <Text variant='paragraph_4' className='text-[#A6A6A6]'>
          You don’t need extra hassle and confusion with Savvy
        </Text>
      </div>
      <div className='mt-6 w-full flex items-center justify-center space-x-4'>
        {Info.map((InfoItems, id) => {
          // const Icon = Icons[InfoItems.icon]
          return (
            <div
              key={id}
              className='border border-[#00B0F0] rounded-[16px] h-[230px] w-[290px] flex items-center justify-center p-2  flex-col'
            >
              <div>
                {/* <Icon /> */}
                <Image src={InfoItems.icon} width={30} height={30} />
              </div>
              <Text variant='home_heading_3_32px' className='text-[22px]'>
                {InfoItems.tittle}
              </Text>
              <Text
                variant='paragraph_4'
                className='text-center text-[#A6A6A6]'
              >
                {InfoItems.description}
              </Text>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Frame
