import Link from 'next/link'
import React from 'react'
import Profile from '../../../assets/png/profile.png'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { Text } from '../../../components/typography/typography'
import Image from 'next/image'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import DashboardLayout from '../../../components/DashboardLayout/DashboardLayout'
import { useGlobalContext } from '../../../global/GlobalContext'


function messages() {
    const { showNav, setShowNav } = useGlobalContext();

  return (
    <>
        <DashboardLayout>
            <div className="w-full flex justify-between items-start">
                <div>
                    <div className="lg:hidden -translate-x-1">
                        <HiOutlineBars3BottomLeft 
                            className='h-8 w-8 cursor-pointer text-gray-700' 
                            onClick={() => setShowNav(!showNav)} 
                        />
                    </div>
                
                    <div className="w-auto lg:mt-0 mt-7">
                        <Text className='font-bold text-[#292d32] lg:text-[30px] sm:text-2xl text-sm'>Messages & Notifications</Text>
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
                            <a className='inline-block flex w-full justify-center items-center'>
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
        </DashboardLayout>
    </>
  )
}

export default messages







// import { useState } from 'react'
// import { Tab } from '@headlessui/react'

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   let [categories] = useState({
//     Recent: [
//       {
//         id: 1,
//         title: 'Does drinking coffee make you smarter?',
//         date: '5h ago',
//         commentCount: 5,
//         shareCount: 2,
//       },
//       {
//         id: 2,
//         title: "So you've bought coffee... now what?",
//         date: '2h ago',
//         commentCount: 3,
//         shareCount: 2,
//       },
//     ],
//     Popular: [
//       {
//         id: 1,
//         title: 'Is tech making coffee better or worse?',
//         date: 'Jan 7',
//         commentCount: 29,
//         shareCount: 16,
//       },
//       {
//         id: 2,
//         title: 'The most innovative things happening in coffee',
//         date: 'Mar 19',
//         commentCount: 24,
//         shareCount: 12,
//       },
//     ],
//     Trending: [
//       {
//         id: 1,
//         title: 'Ask Me Anything: 10 answers to your questions about coffee',
//         date: '2d ago',
//         commentCount: 9,
//         shareCount: 5,
//       },
//       {
//         id: 2,
//         title: "The worst advice we've ever heard about coffee",
//         date: '4d ago',
//         commentCount: 1,
//         shareCount: 2,
//       },
//     ],
//   })

//   return (
//     <div className="w-full max-w-md px-2 py-16 sm:px-0">
//       <Tab.Group>
//         <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
//           {Object.keys(categories).map((category) => (
//             <Tab
//               key={category}
//               className={({ selected }) =>
//                 classNames(
//                   'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
//                   'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
//                   selected
//                     ? 'bg-white shadow'
//                     : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
//                 )
//               }
//             >
//               {category}
//             </Tab>
//           ))}
//         </Tab.List>
//         <Tab.Panels className="mt-2">
//           {Object.values(categories).map((posts, idx) => (
//             <Tab.Panel
//               key={idx}
//               className={classNames(
//                 'rounded-xl bg-white p-3',
//                 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
//               )}
//             >
//               <ul>
//                 {posts.map((post) => (
//                   <li
//                     key={post.id}
//                     className="relative rounded-md p-3 hover:bg-gray-100"
//                   >
//                     <h3 className="text-sm font-medium leading-5">
//                       {post.title}
//                     </h3>

//                     <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
//                       <li>{post.date}</li>
//                       <li>&middot;</li>
//                       <li>{post.commentCount} comments</li>
//                       <li>&middot;</li>
//                       <li>{post.shareCount} shares</li>
//                     </ul>

//                     <a
//                       href="#"
//                       className={classNames(
//                         'absolute inset-0 rounded-md',
//                         'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
//                       )}
//                     />
//                   </li>
//                 ))}
//               </ul>
//             </Tab.Panel>
//           ))}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   )
// }