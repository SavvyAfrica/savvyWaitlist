import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Text } from '../typography/typography'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Do something with the input value here
    setInputValue({
      name: '',
      email: '',
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='fixed inset-0 z-50 overflow-y-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='absolute inset-0 bg-black opacity-50 blur-0' />
          <motion.div
            className='relative flex items-center justify-center'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className='absolute top-12 rounded-[12px] shadow-xl w-[900px] h-[628px] bg-white'
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              transition={{ duration: 0.2 }}
            >
              <div className='grid grid-cols-2 h-full'>
                <motion.div
                  className='h-full '
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className=' h-full flex justify-center items-center flex-col'>
                    <div className='flex justify-center items-center flex-col mb-[30px]'>
                      <div>
                        <Image
                          src={'/blueIcon.svg'}
                          alt=''
                          height={80}
                          width={80}
                        />
                      </div>
                      <Text
                        variant='home_heading_4_32px'
                        className={`font-extrabold lg:text-[24px] text-[24px] w-full 
                sm:mx-0 mx-auto text-center`}
                      >
                        Join The Waitlist
                      </Text>
                      <Text
                        variant='paragraph_3'
                        className='font-normal text-center text-[#A6A6A6]'
                      >
                        Be the first to know once we go live!
                      </Text>
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      className='flex flex-col items-center justify-center'
                    >
                      <input
                        type='text'
                        id='inputField'
                        // value={inputValue}
                        // onChange={(e) => setInputValue(e.target.value)}
                        className='w-[279px] h-[36px] p-4 border rounded-md mb-4 bg-white text-sm outline-none'
                        placeholder='Enter your name here'
                      />
                      <input
                        type='text'
                        id='inputField'
                        // value={inputValue}
                        // onChange={(e) => setInputValue(e.target.value)}
                        className='h-[36px] p-4 border rounded-md mb-4 bg-white text-sm outline-none w-[279px]'
                        placeholder='Enter your email address'
                      />
                      <button
                        type='submit'
                        className='bg-[#00B0F0] text-white rounded-md px-4 py-2 w-[279px]'
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </motion.div>
                <motion.div
                  className='bg-[#ccf0fc] h-full rounded-r-xl '
                  //    initial={{ opacity: 0 }}
                  //    animate={{ opacity: 1 }}
                  //    exit={{ opacity: 0 }}
                  //    transition={{ delay: 0.2 }}
                >
                  <div
                    className='w-full h-[40px] flex justify-end items-end cursor-pointer'
                    onClick={onClose}
                  >
                    <p className='text-[#777272] font-bold text-[20px] pr-3'>
                      X
                    </p>
                  </div>
                  <div className='flex items-center justify-center h-[calc(100%-40px)]'>
                    <div>
                      <Image
                        src={'/girl.png'}
                        alt=''
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CustomModal
