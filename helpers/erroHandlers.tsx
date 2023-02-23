import { useState } from 'react'
import Toaster from './toaster'
import axios, { AxiosError, AxiosResponse } from 'axios'

interface handelRequestErrorsProps {
  data: string
}

const handelRequestErrors: React.FC<handelRequestErrorsProps> = ({ data }) => {
  const [toaster, setToaster] = useState<{
    message: string
    type: 'success' | 'error'
  } | null>(null)

  const handleApiError = (response: AxiosResponse<any> | AxiosError<any>) => {
    // let message = 'An error occurred while processing your request.'
    // let type = 'error'
    // if (!response) return null
    // if ('data' in response) {
    //   if (response.status !== (200 || 201)) {
    //     return ''
    //   }
    //   return response.data
    // }
    // return new Error()
    // if (
    //   response &&
    //   (response.status === 400 ||
    //     response.status === 412 ||
    //     response.status === 500)
    // ) {
    //   message = response.data.message
    // } else if (
    //   response &&
    //   (response.status === 200 || response.status === 201)
    // ) {
    //   message = 'Your request was successful.'
    //   type = 'success'
    // }
    // setToaster({ message, type: type as 'success' | 'error' })
  }

  const handleToasterClose = () => {
    setToaster(null)
  }

  // const handleApiRequest = async () => {
  //   try {
  //     const response = await axios.get('/api/my-endpoint')
  //     console.log(response.data)
  //     handleApiError(response)
  //   } catch (e) {
  //     console.log(e)
  //     //   handleApiError(e)
  //   }
  // }

  return (
    <>
      {toaster && (
        <Toaster
          message={toaster.message}
          type={toaster.type}
          onClose={handleToasterClose}
        />
      )}
      {/* <button onClick={handleApiRequest}>Make API request</button> */}
      <p>{data}</p>
    </>
  )
}
