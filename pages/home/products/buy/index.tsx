import React, { useEffect, useState } from 'react'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import DashboardLayout from '../../../../components/DashboardLayout/DashboardLayout'
import { Text } from '../../../../components/typography/typography'
// import { useGlobalContext } from '../../../../global/store'
import Image from 'next/image'
import { MdOutlineShoppingCart } from 'react-icons/md'
import Profile from '../../../../assets/png/defaultProfile.png'
import Link from 'next/link'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { IoIosSearch } from 'react-icons/io'
import Product from '../../../../components/Product/Product'
import ProductInfo from '../../../../components/Product/ProductInfo'
import Iphone13promax from '../../../../assets/png/iphone13promax.png'
import microsoftsurface from '../../../../assets/png/microsoft-surface.png'
import samsunggalaxy from '../../../../assets/png/samsung-galaxy.png'
import applewatchseries from '../../../../assets/png/apple-watch-series.png'
import nokiatablet from '../../../../assets/png/nokia-tablet.png'
import ProductsCategoryBox from '../../../../components/ProductsCategoryBox/ProductsCategoryBox'
import Vector3 from '../../../../assets/png/Vector3.png'
import Apple from '../../../../assets/png/Apple.png'
import { withAuth } from '../../../../components/views/protectedRoute'
import { userService } from '../../../../services'
import DashboardProfileDetails from '../../../../components/DashboardProfileDetails/DashboardProfileDetails'

const topInterest = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
    type: 'iPhone 13 Pro Max',
    model: 'Apple',
    amount: '530,500',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
    type: 'Microsoft Surface 2',
    model: 'Microsoft',
    amount: '240,500',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
    type: 'Samsung Galaxy S22',
    model: 'Samsung',
    amount: '530,500',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
    type: 'Apple Watch Series 6',
    model: 'Apple',
    amount: '530,500',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
    type: 'Nokia Tablet T267',
    model: 'Nokia',
    amount: '530,500',
  },
]

const popularBrands = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
  },
]

const latestModel = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
    type: 'iPhone 13 Pro Max',
    model: 'Apple',
    amount: '530,500',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
    type: 'Apple Watch Series 6',
    model: 'Apple',
    amount: '530,500',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
    type: 'Apple Watch Series 6',
    model: 'Apple',
    amount: '530,500',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
    type: 'Apple Watch Series 6',
    model: 'Apple',
    amount: '530,500',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/duhx38bd0/image/upload/v1653824887/habeep-files/6ca963fe647ffcfaeb9090c4c15243b7165382488157819357.jpg',
    type: 'Apple Watch Series 6',
    model: 'Apple',
    amount: '530,500',
  },
]

const categories = [
  {
    id: 1,
    text: 'Phones & Tablets',
  },
  {
    id: 2,
    text: 'Computers',
  },
  {
    id: 3,
    text: 'Gaming & VR',
  },
  {
    id: 4,
    text: 'Audio & Music',
  },
  {
    id: 5,
    text: 'Home Electronics',
  },
  {
    id: 6,
    text: 'Office Electronic',
  },
  {
    id: 7,
    text: 'Others',
  },
]

function products_buy() {
  // const { showNav, setShowNav } = useGlobalContext()
  const [user, setUser] = useState<any>({})

  useEffect(() => {
    let r =
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('user') || '{}')
        : ''

    setUser(r)
  }, [])
  const [search, setSearch] = useState('')

  // Search filter function

  // const searchFilter = (array: any[]) => {
  //   return array.filter(
  //     (el: { name: { common: string } }) => el.name.common.toLowerCase().includes(search)
  //   )
  // }

  //Applying our search filter function to our array of countries recieved from the API

  // const filtered = searchFilter(topInterest)

  //Handling the input on our search bar
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSearch(e.target.value)
  }

    const [currentSubject, setCurrentSubject] = useState<any>();
    useEffect(() => {
        // Getting current logged in user
        const subject = userService.userValue;

        if (subject !== undefined){
           setCurrentSubject(subject);
        }
    }, []);

  return (
    <>
      <DashboardLayout>
        <div className='w-full pb-9 pt-9 flex justify-between items-start'>
          <div>
            <div className='lg:hidden -translate-x-1'>
              {/* <HiOutlineBars3BottomLeft
                className='h-8 w-8 cursor-pointer text-gray-700'
                onClick={() => setShowNav(!showNav)}
              /> */}
            </div>

            <div className='w-auto lg:mt-0 mt-7 flex flex-row items-center'>
              <IoArrowBackCircleOutline className='text-2xl pt-1' />
              <Text className='font-bold ml-2.5 text-[#292d32] lg:text-[30px] sm:text-2xl text-sm'>
                Buying Product Page
              </Text>
            </div>
          </div>

          <div className='flex md:flex-row flex-row-reverse items-center'>
            <div className='md:mr-5 mr-0 md:ml-0 ml-2.5 lg:mr-8 cursor-pointer text-gray-700 bg-white rounded-full'>
              {/* <Link href=''> */}
              <MdOutlineShoppingCart className='sm:h-10 h-[25px] sm:w-10 w-[25px] sm:p-2 p-1' />
              {/* </Link> */}
            </div>

            <div className='w-full sm:py-1 py-0 sm:px-2 px-0 rounded-xl hover:bg-[#dcebf9]'>
              <Link href={'/dashboard/account'}>
                <a className='flex w-full justify-center items-center'>
                  <span className='inline-block sm:h-10 h-[25px] sm:w-10 w-[25px]'>
                    <Image
                      src={Profile}
                      width='100%'
                      height='100%'
                      alt='profile picture'
                      className='rounded-full h-8 md:mr-4 border-2 border-white shadow-xl'
                    />
                  </span>

                  <div className='md:block hidden ml-3 flex flex-col items-start'>
                    <Text
                      variant='paragraph_4'
                      className='font-semibold text-gray-700'
                    >
                      {user.firstName} {user.lastName}
                    </Text>
                    <Text variant='paragraph_4' className='font-normal'>
                      User
                    </Text>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className='w-full h-auto'>
          <div className='mb-8 relative flex'>
            <input
              onChange={handleChange}
              type='text'
              placeholder='Search products and brand...'
              className={`rounded-lg w-[491px] py-3 pl-7 pr-5 flex-initial bg-white outline-0 
                placeholder:text-[#8F9BBA] font-normal text-xs tracking-tight text-[#8F9BBA]`}
            />
            <IoIosSearch className='text-sm text-[#1B2559] absolute top-[14px] left-2' />
          </div>

          <div className='mb-[25.36px] flex flex-row items-center flex-wrap'>
            {categories.map((category) => (
              <ProductsCategoryBox key={category.id} text={category.text} />
            ))}
          </div>

          <div className='mb-2.5 flex justify-between items-center'>
            <Text className='font-bold text-base tracking-tight text-[#292D32]'>
              Top Interest
            </Text>

            <span className='flex items-center cursor-pointer inline-block'>
              <Text
                variant='paragraph_3'
                className='text-[#F4B183] font-bold mr-2'
              >
                View all
              </Text>
              <Image src={Vector3} alt='vector' />
            </span>
          </div>

          <div className='mb-[19.36px] bg-white grid grid-cols-5 gap-5 items-center  rounded-[21.53px] h-[255.13px] px-4 py-4'>
            {topInterest.map((topInt) => (
              <Product key={topInt.id} src={topInt.src}>
                <ProductInfo
                  type={topInt.type}
                  model={topInt.model}
                  amount={topInt.amount}
                />
              </Product>
            ))}
          </div>

          <div className='mb-2.5 flex justify-between items-center'>
            <Text className='font-bold text-base tracking-tight text-[#292D32]'>
              Popular Brands
            </Text>

            <span className='flex items-center cursor-pointer inline-block'>
              <Text
                variant='paragraph_3'
                className='text-[#F4B183] font-bold mr-2'
              >
                View all
              </Text>
              <Image src={Vector3} alt='vector' />
            </span>
          </div>

          <div className='mb-[19.36px] bg-white grid grid-cols-5 gap-5 items-center  rounded-[21.53px] px-4 py-4 h-[176px]'>
            {popularBrands.map((popularBrand) => (
              <Product key={popularBrand.id} src={popularBrand.src} />
            ))}
          </div>

          <div className='mb-2.5 flex justify-between items-center'>
            <Text className='font-bold text-base tracking-tight text-[#292D32]'>
              Latest Model
            </Text>

            <span className='flex items-center cursor-pointer inline-block'>
              <Text
                variant='paragraph_3'
                className='text-[#F4B183] font-bold mr-2'
              >
                View all
              </Text>
              <Image src={Vector3} alt='vector' />
            </span>
          </div>

          <div className='mb-[19.36px] bg-white grid grid-cols-5 gap-5 items-center px-4 py-4 rounded-[21.53px] h-[255.13px]'>
            {latestModel.map((latestMod) => (
              <Product key={latestMod.id} src={latestMod.src}>
                <ProductInfo
                  type={latestMod.type}
                  model={latestMod.model}
                  amount={latestMod.amount}
                />
              </Product>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default withAuth(products_buy)
