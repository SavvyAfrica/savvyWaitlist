import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import DashboardLayout from '../../../../components/DashboardLayout/DashboardLayout'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import { useGlobalContext } from '../../../../global/GlobalContext';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Text } from '../../../../components/typography/typography'
import { MdOutlineShoppingCart } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image'
import Profile from '../../../../assets/png/profile.png'
import { GrStatusGood } from 'react-icons/gr';
import { Button } from '../../../../components/Button/Button';
import iphone13pro from '../../../../assets/png/iphone13promax.png';
import cameraSystem1 from '../../../../assets/png/camera_system1.png';
import cameraSystem2 from '../../../../assets/png/camera_system2.png';



function products_buy_details() {
  const { showNav, setShowNav } = useGlobalContext();

  
  const router = useRouter()
  const { details } = router.query


  const [selected, setSelected] = useState("In 6 months");

  const renderIcon = useCallback((element: React.ReactNode) => {
    if(element) {
      return <GrStatusGood className='h-4 w-4 ml-auto' />
    }
  }, []);
  
  const buyDetailsData = [
    "In 6 months", 
    "In 12 months", 
    "In 24 months",
    "No Preference"
  ];

  
  const [count, setCount] = React.useState<number>(1);
  const inc = () => {
    setCount(count + 1);
  };
  
  const dec = () => {
    setCount(count - 1);
    
    if(count === 1 ){
      setCount(1)
    }
  }

  return (
    <div>
      <DashboardLayout>
        <div className="w-full pb-16 flex justify-between items-start">
          <div>
            <div className="lg:hidden -translate-x-1">
              <HiOutlineBars3BottomLeft 
                className='h-8 w-8 cursor-pointer text-gray-700' 
                onClick={() => setShowNav(!showNav)} 
              />
            </div>
                
            <div className="w-auto lg:mt-0 mt-7 flex flex-row items-center">
              <IoArrowBackCircleOutline className='text-2xl pt-1' />
              <Text className='font-bold ml-2.5 text-[#292d32] lg:text-[30px] sm:text-2xl text-sm'>Product Details</Text>
            </div>
          </div>

          <div className="flex md:flex-row flex-row-reverse items-center">
            <div className="md:mr-5 mr-0 md:ml-0 ml-2.5 lg:mr-8 cursor-pointer text-gray-700 bg-white rounded-full">
              {/* <Link href=''> */}
                  <MdOutlineShoppingCart className="sm:h-10 h-[25px] sm:w-10 w-[25px] sm:p-2 p-1" />
              {/* </Link> */}
            </div>


            <div className="w-full sm:py-1 py-0 sm:px-2 px-0 rounded-xl hover:bg-[#dcebf9]">
              <Link href={'/dashboard/account'}>
                <a className='flex w-full justify-center items-center'>
                  <span className="inline-block sm:h-10 h-[25px] sm:w-10 w-[25px]">
                    <Image 
                      src={Profile} 
                      width='100%' 
                      height='100%' 
                      alt="profile picture" 
                      className="rounded-full h-8 md:mr-4 border-2 border-white shadow-xl" 
                    />
                  </span>
            
                  <div className="md:block hidden ml-3 flex flex-col items-start">
                    <Text variant='paragraph_4' className="font-semibold text-gray-700">Karim Andrei</Text>
                    <Text variant='paragraph_4' className='font-normal'>User</Text>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div 
          className={`w-full bg-white rounded-[20px] pt-[22px] pb-[27px] pl-[22px] 
            xl:pr-[60px] pr-[25px] mb-5 flex flex-row items-start justify-between`
          }
        >
          <div className="w-1/2 xl:mr-[50px] mr-[25px]">
            <div className="h-[427px] bg-[#E6F0FB] rounded-[22px] flex justify-center items-center mb-[21px]">
              <Image src={iphone13pro} alt='iphone' width={250} height={300} />
            </div>

            <div className="gap-3 flex items-center xl:justify-between justify-center xl:flex-nowrap flex-wrap">
              <span className="inline-block w-1/3 h-[112px] bg-[#E6F0FB] rounded-[22px] flex items-end justify-center">
                <Image src={cameraSystem2} alt='iphone' width={89} height={90} className='rounded-b-[15px]' />
              </span>

              <span className="inline-block w-1/3 h-[112px] bg-[#E6F0FB] rounded-[22px] flex items-center justify-end">
                <Image src={cameraSystem1} alt='iphone' width={106} height={25} className='' />
              </span>

              <span className="inline-block w-1/3 h-[112px] bg-[#E6F0FB] rounded-[22px] flex items-end justify-center">
                <Image src={cameraSystem2} alt='iphone' width={89} height={90} className='rounded-b-[15px]' />
              </span>
            </div>
          </div>

          <div className="w-1/2">
            <Text className='font-semibold text-2xl text-[#2F294D]'>Apple iPhone 13 (128GB)</Text>
            <Text className='font-normal text-[14.74px] text-[#2F294D] opacity-50 mb-[20.32px]'>
              Free 2 Days Shipping | 1 Year Warranty
            </Text>
            <Text className='font-normal text-[13px] text-[#2F294D] opacity-50 mb-[30px] max-w-full'>
              Would you like to return your tech for swap or sale in the future? If yes, pick a 
              usage period below. Savvy will notify you when it’s time and take care of the rest.
            </Text>

            <div className="mb-[33.54px] flex flex-col w-full">
              {buyDetailsData.map((element, index): React.ReactNode => {
                return (
                  <span 
                    key={index}
                    onClick={() => setSelected(element)}
                    className={`inline-block py-2 pl-2 pr-4 mb-2.5 rounded flex justify-center items-center 
                      ${selected === element
                      ? "bg-[#E6F0FB]"
                      : "bg-[#F6F6F6] hover:bg-[#E6F0FB]"
                      }`}
                  >
                    <Text variant="paragraph_4" className='font-semibold text-[#2F294D] mr-auto'>{element}</Text>
                    {selected === element ? renderIcon(element) : null}
                  </span>
                )
              })}
            </div>

            <div className="flex flex-row justify-between items-center mb-[52px]">
              <Text className='font-semibold xl:text-[40.54px] text-[35px] leading-[60px]'>₦13,000</Text>

              <span className='inline-block bg-[#E6F0FB] w-[116px] h-[37px] rounded-[10px] px-3 py-2 flex items-center justify-center'>
                <button onClick={dec} className='w-[10px] h-[21px]'>-</button>
                <input 
                  type="number" 
                  value={count} 
                  readOnly 
                  className='inline-block bg-[#E6F0FB] w-[40px] h-[21px] flex justify-center outline-0 text-center mx-auto' 
                />
                <button onClick={inc} className='w-[10px] h-[21px]'>+</button>
              </span>
            </div>

            <div className="gap-3 flex xl:flex-row flex-col items-center justify-center">
              <Button className='rounded-xl w-[180px] h-[41px] text-center inline-block'>
                <Text className='text-[14.74px] font-semibold text-[#ffffff] bg-[#00B0F0] py-[9.5px] px-[50px]'>
                  Buy it Now
                </Text>
              </Button>

              <Button className='rounded-xl w-[180px] h-[41px] text-center inline-block'>
                <Text className='text-[14.74px] font-semibold text-[#292D32] bg-[#0064D21A] py-[9.5px] px-[50px]'>
                  Add to Cart
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default products_buy_details