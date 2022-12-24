import React from 'react'
import { Button } from '../../../components/button/button'
import { BiPlus } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import Dashboard from '../../../components/Dashboard/Dashboard'
import DashboardBox1 from '../../../components/DashboardBox1/DashboardBox1'
import DashboardBox2 from '../../../components/DashboardBox2/DashboardBox2'
import { Text } from '../../../components/typography/typography'
import DbTransactionBox from '../../../components/DbTransactionBox/DbTransactionBox'
import Vector3 from '../../../assets/png/Vector3.png'
import Image from 'next/image';


function account() {
  return (
      <>
        <Dashboard>
          <section 
            className="w-full flex xl:flex-row flex-col h-auto xl:h-[156.79px] items-center justify-center gap-3.5 flex-initial mb-3.5"
          >
            <DashboardBox1 className='xl:w-4/6 flex sm:flex-row flex-col justify-center items-center'>
              <div className="flex flex-col justify-start sm:items-start items-center sm:mb-0 mb-6 ">
                <Text variant='paragraph_3' className='text-[#A3AED0] font-bold'>Wallet Balance</Text>
                <span className='block text-[#1B2559] font-bold text-xl'>₦0.00</span>
              </div>

              <div className="flex flex-col justify-start sm:items-start items-center sm:mx-auto mx-0 sm:mb-0 mb-6">
                <Text variant='paragraph_3' className='text-[#A3AED0] font-bold'>Account Number</Text>
                <span className='block text-[#1B2559] font-bold text-xl'>3364501234</span>
              </div>

              <Button className='w-[163px] border border-[#00B0f0] border-solid rounded-3xl py-2 px-4'>
                <BiPlus />
                Add Fund
              </Button>
            </DashboardBox1>

            <DashboardBox2 className='xl:w-2/6 flex sm:flex-row flex-col justify-center items-center py-8 px-6'>
              <div className="sm:mr-auto mr-0 sm:mb-0 mb-6">
                <Text variant='paragraph_1' className='text-[#1B2559] font-bold mb-5 sm:text-left text-center'>Complete Set Up</Text>
                <Text variant='paragraph_4' className='text-[#A1A0BD] font-medium sm:max-w-[190px] max-w-full sm:text-left text-center'>
                  In just a few simple steps complete your status
                </Text>
              </div>

              <div className="w-[40px] h-[40px] rounded-full bg-[#F4F7FE] flex items-center justify-center sm:ml-auto ml-0">
                <BsArrowRight />
              </div>
            </DashboardBox2>
          </section>

          <section 
            className='w-full h-auto xl:h-[340px] flex flex-col xl:flex-row items-start justify-start gap-3.5 flex-initial pb-8'
          >
            <DashboardBox1 className='xl:w-4/6 flex flex-col'>
              <div className="mb-8 sm:text-left text-center">
                <Text variant='paragraph_1' className='text-[#292D32] font-bold'>Transactions</Text>
                <Text variant='paragraph_4' className='font-medium text-[#A1A0BD] sm:max-w-[388px] max-w-full sm:text-left text-center'>
                  Renew your rent or return the product you bought for swap.
                </Text>
              </div>

              <div className="">
                <DbTransactionBox 
                  productName='Apple iPhone 13 (128GB)' 
                  unitPrice='₦39,700' 
                  dueDate='Rent due on Jun 16, 2022'
                  currentDate='May 16, 2022'
                  ctaBtn='Renew'
                />
              </div>
            </DashboardBox1>

            <DashboardBox2 className='xl:w-2/6 py-8 px-6 flex flex-col justify-between'>
              <div className="mb-8">
                <Text variant='paragraph_1' className='text-[#292D32] font-bold'>History</Text>
              </div>

              <div className="my-auto"></div>

              <div className="flex items-center justify-end cursor-pointer w-full">
                <Text variant='paragraph_3' className='text-[#F4B183] font-bold mr-2'>View all</Text>
                <Image src={Vector3} alt='vector' />
              </div>
            </DashboardBox2>
          </section>
       </Dashboard>
      </>
  )
}

export default account