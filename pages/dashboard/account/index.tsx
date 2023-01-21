import React, { useState } from 'react'
import { Button } from '../../../components/button/button'
import { BiPlus } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import Dashboard from '../../../components/DashboardLayout/DashboardLayout'
import { Text } from '../../../components/typography/typography'
import DbTransactionBox from '../../../components/DbTransactionBox/DbTransactionBox'
import Vector3 from '../../../assets/png/Vector3.png'
import Image from 'next/image';
import DashboardContentBox from '../../../components/DashboardContentBox/DashboardContentBox'
import FundWalletModal from '../../../components/Modals/FundWalletModal'
import SetupAccountModal from '../../../components/Modals/SetupAccountModal'
import VerifyEmp_StudModal from '../../../components/Modals/VerificationOptions/VerifyEmp_StudModal'
import VerifyEmployeeCompanyModal from '../../../components/Modals/VerificationOptions/VerifyEmployeeCompanyModal'
import ActionOptionsModal from '../../../components/Modals/RenewOptions/RenewOption1'
import RenewOptionModal from '../../../components/Modals/RenewOptions/RenewOption2'
import ReturnOptionModal from '../../../components/Modals/RenewOptions/ReturnOption1'
import Return_EndOptionModal from '../../../components/Modals/RenewOptions/ReturnOption2'
import SwapOption1 from '../../../components/Modals/SwapOptions/SwapOption1'
import SwapOption2 from '../../../components/Modals/SwapOptions/SwapOption2'
import DashboardTopBar from '../../../components/DashboardTopBar/DashboardTopBar'


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

  // Fund Wallet State
  const [fundWalletIsOpen, setFundWalletIsOpen] = useState(false);
  
  // Account Setup State
  const [setupAccountIsOpen, setSetupAccountIsOpen] = useState(false);
  const [verifyEmp_StudIsOpen, setVerifyEmp_StudIsOpen] = useState(false);
  const [verifyEmpCompanyIsOpen, setVerifyEmpCompanyIsOpen] = useState(false);

  //Renewal Option State
  const [actionOptionsIsOpen, setActionOptionsIsOpen] = useState(false);
  const [renewOptionIsOpen, setRenewOptionIsOpen] = useState(false);
  const [returnOptionIsOpen, setReturnOptionIsOpen] = useState(false);
  const [return_EndOptionIsOpen, setReturn_EndOptionIsOpen] = useState(false)


  // Swap Option State
  // const [swapOption1IsOpen, setSwapOption1IsOpen] = useState(false)
  const [swapOption2IsOpen, setSwapOption2IsOpen] = useState(false)

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

              <Button 
                className='w-[163px] border border-[#00B0f0] border-solid rounded-3xl py-2 px-4'
                onClick={() => setFundWalletIsOpen(!fundWalletIsOpen)}
              >
                <BiPlus className='mr-2' />
                Add Fund
              </Button>
            </DashboardContentBox>

            <DashboardContentBox className='xl:w-2/6 sm:flex-row flex-col justify-center items-center'>
              <div className="sm:mr-auto mr-0 sm:mb-0 mb-6">
                <Text variant='paragraph_1' className='text-[#1B2559] font-bold mb-5 sm:text-left text-center'>Complete Set Up</Text>
                <Text variant='paragraph_4' className='text-[#A1A0BD] font-medium sm:max-w-[190px] max-w-full sm:text-left text-center'>
                  In just a few simple steps complete your status
                </Text>
              </div>

              <div 
                className="w-[40px] h-[40px] rounded-full bg-[#F4F7FE] hover:bg-[#dcebf9] flex items-center justify-center sm:ml-auto ml-0 cursor-pointer"
                // onClick={() => setSetupAccountIsOpen(!setupAccountIsOpen)}
                onClick={() => setVerifyEmp_StudIsOpen(!verifyEmp_StudIsOpen)}
                // onClick={() => setVerifyEmpCompanyIsOpen(!verifyEmpCompanyIsOpen)}
              >
                <BsArrowRight />
              </div>
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
                  ctaBtn={transaction.ctaBtn}
                  className={transaction.className}
                  // setActionOptionsIsOpen={setActionOptionsIsOpen}
                  // setActionOptionsIsOpen={setActionOptionsIsOpen}

                  // setRenewOptionIsOpen={setRenewOptionIsOpen}
                  // renewOptionIsOpen={renewOptionIsOpen}
                  
                  // setReturnOptionIsOpen={setReturnOptionIsOpen}
                  // returnOptionIsOpen={returnOptionIsOpen}

                  // setReturn_EndOptionIsOpen={setReturn_EndOptionIsOpen}
                  // return_EndOptionIsOpen={return_EndOptionIsOpen}

                  setSwapOption2IsOpen={setSwapOption2IsOpen}
                  swapOption2IsOpen={swapOption2IsOpen}
                />
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
        
        {/* Fund Wallet Modal  */}
        {fundWalletIsOpen 
        ? <FundWalletModal setFundWalletIsOpen={setFundWalletIsOpen} fundWalletIsOpen={fundWalletIsOpen} /> 
        : null 
        }


        {/* Setup Account Modal  */}
        {/* {setupAccountIsOpen 
        ? <SetupAccountModal setSetupAccountIsOpen={setSetupAccountIsOpen} setupAccountIsOpen={setupAccountIsOpen} /> 
        : null 
        } */}
        {verifyEmp_StudIsOpen 
        ? <VerifyEmp_StudModal setVerifyEmp_StudIsOpen={setVerifyEmp_StudIsOpen} verifyEmp_StudIsOpen={verifyEmp_StudIsOpen} /> 
        : null 
        }
        {/* {verifyEmpCompanyIsOpen 
        ? <VerifyEmployeeCompanyModal setVerifyEmpCompanyIsOpen={setVerifyEmpCompanyIsOpen} verifyEmpCompanyIsOpen={verifyEmpCompanyIsOpen} /> 
        : null 
        } */}



        {/* Renewal Option Modal  */}
        {/* {actionOptionsIsOpen 
        ? <ActionOptionsModal setActionOptionsIsOpen={setActionOptionsIsOpen} actionOptionsIsOpen={actionOptionsIsOpen} /> 
        : ''
        } */}
        {/* {renewOptionIsOpen
        ? <RenewOptionModal setRenewOptionIsOpen={setRenewOptionIsOpen} renewOptionIsOpen={renewOptionIsOpen} />
        : null
        } */}
        {/* {returnOptionIsOpen
        ? <ReturnOptionModal setReturnOptionIsOpen={setReturnOptionIsOpen} returnOptionIsOpen={returnOptionIsOpen} />
        : null
        } */}
        {/* {return_EndOptionIsOpen
        ? <Return_EndOptionModal setReturn_EndOptionIsOpen={setReturn_EndOptionIsOpen} return_EndOptionIsOpen={return_EndOptionIsOpen} />
        : null
        } */}
        


        {/* Swap Option State */}
        {/* {swapOption1IsOpen
        ? <SwapOption1 setSwapOption1IsOpen={setSwapOption1IsOpen} swapOption1IsOpen={swapOption1IsOpen} />
        : null
        } */}
        {swapOption2IsOpen
        ? <SwapOption2 setSwapOption2IsOpen={setSwapOption2IsOpen} swapOption2IsOpen={swapOption2IsOpen} />
        : null
        }
      </>
  )
}

export default account