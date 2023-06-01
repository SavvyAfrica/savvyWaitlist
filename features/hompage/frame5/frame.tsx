import React, { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence, wrap } from 'framer-motion'
import { Text } from '../../../components/typography/typography'
import Image from 'next/image'
import User from '../../../assets/Image.png'

const cards = [
  <motion.div className='relative'>
    <div className='w-[60px] h-[60px] rounded-full absolute z-[9999]'>
      <Image src={User} height={100} width={100} className='w-full h-full' />
    </div>
    <div className='lg:w-[450px] pt-3 pb-3 pl-16 lg:p-5 h-[180px] lg:absolute  rounded-[10px] customer right-[3.5rem] 2xl:right-[8rem] top-[2rem] space-y-3 bg-white'>
      <Text variant='paragraph_4' className='text-[#5E6282]'>
        We were on the hunt for better work tools with a small budget before we
        discovered Savvy. Their service really increased the productivity of our
        team.
      </Text>
      <Text variant='paragraph_4' className='font-bold text-[#5E6282]'>
        Frank Ighodalo
      </Text>
      <Text variant='paragraph_4' className='text-[#5E6282]'>
        CEO Protia Technologies
      </Text>
    </div>
  </motion.div>,
  <motion.div className='relative'>
    <div className='w-[60px] h-[60px] rounded-full absolute z-[9999]'>
      <Image src={User} height={100} width={100} className='w-full h-full' />
    </div>
    <div className='lg:w-[450px] pt-3 pb-3 pl-16 lg:p-5 h-[180px] lg:absolute  rounded-[10px] customer right-[3.5rem] 2xl:right-[8rem] top-[2rem] space-y-3 bg-white'>
      <Text variant='paragraph_4' className='text-[#5E6282]'>
        We were on the hunt for better work tools with a small budget before we
        discovered Savvy. Their service really increased the productivity of our
        team.
      </Text>
      <Text variant='paragraph_4' className='font-bold text-[#5E6282]'>
        Frank Ighodalo
      </Text>
      <Text variant='paragraph_4' className='text-[#5E6282]'>
        CEO Protia Technologies
      </Text>
    </div>
  </motion.div>,
]

const variants = {
  enter: (direction: number) => {
    return {
      y: direction > 0 ? 100 : -100,
      x: 30,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: 30,
      y: direction < 0 ? 100 : -100,
      opacity: 0,
    }
  },
}

const Frame = () => {
  const [[card, direction], setCard] = useState([0, 0])

  const childIndex = wrap(0, 2, card)

  const move = useCallback(
    (newDirection: number) => {
      setCard([card + newDirection, newDirection])
    },
    [card]
  )

  useEffect(() => {
    // if(!timeout) return

    const id = setTimeout(() => move(1), 5000)

    return () => clearTimeout(id)
  }, [card, move])

  return (
    <div
      className={`maxWidth mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-5 items-center py-5 px-5 lg:pt-5 lg:pb-5 lg:pl-[6rem] lg:pr-[6rem] h-[320px] mb-8`}
    >
      <div className='space-y-4'>
        <Text variant='paragraph_4' className='text-[#A6A6A6]'>
          Customer Review
        </Text>
        <Text variant='home_heading_3_32px' className='font-bold text-[22px]'>
          What People Say About Us.
        </Text>
        <div className='flex space-x-4'>
          <div className='w-[10px] h-[10px] bg-[#E5E5E5] rounded-full cursor-pointer'></div>
          <div className='w-[10px] h-[10px] bg-[#E5E5E5] rounded-full cursor-pointer'></div>
          <div className='w-[10px] h-[10px] bg-[#E5E5E5] rounded-full cursor-pointer'></div>
        </div>
      </div>
      <div className='relative h-full lg:p-5'>
        <AnimatePresence initial={false} custom={direction}>
          {React.cloneElement(cards[childIndex], {
            key: card,
            custom: direction,
            variants,
            initial: 'enter',
            animate: 'center',
            exit: 'exit',
            transition: {
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            },
          })}
        </AnimatePresence>
        {/* <div>
          <div className='w-[60px] h-[60px] rounded-full absolute z-[9999]'>
            <Image
              src={User}
              height={100}
              width={100}
              className='w-full h-full'
            />
          </div>
          <div className='w-[450px] p-5 h-[180px] absolute rounded-[10px] z-[-9999] border-2  right-[1rem] top-[8rem] customer__2 space-y-3'>
            <Text variant='paragraph_4' className='text-[#5E6282]'>
              We were on the hunt for better work tools with a small budget
              before we discovered Savvy. Their service really increased the
              productivity of our team.
            </Text>
            <Text variant='paragraph_4' className='font-bold text-[#5E6282]'>
              Frank Ighodalo
            </Text>
            <Text variant='paragraph_4' className='text-[#5E6282]'>
              CEO Protia Technologies
            </Text>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Frame
