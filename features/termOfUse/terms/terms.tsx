import React from 'react'
import { ChevronDown, ChevronRight } from 'react-feather'

function Terms() {

  const data = [
    {
      id: `1`,
      tittle: `User Account`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
    },
    {
      id: `2`,
      tittle: `User Account`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
    },
    {
      id: `3`,
      tittle: `User Account`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
    },
    {
      id: `4`,
      tittle: `User Account`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.`,
    },
  ]

  // const toggleShow = (id: number) => {
  //   if (id === 1) {
  //     setShow(true)
  //   } else {
  //     setShow(false)
  //   }
  // }

  return (
    <div className='w-[60%] flex flex-col justify-center items-center mt-8 border border-[#00B0F0] '>
      {data.map((terms, i) => (
        <InfoItem terms={terms}/>
      ))}
    </div>
  )
}

export default Terms

const InfoItem = ({ terms }: {terms: any}) => {
  const [show, setShow] = React.useState(false)

  return (
    <div className='w-full'>
      <div
        className='flex justify-between w-full px-6 py-3'
        onClick={() => setShow(!show)}
      >
        <div className='flex justify-center items-center '>
          <h1>{terms.tittle}</h1>
        </div>

        <div
          className={`w-[30px] h-[30px] rounded-full flex justify-center items-center ${
            show == true ? 'bg-[#00B0F0]' : 'bg-white'
          }`}
        >
          {show ? (
            <ChevronDown
              size={20}
              color={`${show == true ? 'white' : '#00B0F0'}`}
            />
          ) : (
            <ChevronRight size={20} color={`${show ? 'white' : '#00B0F0'}`} />
          )}
        </div>
      </div>
      <div className='px-6' style={{ display: show ? 'block' : 'none' }}>
        <p className='text-[#A6A6A6] pr-8'>{terms.description}</p>
      </div>
    </div>
  )
}