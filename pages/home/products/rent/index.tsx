'use client'
import React, { SetStateAction, useEffect, useState } from 'react'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import DashboardLayout from '../../../../components/DashboardLayout/DashboardLayout'
import { Text } from '../../../../components/typography/typography'
import { GlobalContent } from '../../../../global/store'
import Image from 'next/image'
import { MdOutlineShoppingCart } from 'react-icons/md'
// import Profile from '../../../../assets/png/profile.png'
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
import getConfig from 'next/config'
import axios from 'axios'
import { API_BASE_URL } from '../../../../constant'
import SkeletonLoader from '../../../../helpers/skeletonLoader'

const topInterest = [
  {
    id: 1,
    src: Iphone13promax,
    type: 'iPhone 13 Pro Max',
    model: 'Apple',
    amount: '₦530,500',
  },
  {
    id: 2,
    src: microsoftsurface,
    type: 'Microsoft Surface 2',
    model: 'Microsoft',
    amount: '₦240,500',
  },
  {
    id: 3,
    src: samsunggalaxy,
    type: 'Samsung Galaxy S22',
    model: 'Samsung',
    amount: '₦530,500',
  },
  {
    id: 4,
    src: applewatchseries,
    type: 'Apple Watch Series 6',
    model: 'Apple',
    amount: '₦530,500',
  },
  {
    id: 5,
    src: nokiatablet,
    type: 'Nokia Tablet T267',
    model: 'Nokia',
    amount: '₦530,500',
  },
]

const popularBrands = [
  {
    id: 1,
    src: Apple,
  },
  {
    id: 2,
    src: Apple,
  },
  {
    id: 3,
    src: Apple,
  },
  {
    id: 4,
    src: Apple,
  },
  {
    id: 5,
    src: Apple,
  },
]

const latestModel = [
  {
    id: 1,
    src: Iphone13promax,
    type: 'iPhone 13 Pro Max',
    model: 'Apple',
    amount: '₦530,500',
  },
  {
    id: 2,
    src: applewatchseries,
    type: 'Apple Watch Series 6',
    model: 'Apple',
    amount: '₦530,500',
  },
  {
    id: 3,
    src: applewatchseries,
    type: 'Apple Watch Series 6',
    model: 'Apple',
    amount: '₦530,500',
  },
  {
    id: 4,
    src: applewatchseries,
    type: 'Apple Watch Series 6',
    model: 'Apple',
    amount: '₦530,500',
  },
  {
    id: 5,
    src: applewatchseries,
    type: 'Apple Watch Series 6',
    model: 'Apple',
    amount: '₦530,500',
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
interface Products {
  [x: string]: any
  products: SetStateAction<Products>
  id: number
  name: string
  brand: string
  price: number
  images: { image: string }[]
}
// interface ApiResponse {
//   products: Products[]
// }

function products_rent() {
  // const { showNav, setShowNav } = GlobalContent()
  const [search, setSearch] = useState('')
  const [user, setUser] = useState<any>({})
  // Initializing the set data states
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState(false)

  // Initializing the error states
  const [error, setError] = useState<Error | null>(null)
  //Getting token from local Storage

  // const localValue =
  //   typeof window !== 'undefined' ? localStorage.getItem('user') : null
  // const user = JSON.parse(localValue || '{}')
  // const authToken = user.token // You can use any method to store the auth token
  // const localValue =
  // typeof window !== 'undefined' ? localStorage.getItem('user') : null
  // const user = JSON.parse(localValue || '{}')

  // const token = JSON.parse(localStorage.getItem('token') || '')
  // console.log(`token: ${user.token}`)
  // Search filter function

  // const searchFilter = (array: any[]) => {
  //   return array.filter(
  //     (el: { name: { common: string } }) => el.name.common.toLowerCase().includes(search)
  //   )
  // }

  //Applying our search filter function to our array of countries recieved from the API

  // const filtered = searchFilter(topInterest)

  useEffect(() => {
    let r =
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('user') || '{}')
        : ''

    setUser(r)
  }, [])

  console.log(user.token, 'this is token')

  //Handling the input on our search bar
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSearch(e.target.value)
  }
  //Getting all the products
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get<Products>(`${API_BASE_URL}/products`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      if (response.status === 200 || 201) {
        setLoading(false)
        setData(response.data.products)
      }
      // console.log(response.data, 'This is my products data')
    } catch (error) {
      setError(new Error((error as Error).message))
    }
  }
  useEffect(() => {
    fetchData()
  }, [user])

  console.log(data, 'This is my products data')
  return (
    <>
      <DashboardLayout>
        <div className='w-full pb-16 flex justify-between items-start'>
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
                Renting Product Page
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
                    {/* <Image
                      src={Profile}
                      width='100%'
                      height='100%'
                      alt='profile picture'
                      className='rounded-full h-8 md:mr-4 border-2 border-white shadow-xl'
                    /> */}
                  </span>

                  <div className='md:block hidden ml-3 flex flex-col items-start'>
                    <Text
                      variant='paragraph_4'
                      className='font-semibold text-gray-700'
                    >
                      Karim Andrei
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
          {/* <>
          
          </> */}

          {loading ? (
            <div className=' flex justify-between items-center flex-col space-y-4 w-full bg-white rounded-[21.53px] h-[255.13px] px-4 py-4 overflow-auto'>
              <SkeletonLoader
                width='100%'
                height='30px'
                borderRadius='21.53px'
              />
              <SkeletonLoader
                width='100%'
                height='30px'
                borderRadius='21.53px'
              />
              <SkeletonLoader
                width='100%'
                height='30px'
                borderRadius='21.53px'
              />
              <SkeletonLoader
                width='100%'
                height='30px'
                borderRadius='21.53px'
              />
            </div>
          ) : (
            <div className='mb-[19.36px] bg-white grid grid-cols-5 gap-5 items-center  rounded-[21.53px] px-4 py-4 h-[255.13px]'>
              {data.map(
                (topInt: {
                  id: React.Key | null | undefined
                  images: string[]
                  name:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined
                  brand:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined
                  price:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined
                }) => (
                  <Product key={topInt.id} src={topInt.images[0]}>
                    <ProductInfo
                      type={topInt.name}
                      model={topInt.brand}
                      amount={topInt.price}
                    />
                  </Product>
                )
              )}
            </div>
          )}

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

          <div className='mb-[19.36px] bg-white grid grid-cols-5 gap-5 items-center  rounded-[21.53px] px-4 py-4'>
            {data.map(
              (popularBrand: {
                id: React.Key | null | undefined
                images: string[]
              }) => (
                <Product key={popularBrand.id} src={popularBrand.images[0]} />
              )
            )}
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

          <div className='mb-[19.36px] bg-white grid grid-cols-5 gap-5 items-center  rounded-[21.53px] px-4 py-4'>
            {data.map(
              (topInt: {
                id: React.Key | null | undefined
                images: string[]
                name:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined
                brand:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined
                price:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined
              }) => (
                <Product key={topInt.id} src={topInt.images[0]}>
                  <ProductInfo
                    type={topInt.name}
                    model={topInt.brand}
                    amount={topInt.price}
                  />
                </Product>
              )
            )}
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default withAuth(products_rent)
