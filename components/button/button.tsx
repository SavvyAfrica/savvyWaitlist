import React from 'react'
import { IButton } from '../../type/type'
import Spinner from '../Spinner/Spinner'

export const Button = (props: IButton) => {
  const { className, children, isLoading, onClick } = props

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center'>
          <Spinner />
        </div>
      ) : (
        <button
          className={`hover:scale-95 transition-all ease-in flex items-center justify-center ${className}`}
          onClick={onClick}
          disabled={isLoading}
        >
          {children}
        </button>
      )}
    </>
  )
}
