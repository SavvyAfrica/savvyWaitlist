import { useState, useEffect } from 'react'
import styles from './Toaster.module.css'

interface ToasterProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

const Toaster: React.FC<ToasterProps> = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, 3000)

    return () => clearTimeout(timeout)
  }, [onClose])

  return (
    <div
      className={`${styles.toaster} ${styles[type]} ${
        isVisible ? styles.visible : ''
      }`}
    >
      <p>{message}</p>
    </div>
  )
}

export default Toaster
