import { useRouter } from 'next/router'
import { useEffect } from 'react'
import jwt from 'jsonwebtoken'

const isAuthenticated = (): boolean => {
  const localValue =
    typeof window !== 'undefined' ? localStorage.getItem('user') : null
  const user = JSON.parse(localValue || '{}')
  // Check if the user is authenticated
  const authToken = user.token // You can use any method to store the auth token
  if (!authToken) {
    // If the auth token doesn't exist, the user is not authenticated
    return false
  }

  try {
    // Try to decode the auth token to get the user information
    const decodedToken: any = jwt.decode(authToken)
    const expirationTime: number = decodedToken.exp * 1000 // Convert the expiration time from seconds to milliseconds
    if (expirationTime < Date.now()) {
      // If the token has expired, the user is not authenticated
      return false
    }

    // If we've made it this far, the user is authenticated
    return true
  } catch (e) {
    console.error(e)
    // If there was an error decoding the token, assume the user is not authenticated
    return false
  }
}

type WithAuthProps<T> = T & {
  // Add any additional props that you want to pass to the wrapped component here
}

export const withAuth = <T extends Record<string, unknown>>(
  WrappedComponent: React.ComponentType<WithAuthProps<T>>
): React.FC<T> => {
  const AuthComponent: React.FC<WithAuthProps<T>> = (
    props: WithAuthProps<T>
  ) => {
    const router = useRouter()

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push('/login') // Redirect to login if not authenticated
      }
    }, [])

    return isAuthenticated() ? <WrappedComponent {...props} /> : null
  }

  return AuthComponent
}

// type ProtectedRouteProps = {}

// const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
//   return <h1>This is a protected route</h1>
// }

// export default withAuth(ProtectedRoute)
