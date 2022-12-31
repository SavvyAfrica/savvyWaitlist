import React from 'react'
import { Text } from '../typography/typography'


interface IMyProp {
  text: string
  className?: string
}

function ProductsCategoryBox({text, className}: IMyProp) {
  return (
    <div className={`bg-white rounded-[20px] py-[10px] px-[20px] flex justify-center 
      items-center md:mr-6 mr-2 md:mb-6 mb-2 cursor-pointer`}
    >
      <Text className={`font-bold text-sm tracking-tight text-[#A3AED0] ${className}`}>{text}</Text>
    </div>
  )
}

export default ProductsCategoryBox