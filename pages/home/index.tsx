import React from 'react'
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout'
import Vector1 from '../../assets/png/Vector1.png'
import Vector2 from '../../assets/png/Vector2.png'
import Vector3 from '../../assets/png/Vector3.png'
import Rectangle from '../../assets/png/Rectangle.png'
import Products from '../../assets/png/Products.png'
import Cart from '../../assets/png/empty_cart.png'
import Image from 'next/image'
import { Button } from '../../components/button/button'
import { Text } from '../../components/typography/typography'
import DashboardContentBox from '../../components/DashboardContentBox/DashboardContentBox'
import DashboardTopBar from '../../components/DashboardTopBar/DashboardTopBar'
import Link from 'next/link'
import { withAuth } from '../../components/views/protectedRoute'
import SkeletonLoader from '../../helpers/skeletonLoader'

function dashboard() {
  return (
    <>
      <DashboardLayout>
        <DashboardTopBar />

        <section className='w-full flex md:flex-row flex-col h-auto md:h-[156.79px] items-center justify-center gap-3.5 flex-initial mb-3.5'>
          <DashboardContentBox className='md:w-4/6 sm:flex-row flex-col items-center justify-center'>
            <div className='flex items-center'>
              <Image src={Vector1} alt='vector' className='w-16 h-16' />
            </div>

            <div className='max-w-[280px] sm:my-0 my-6'>
              <p className='text-base font-medium text-center sm:px-5 px-0'>
                Do you know how to complete account set up?
              </p>
            </div>

            <div className="w-auto">
              <Button className='w-[125px] border border-[#00B0f0] border-solid rounded-3xl py-2 px-4 text-sm'>
                <Link href='/home/account'>
                  <a>Go there</a>
                </Link>
              </Button>
            </div>
          </DashboardContentBox>

          <DashboardContentBox className='md:w-2/6 md:block hidden py-0 px-0'>
            {/* <Image src={Rectangle} alt='rectangle' className='object-cover' /> */}
          </DashboardContentBox>
        </section>
        {/* <SkeletonLoader width='100%' height='50px' borderRadius='5px' /> */}

        <section className='w-full h-auto md:h-[340px] flex md:flex-row flex-col items-center justify-center gap-3.5 flex-initial mb-3.5'>
          <DashboardContentBox className='md:w-4/6 items-center justify-center'>
            <div className='sm:ml-auto ml-0 sm:text-left'>
              <span className='text-center'>
                <Text variant='paragraph_1' className='font-bold'>
                  Rent A Gadget
                </Text>
              </span>

              <span className='max-w-[269px] inline-block my-6 text-center'>
                <Text
                  variant='paragraph_4'
                  className='font-medium text-[#A3AED0]'
                >
                  Get tech products for less and send it back when your rent is
                  due.
                </Text>
              </span>

              <div className='flex justify-center'>
                <Button className='bg-[#00B0f0] text-white border border-solid rounded-3xl py-2 px-5'>
                  <Link href='/home/products/rent'>
                    <a>Rent Now</a>
                  </Link>
                </Button>
              </div>
            </div>

            <div className='max-w-[267.12px] h-[164.53px] gap-3 flex items-center sm:block hidden sm:mr-auto mr-0'>
              <Image src={Products} alt='products' className='w-full h-full' />
            </div>
          </DashboardContentBox>

          <DashboardContentBox className='md:w-2/6 pt-8 pb-6 px-6 justify-center'>
            <div className='flex items-center justify-center'>
              <div className='flex md:flex-col flex-row-reverse justify-center items-center'>
                <div className='w-[68px] h-[68px] bg-[#F6F8FD] rounded-full flex justify-center items-center md:inline-flex hidden'>
                  <Image src={Vector2} alt='Vector' className='w-full h-full' />
                </div>

                <div className='text-center'>
                  <span className='my-5 block'>
                    <Text variant='paragraph_1' className='font-bold'>
                      Buy A Gadget
                    </Text>
                  </span>

                  <span className='mb-5 max-w-[270px] block'>
                    <Text
                      variant='paragraph_4'
                      className='font-medium text-[#A3AED0]'
                    >
                      Buy tech products at affordable prices and return for
                      swap, upgrade or sell it off.
                    </Text>
                  </span>

                  <div className='flex justify-center'>
                    <Button className='bg-[#00B0f0] text-white border border-solid rounded-3xl py-2 px-5'>
                      <Link href='/home/products/buy'>
                        <a>Buy Now</a>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </DashboardContentBox>
        </section>

        <section className='w-full h-auto md:h-[340px] flex md:flex-row flex-col items-center justify-center gap-3.5 flex-initial'>
          <DashboardContentBox className='md:w-4/6 justify-center'>
            <div className='flex flex-col items-start'>
              <div className='flex justify-center w-full mb-9'>
                <Text
                  variant='paragraph_3'
                  className='font-bold text-[#292D32]'
                >
                  My Saved Items
                </Text>
              </div>

              <div className='flex flex-col items-center'>
                <Image src={Cart} alt='cart' />
                <Text
                  variant='paragraph_3'
                  className='text-[#A3AED0] font-medium mt-8 text-center'
                >
                  Opps! You don’t have any favourites yet
                </Text>
              </div>
            </div>
          </DashboardContentBox>

          <DashboardContentBox className='md:w-2/6 justify-center py-8 px-6'>
            <div className='flex flex-col items-start'>
              <div className='flex justify-center w-full'>
                <Text
                  variant='paragraph_3'
                  className='font-bold text-[#292D32]'
                >
                  Recently Viewed
                </Text>
              </div>

              <div className='my-auto'></div>

              <div className='flex items-center justify-end cursor-pointer w-full'>
                <Text
                  variant='paragraph_3'
                  className='text-[#F4B183] font-bold mr-2'
                >
                  View all
                </Text>
                <Image src={Vector3} alt='vector' />
              </div>
            </div>
          </DashboardContentBox>
        </section>
      </DashboardLayout>
    </>
  )
}

export default withAuth(dashboard)
