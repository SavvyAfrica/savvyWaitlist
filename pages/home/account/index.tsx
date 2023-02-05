import React, { useState } from 'react';
import { Button } from '../../../components/Button/Button';
import { BiPlus } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import Dashboard from '../../../components/DashboardLayout/DashboardLayout';
import { Text } from '../../../components/typography/typography';
import DbTransactionBox from '../../../components/DbTransactionBox/DbTransactionBox';
import Vector3 from '../../../assets/png/Vector3.png'
import Image from 'next/image';
import DashboardContentBox from '../../../components/DashboardContentBox/DashboardContentBox';
import DashboardTopBar from '../../../components/DashboardTopBar/DashboardTopBar'

import { 
  FundWalletModal, 
  SetupAccountModal, 
  VerifyEmp_StudModal, 
  VerifyEmployeeCompanyModal, 
  RenewOption1, 
  RenewOption2, 
  ReturnOption1, 
  ReturnOption2,
  SwapOption1,
  SwapOption2,
  SwapOption3,
} from '../../../components/Modals';




function account() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      productName: 'Apple iPhone 13 (128GB)', 
      unitPrice: '₦39,700', 
      dueDate: 'Rent due on Jun 16, 2022',
      currentDate: 'May 16, 2022',
      ctaBtn: 'Renew',
      className: 'mb-5'
    },
    {
      id: 2,
      productName: 'Mac book pro', 
      unitPrice: '₦45,000', 
      dueDate: 'To be swapped on or before Jun 16, 2022',
      currentDate: 'May 16, 2022',
      ctaBtn: 'Swap',
      className: 'mb-5'
    }
  ]);


  return (
      <>
        <Dashboard>
          <DashboardTopBar />
          
          <section 
            className="w-full flex xl:flex-row flex-col h-auto xl:h-[156.79px] items-center justify-center gap-3.5 flex-initial mb-3.5"
          >
            <DashboardContentBox className='xl:w-4/6 sm:flex-row flex-col justify-center items-center'>
              <div className="flex flex-col justify-start sm:items-start items-center sm:mb-0 mb-6 ">
                <Text variant='paragraph_3' className='text-[#A3AED0] font-bold'>Wallet Balance</Text>
                <span className='block text-[#1B2559] font-bold text-xl'>₦0.00</span>
              </div>

              <div className="flex flex-col justify-start sm:items-start items-center sm:mx-auto mx-0 sm:mb-0 mb-6">
                <Text variant='paragraph_3' className='text-[#A3AED0] font-bold'>Account Number</Text>
                <span className='block text-[#1B2559] font-bold text-xl'>3364501234</span>
              </div>

              <FundWalletModal />
            </DashboardContentBox>

            <DashboardContentBox className='xl:w-2/6 sm:flex-row flex-col justify-center items-center'>
              <div className="sm:mr-auto mr-0 sm:mb-0 mb-6">
                <Text variant='paragraph_1' className='text-[#1B2559] font-bold mb-5 sm:text-left text-center'>Complete Set Up</Text>
                <Text variant='paragraph_4' className='text-[#A1A0BD] font-medium sm:max-w-[190px] max-w-full sm:text-left text-center'>
                  In just a few simple steps complete your status
                </Text>
              </div>
              
              <SetupAccountModal />
              {/* <VerifyEmp_StudModal /> */}
              {/* <VerifyEmployeeCompanyModal /> */}
            </DashboardContentBox>
          </section>

          <section 
            className='w-full h-auto xl:h-[340px] flex flex-col xl:flex-row items-start justify-start gap-3.5 flex-initial'
          >
            <DashboardContentBox className='xl:w-4/6 flex-col'>
              <div className="mb-8 sm:text-left text-center">
                <Text variant='paragraph_1' className='text-[#292D32] font-bold'>Transactions</Text>
                <Text variant='paragraph_4' className='font-medium text-[#A1A0BD] sm:max-w-[388px] max-w-full sm:text-left text-center'>
                  Renew your rent or return the product you bought for swap.
                </Text>
              </div>

              <div className="scrollbar overflow-auto">
                {transactions.map(transaction => (
                <DbTransactionBox 
                  key={transaction.id}
                  productName={transaction.productName}
                  unitPrice={transaction.unitPrice}
                  dueDate={transaction.dueDate}
                  currentDate={transaction.currentDate}
                  className={transaction.className}
                >
                  {/* <RenewOption1 ctaBtn={transaction.ctaBtn} /> */}
                  {/* <RenewOption2 ctaBtn={transaction.ctaBtn} /> */}
                  {/* <ReturnOption1 ctaBtn={transaction.ctaBtn} /> */}
                  {/* <ReturnOption2 ctaBtn={transaction.ctaBtn} /> */}

                  {/* <SwapOption1 ctaBtn={transaction.ctaBtn} /> */}
                  <SwapOption2 ctaBtn={transaction.ctaBtn} />
                  {/* <SwapOption3 ctaBtn={transaction.ctaBtn} /> */}
                </DbTransactionBox>
                ))}
              </div>
            </DashboardContentBox>

            <DashboardContentBox className='xl:w-2/6 flex-col justify-between'>
              <div className="mb-8">
                <Text variant='paragraph_1' className='text-[#292D32] font-bold'>History</Text>
              </div>

              <div className="my-auto"></div>

              <div className="flex items-center justify-end cursor-pointer w-full">
                <Text variant='paragraph_3' className='text-[#F4B183] font-bold mr-2'>View all</Text>
                <Image src={Vector3} alt='vector' />
              </div>
            </DashboardContentBox>
          </section>
        </Dashboard>
      </>
  )
}

export default account