import React from 'react'
import { IButton } from '../../type/type'
import Spinner from '../Spinner/Spinner'

export const Button = (props: IButton) => {
  const { className, children, isLoading, onClick } = props

  return (
    <div className="w-auto flex items-center">
      {isLoading 
        ?
        <span className="block w-full flex items-center justify-center">
          <Spinner /> 
        </span>
        :
        <button
          className={`hover:scale-95 transition-all ease-in flex items-center justify-center ${className}`}
          onClick={onClick}
          disabled={isLoading}
        >
          {children}
        </button>
      }
    </div>
  )
}
