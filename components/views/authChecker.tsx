import { useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'

const AuthChecker = (): JSX.Element => {
  const [user, setUser] = useState<any>({})

  useEffect(() => {
    let r = typeof window === 'undefined' ? localStorage.getItem('user') : ''
    r = JSON.parse(r || '')
    setUser(r)
  }, [user])

  // Check if the user is authenticated
  const authToken = user.token // You can use any method to store the auth token
  if (!authToken) {
    // If the auth token doesn't exist, the user is not authenticated
    return <div>User not authenticated</div>
  }

  try {
    // Try to decode the auth token to get the user information
    const decodedToken: any = jwt.decode(authToken)
    const expirationTime: number = decodedToken.exp * 1000 // Convert the expiration time from seconds to milliseconds
    if (expirationTime < Date.now()) {
      // If the token has expired, the user is not authenticated
      return <div>User not authenticated</div>
    }

    // If we've made it this far, the user is authenticated
    return <div>User authenticated</div>
  } catch (e) {
    console.error(e)
    // If there was an error decoding the token, assume the user is not authenticated
    return <div>User not authenticated</div>
  }
}

export default AuthChecker
