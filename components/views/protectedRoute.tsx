import { useRouter } from 'next/router'
import { useEffect } from 'react'
import AuthChecker from './authChecker'

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
      const user = JSON.parse(localStorage.getItem('user') || '{}') // You can use any method to store the auth token
      const authToken = user.token
      if (!authToken) {
        router.push('/login') // Redirect to login if not authenticated
      }
    }, [router])

    return <AuthChecker /> ? <WrappedComponent {...props} /> : null
  }

  return AuthComponent
}

// type ProtectedRouteProps = {}

// const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
//   return <h1>This is a protected route</h1>
// }

// export default withAuth(ProtectedRoute)
