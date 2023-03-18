import React, { useCallback, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import DashboardLayout from '../../../../components/DashboardLayout/DashboardLayout'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import { useAppStore } from '../../../../global/store'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { Text } from '../../../../components/typography/typography'
import { MdOutlineShoppingCart } from 'react-icons/md'
import Link from 'next/link'
import Image from 'next/image'
import { GrStatusGood } from 'react-icons/gr'
import { Button } from '../../../../components/button/button'
import iphone13pro from '../../../../assets/png/iphone13promax.png'
import cameraSystem1 from '../../../../assets/png/camera_system1.png'
import cameraSystem2 from '../../../../assets/png/camera_system2.png'
import DashboardProfileDetails from '../../../../components/DashboardProfileDetails/DashboardProfileDetails'
import { userService } from '../../../../services'
import { withAuth } from '../../../../components/views/protectedRoute'
import { Tab } from '@headlessui/react'
import SkeletonLoader from '../../../../helpers/skeletonLoader'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

function productsRentDetails() {
  const { showNav, setShowNav } = useAppStore()

  const router = useRouter()
  const { details } = router.query

  console.log(details)

  const [selected, setSelected] = useState('For 2 Weeks')

  const renderIcon = useCallback((element: React.ReactNode) => {
    if (element) {
      return <GrStatusGood className='h-4 w-4 ml-auto' />
    }
  }, [])

  const buyDetailsData = [
    'For 2 Weeks',
    'For 1 month',
    'For 3 months',
    'For 6 months',
  ]

  const [count, setCount] = React.useState<number>(1)
  const inc = () => {
    setCount(count + 1)
  }

  const dec = () => {
    setCount(count - 1)

    if (count === 1) {
      setCount(1)
    }
  }

  // Initializing the set data states
  const [productsDetailsData, setProductsDetailsData] = useState<any>([])
  const [isLoading, setIsLoading] = useState(false)

  // Initializing the error states
  const [error, setError] = useState<Error | null>(null)

  // //Getting all the products
  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await userService.getAll(`products/${details}`)

      setProductsDetailsData(response)

      setIsLoading(false)
    } catch (error) {
      setError(new Error((error as Error).message))
    } finally {
      setIsLoading(false)
    }
  }

  const [currentSubject, setCurrentSubject] = useState<any>()
  useEffect(() => {
    // Getting current logged in user
    const subject = userService.userValue

    if (subject !== undefined) {
      setCurrentSubject(subject)
    }

    fetchData()
  }, [])

  let [categories] = useState({
    Overview: [
      {
        id: 1,
        children: (
          <>
            <span className=''>
              15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds
              shallow depth of field and shifts focus automatically in your
              videos Advanced dual-camera system with 12MP Wide and Ultra Wide
              cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby
              Vision HDR recording 12MP TrueDepth front camera with Night mode,
              4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast
              performance Up to 19 hours of video playback Durable design with
              Ceramic Shield Industry-leading IP68 water resistance iOS 15 packs
              new features to do more with iPhone than ever before Supports
              MagSafe accessories for easy attachment and faster wireless
              charging
            </span>
          </>
        ),
      },
    ],
    Specifications: [
      {
        id: 1,
        children: (
          <>
            <span className=''>
              15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds
              shallow depth of field and shifts focus automatically in your
              videos Advanced dual-camera system with 12MP Wide and Ultra Wide
              cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby
              Vision HDR recording 12MP TrueDepth front camera with Night mode,
              4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast
              performance Up to 19 hours of video playback Durable design with
              Ceramic Shield Industry-leading IP68 water resistance iOS 15 packs
              new features to do more with iPhone than ever before Supports
              MagSafe accessories for easy attachment and faster wireless
              charging
            </span>
          </>
        ),
      },
    ],
    Accessories: [
      {
        id: 1,
        children: (
          <>
            <span className=''>
              15 cm (6.1-inch) Super Retina XDR display Cinematic mode adds
              shallow depth of field and shifts focus automatically in your
              videos Advanced dual-camera system with 12MP Wide and Ultra Wide
              cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby
              Vision HDR recording 12MP TrueDepth front camera with Night mode,
              4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast
              performance Up to 19 hours of video playback Durable design with
              Ceramic Shield Industry-leading IP68 water resistance iOS 15 packs
              new features to do more with iPhone than ever before Supports
              MagSafe accessories for easy attachment and faster wireless
              charging
            </span>
          </>
        ),
      },
    ],
  })

  return (
    <div>
      <DashboardLayout>
        <div className='w-full pt-9 pb-16 flex justify-between items-start'>
          <div>
            <div className='lg:hidden -translate-x-1'>
              <HiOutlineBars3BottomLeft
                className='h-8 w-8 cursor-pointer text-gray-700'
                onClick={() => setShowNav(!showNav)}
              />
            </div>

            <div className='w-auto lg:mt-0 mt-7 flex flex-row items-center'>
              <IoArrowBackCircleOutline
                className='text-2xl pt-1 cursor-pointer'
                onClick={() => router.back()}
              />
              <Text className='font-bold ml-2.5 text-[#292d32] lg:text-[30px] sm:text-2xl text-sm'>
                Product Details
              </Text>
            </div>
          </div>

          <div className='flex md:flex-row flex-row-reverse items-center'>
            <div className='md:mr-5 mr-0 md:ml-0 ml-2.5 lg:mr-8 cursor-pointer text-gray-700 bg-white rounded-full'>
              {/* <Link href=''> */}
              <MdOutlineShoppingCart className='sm:h-10 h-[25px] sm:w-10 w-[25px] sm:p-2 p-1' />
              {/* </Link> */}
            </div>

            <DashboardProfileDetails currentSubject={currentSubject} />
          </div>
        </div>

        {isLoading ? (
          <div
            className={`w-full bg-white rounded-[20px] pt-[22px] pb-[27px] sm:pl-[22px] pl-[16px] 
            xl:pr-[60px] sm:pr-[22px] pr-[16px] mb-5`}
          >
            <SkeletonLoader width='100%' height='400px' borderRadius='20px' />
          </div>
        ) : (
          <div
            className={`w-full bg-white rounded-[20px] pt-[22px] pb-[27px] sm:pl-[22px] pl-[16px] 
              xl:pr-[60px] sm:pr-[22px] pr-[16px] mb-5 flex sm:flex-row flex-col items-start gap-5
              justify-between`}
          >
            <div className='sm:w-1/2 w-full'>
              <div className='h-[427px] bg-[#E6F0FB] rounded-[22px] flex justify-center items-center mb-[21px]'>
                <Image
                  src={iphone13pro}
                  alt='iphone'
                  width={240}
                  height={290}
                  className='rounded-[22px]'
                />
              </div>

              <div className='gap-3 flex items-center xl:justify-between justify-center xl:flex-nowrap flex-wrap'>
                <span className='inline-block w-1/3 h-[112px] bg-[#E6F0FB] rounded-[22px] flex items-end justify-center'>
                  <Image
                    src={cameraSystem2}
                    alt='iphone'
                    width={89}
                    height={90}
                    className=''
                  />
                </span>

                <span className='inline-block w-1/3 h-[112px] bg-[#E6F0FB] rounded-[22px] flex items-center justify-end'>
                  <Image
                    src={cameraSystem1}
                    alt='iphone'
                    width={106}
                    height={25}
                    className=''
                  />
                </span>

                <span className='inline-block w-1/3 h-[112px] bg-[#E6F0FB] rounded-[22px] flex items-end justify-center'>
                  <Image
                    src={cameraSystem2}
                    alt='iphone'
                    width={89}
                    height={90}
                    className=''
                  />
                </span>
              </div>
            </div>

            <div className='sm:w-1/2 w-full'>
              <Text className='font-semibold md:text-2xl text-xl text-[#2F294D]'>
                {productsDetailsData.name}
              </Text>
              <Text className='font-normal text-[14.74px] text-[#2F294D] opacity-50 mb-[20.32px]'>
                Order by 4pm for next day delivery | 1 Year Warranty
              </Text>
              <Text className='font-normal text-[13px] text-[#2F294D] opacity-50 mb-[30px] max-w-full'>
                Select your plan and pay for the first rental period. When your
                rent ends, you can choose to return, upgrade to the latest model
                or continue renting for 24 months to own it.
              </Text>

              <div className='mb-[33.54px] flex flex-col w-full'>
                {buyDetailsData.map((element, index): React.ReactNode => {
                  return (
                    <span
                      key={index}
                      onClick={() => setSelected(element)}
                      className={`inline-block cursor-pointer py-2 pl-2 pr-4 mb-2.5 rounded flex justify-center items-center 
                        ${
                          selected === element
                            ? 'bg-[#E6F0FB]'
                            : 'bg-[#F6F6F6] hover:bg-[#E6F0FB]'
                        }`}
                    >
                      <Text
                        variant='paragraph_4'
                        className='font-semibold text-[#2F294D] mr-auto'
                      >
                        {element}
                      </Text>
                      {selected === element ? renderIcon(element) : null}
                    </span>
                  )
                })}
              </div>

              <div className='flex flex-row justify-between items-center mb-[52px]'>
                <div className=''>
                  <Text className='font-semibold xl:text-[40.54px] md:text-[30px] sm:text-[24px] text-[18px]'>
                    ₦13,000
                  </Text>
                  <Text className='font-medium sm:text-[14.74px] text-[12px] text[#2F294D]'>
                    2 Weeks rent
                  </Text>
                </div>

                <span className='inline-block bg-[#E6F0FB] w-[116px] h-[37px] rounded-[10px] sm:px-3 px-2 py-2 flex items-center justify-center'>
                  <button onClick={dec} className='w-[10px] h-[21px]'>
                    -
                  </button>
                  <input
                    type='number'
                    value={count}
                    readOnly
                    className='inline-block bg-[#E6F0FB] w-[40px] h-[21px] flex justify-center outline-0 text-center mx-auto'
                  />
                  <button onClick={inc} className='w-[10px] h-[21px]'>
                    +
                  </button>
                </span>
              </div>

              <div className='gap-3 flex xl:flex-row flex-col items-center justify-center'>
                <Button className='rounded-lg w-full h-[41px] text-center block bg-[#00B0F0]'>
                  <Text className='text-[14.74px] font-semibold text-[#ffffff] py-[9.5px] px-[50px]'>
                    Rent it Now
                  </Text>
                </Button>

                <Button className='rounded-lg w-full h-[41px] text-center block bg-[#0064D21A]'>
                  <Text className='text-[14.74px] font-semibold text-[#292D32] py-[9.5px] px-[50px]'>
                    Add to Cart
                  </Text>
                </Button>
              </div>
            </div>
          </div>
        )}

        {isLoading ? (
          <div
            className={`w-full flex flex-col items-start bg-white rounded-[20px] 
              md:pl-[36px] sm:pl-[22px] pl-[16px] pb-[22px] pt-[18px] md:pr-[243px] 
              sm:pr-[22px] pr-[16px] mb-5 flex-initial`}
          >
            <SkeletonLoader width='100%' height='200px' borderRadius='20px' />
          </div>
        ) : (
          <div
            className={`w-full flex flex-col items-start bg-white rounded-[20px] 
              md:pl-[36px] sm:pl-[22px] pl-[16px] pb-[22px] pt-[18px] md:pr-[243px] 
              sm:pr-[22px] pr-[16px] mb-5 flex-initial`}
          >
            <Tab.Group>
              <Tab.List className='flex sm:space-x-7 space-x-5'>
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-auto md:text-base sm:text-sm text-xs font-semibold leading-5',
                        selected
                          ? 'text-[#1E1F4B] border-b-2 border-[#00B0f0] border-solid'
                          : 'text-[#1E1F4B] opacity-50'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>

              <Tab.Panels className='mt-5'>
                {Object.values(categories).map((details, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={classNames('rounded-xl bg-white')}
                  >
                    <div className='w-full flex flex-col items-center justify-start'>
                      {details.map((detail, idx) => (
                        <div key={idx} className='w-full'>
                          <Text
                            variant='paragraph_4'
                            className='text-[#2F294D] font-normal not-italic'
                          >
                            {detail.children}
                          </Text>
                        </div>
                      ))}
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        )}

        <div className='w-full  flex sm:flex-row flex-col items-stretch gap-5'>
          <div
            className={`sm:w-3/5 w-full bg-white rounded-[20px] pt-[18px] 
            sm:pl-[27px] pl-[16px] sm:pr-[21.8px] pr-[16px] pb-[24px] flex 
            flex-col items-start justify-start`}
          >
            <Text
              variant='paragraph_1'
              className='font-bold mb-[28.28px] text-[#292D32] not-italic'
            >
              Are you aware?
            </Text>
            <Text
              variant='paragraph_3'
              className='font-normal text-[#2F294D] not-italic'
            >
              That every year since 2019, Africa generates more than 2.9 metric
              tons of electronic waste. When disposed of in open dumpsites, they
              are often limited to crude processing means (for example, smashing
              to break open casings and remove electronic boards, then burning
              the rest of the materials). These methods have devastating impacts
              on your health and the environment. For these reasons, we help you
              reduce electronic waste which is good for the planet.
            </Text>
          </div>

          <div className='sm:w-2/5 w-full bg-white rounded-[20px] flex flex-col items-center justify-center py-[40px] px-[20px]'>
            <Text
              variant='paragraph_1'
              className='font-bold mb-[28.28px] text-[#292D32] not-italic max-w-[192px] text-[24px] text-center mb-[45px] leading-8'
            >
              Get help while you shop Online
            </Text>

            <Button className='rounded-lg h-[41px] text-center block bg-[#00B0F0]'>
              <Text className='text-[14.74px] font-semibold text-[#ffffff] py-[9.5px] px-[50px]'>
                Chat Now
              </Text>
            </Button>
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default withAuth(productsRentDetails)
