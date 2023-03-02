import React from 'react'
import { Text } from '../typography/typography'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

interface IMyProp {
  type: React.ReactNode
  model: React.ReactNode
  amount: React.ReactNode
}

function ProductInfo({ type, model, amount }: IMyProp) {
  return (
    <>
      <Text className='text-[12.76px] leading-[17px] font-medium tracking-wide text-[#2F294D] pb-1 pt-[10.47px]'>
        {type}
      </Text>
      <Text className='text-[11.5098px] font-normal tracking-wide leading-[15px] text-[#2F294D] opacity-70 pb-2'>
        {model}
      </Text>

      <div className='flex justify-between items-center'>
        <span className='text-[15.3464px] font-medium text-[#2F294D] tracking-wide leading-5'>
          ₦ {amount}
          <span className='text-[9px] text-[#2F294D]'>/per month</span>
        </span>

        <span className='w-[31.89px] h-[31.89px] bg-[#E5E5E5] rounded-full block flex justify-center items-center cursor-pointer'>
          <MdOutlineFavoriteBorder className='w-[13.96px] h-[12.46px]' />
        </span>
      </div>
    </>
  )
}

export default ProductInfo
