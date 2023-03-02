import React from 'react'
import styles from './SkeletonLoader.module.css'

type SkeletonLoaderProps = {
  width: string
  height: string
  borderRadius?: string
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width,
  height,
  borderRadius = '0',
}) => {
  return (
    <div className={styles.skeleton} style={{ width, height, borderRadius }} />
  )
}

export default SkeletonLoader
