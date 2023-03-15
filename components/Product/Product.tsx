import React, { Children } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IMyProp {
  src: string
  children?: React.ReactNode
  id?: React.Key | null | undefined
  option?: string
}

function Product({ src, children, id, option }: IMyProp) {


  return (
    <>
      <Link href={`/home/products/${option}/${id}`}>
        <a>
          <div className='flex flex-col flex-initial rounded-[21.53px] cursor-pointer'>
            <div className='w-full h-[143.51px] bg-[#f2f7fc] flex justify-center items-center rounded-[21.53px] relative'>
              <Image
                src={src}
                width='100%'
                height='100%'
                className='absolute top-0 right-0 left-0 bottom-0'
              />
            </div>

            {children}
          </div>
        </a>
      </Link>
    </>
  )
}

export default Product
