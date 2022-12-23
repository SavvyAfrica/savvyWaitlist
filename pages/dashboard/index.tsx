import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import Vector1 from '../../assets/png/Vector1.png';
import Vector2 from '../../assets/png/Vector2.png';
import Vector3 from '../../assets/png/Vector3.png';
import Rectangle from '../../assets/png/Rectangle.png';
import Products from '../../assets/png/Products.png';
import Cart from '../../assets/png/empty_cart.png';
import Image from 'next/image';
import { Button } from '../../components/button/button';
import { Text } from '../../components/typography/typography';



function dashboard() {

  return (
    <>
        <Dashboard>
            <section 
                className='w-full flex md:flex-row flex-col h-auto md:h-[156.79px] items-center justify-center gap-3.5 flex-initial mb-3.5'
            >
                <div 
                    className="max-w-full h-full w-full md:w-4/6 bg-white rounded-2xl flex sm:flex-row flex-col sm:items-center items-start justify-center py-8 px-6"
                >
                    <div className="max-w-16 h-16 flex items-center">
                        <Image src={Vector1} alt='vector' />
                    </div>

                    <div className="max-w-xs sm:mr-2.5 mr-0 sm:ml-5 ml-0 sm:my-0 my-6">
                        <p className="text-xl font-medium">Do you know how to complete account set up?</p>
                    </div>

                    <Button className='w-[163px] border border-[#00B0f0] border-solid rounded-3xl py-2 px-4'>Go there</Button>
                </div>

                <div 
                    className="w-2/6 h-full rounded-2xl md:block hidden bg-white" 
                >
                    {/* <Image src={Rectangle} alt='rectangle' className='object-cover' /> */}
                </div>
            </section>

            <section 
                className="w-full h-auto md:h-[340px] flex md:flex-row flex-col items-center justify-center gap-3.5 flex-initial mb-3.5"
            >
                <div 
                    className="max-w-full h-full w-full md:w-4/6 bg-white gap-3.5 rounded-2xl flex items-center justify-start md:justify-center py-8 px-6"
                >
                    <div>
                        <span>
                            <Text variant='paragraph_1' className='font-bold'>Rent A Gadget</Text>
                        </span>

                        <span className="max-w-[269px] inline-block my-6">
                            <Text variant='paragraph_4' className='font-medium text-[#A3AED0]'>
                                Get tech products for less and send it back when your rent is due.
                            </Text>
                        </span>

                        <Button className='bg-[#00B0f0] text-white border border-solid rounded-3xl py-2 px-5'>Rent Now</Button>
                    </div>

                    <div className="max-w-[267.12px] h-[164.53px] gap-3 flex items-center sm:block hidden">
                        <Image src={Products} alt='products' />
                    </div>
                </div>

                <div className="max-w-full w-full md:w-2/6 h-full rounded-2xl bg-white pt-8 pb-6 px-6">
                    <div className="flex items-center justify-start md:justify-center">
                        <div className="flex md:flex-col flex-row-reverse md:items-start justify-between items-center">
                            <div className="w-[68px] h-[68px] bg-[#F6F8FD] rounded-full flex justify-center items-center sm:inline-flex hidden">
                                <Image src={Vector2} alt="Vector" />
                            </div>

                            <div className='md:mr-0 mr-16'>
                                <span className="my-5 block">
                                    <Text variant='paragraph_1' className='font-bold'>Buy A Gadget</Text>
                                </span>

                                <span className="mb-5 max-w-[270px] block">
                                    <Text variant='paragraph_4' className='font-medium text-[#A3AED0]'>
                                        Buy tech products at affordable prices and return for swap, upgrade or sell it off.
                                    </Text>
                                </span>

                                <Button className='bg-[#00B0f0] text-white border border-solid rounded-3xl py-2 px-5'>Buy Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section 
                className="w-full h-auto md:h-[340px] flex md:flex-row flex-col items-center justify-center gap-3.5 flex-initial pb-8"
            >
                <div className="max-w-full h-full w-full md:w-4/6 bg-white rounded-2xl flex justify-center py-8 px-6">
                    <div className="flex flex-col items-start">
                        <div className="flex justify-center w-full mb-9">
                            <Text variant="paragraph_3" className='font-bold text-[#292D32]'>My Saved Items</Text>
                        </div>
                    
                        <div className="flex flex-col items-center">
                            <Image src={Cart} alt='cart' />
                            <Text 
                                variant='paragraph_3' 
                                className='text-[#A3AED0] font-medium mt-8'
                            >
                                Opps! You don’t have any favourites yet
                            </Text>
                        </div>
                    </div>
                </div>

                <div className="max-w-full w-full md:w-2/6 h-full rounded-2xl flex justify-center bg-white py-8 px-6">
                    <div className="flex flex-col items-start">
                        <div className="flex justify-center w-full">
                            <Text variant="paragraph_3" className='font-bold text-[#292D32]'>Recently Viewed</Text>
                        </div>

                        <div className="my-auto"></div>

                        <div className="flex items-center justify-end cursor-pointer w-full">
                            <Text variant='paragraph_3' className='text-[#F4B183] font-bold mr-2'>View all</Text>
                            <Image src={Vector3} alt='vector' />
                        </div>
                    </div>
                </div>
            </section>
        </Dashboard>
    </>
  )
}

export default dashboard;