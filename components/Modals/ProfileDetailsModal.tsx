import React from 'react'
import { BiPlus } from 'react-icons/bi'
import { Button } from '../button/button'
import { Text } from '../typography/typography'

function ProfileDetailsModal({
  currentSubject,
  createObjectURL,
  handleUploadProfileImageToClient,
  handleUploadProfileImageToServer,
}: any) {
  const [showModal, setShowModal] = React.useState(false)

  // Prevents child element from inheriting parent element's onClick
  const handleChildElementClick = (e: any) => {
    e.stopPropagation()
  }

  return (
    <>
      <div
        className='inline-block sm:h-10 h-[25px] sm:w-10 w-[25px] relative'
        onClick={() => setShowModal(true)}
      >
        <span className='inline-block rounded-full cursor-pointer'>
          {currentSubject === null ? (
            <img
              className='absolute object-cover inset-0 h-full w-full rounded-full'
              src={createObjectURL}
              alt='profile'
            />
          ) : (
            <img
              className='absolute object-cover inset-0 h-full w-full rounded-full'
              src={createObjectURL}
              alt='profile'
            />
          )}
        </span>
      </div>

      {showModal ? (
        <>
          <div className='left-0 top-0 overflow-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div
              onClick={(e) => handleChildElementClick(e)}
              className='relative modal__content max-w-[560px] my-6 mx-auto'
            >
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <Text
                    variant='paragraph_1'
                    className='font-bold text-base md:text-xl text-[#0F2137] mr-auto'
                  >
                    Upload photo
                  </Text>
                  <span
                    className='text-[#23262F] ml-auto my-1.5 inline-block text-2xl font-bold hover:cursor-pointer'
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </span>
                </div>

                {/*body*/}
                <form
                  className='p-6'
                  onChange={handleUploadProfileImageToClient}
                  onSubmit={handleUploadProfileImageToServer}
                >
                  <div className='w-full flex flex-col justify-center items-center mb-[40px]'>
                    <div className='block h-[80px] md:h-[130px] w-[80px] md:w-[130px] mb-[15px] relative'>
                      <span className='inline-block rounded-full'>
                        {currentSubject === null ? (
                          <img
                            className='absolute object-cover inset-0 h-full w-full rounded-full'
                            src={createObjectURL}
                            alt='profile'
                          />
                        ) : (
                          <img
                            className='absolute object-cover inset-0 h-full w-full rounded-full'
                            src={createObjectURL}
                            alt='profile'
                          />
                        )}

                        <input
                          type='file'
                          name='file'
                          accept='image/*'
                          title=' '
                          className='absolute inset-0 w-full h-full opacity-0 z-[1] text-[0px] cursor-pointer'
                        />
                      </span>
                    </div>

                    <div className=''>
                      <Text
                        variant='paragraph_1'
                        className='font-bold text-gray-700'
                      >
                        {`${
                          currentSubject === undefined
                            ? 'Guest'
                            : `${currentSubject.firstName} ${currentSubject.lastName}`
                        }`}
                      </Text>
                    </div>
                  </div>

                  <Button className='button w-full rounded-xl font-semibold text-center py-2.5 px-4 bg-[#00B0F0]'>
                    <Text
                      variant='paragraph_4'
                      className='font-bold text-white'
                    >
                      Save
                    </Text>
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className='opacity-30 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  )
}

export default ProfileDetailsModal
