type SmallLoaderProps = {
  size: number
  thickness: number
  color?: string
  className?: string
}

export default function SmallLoader({
  size,
  thickness,
  color,
  className,
}: SmallLoaderProps) {
  return (
    <div
      style={{
        width: `${size ? size : 30}px`,
        height: `${size ? size : 30}px`,
        borderRadius: '100%',
        border: `${thickness ? thickness : 2}px solid ${
          color ? color : 'white'
        }`,
        borderTop: `${thickness ? thickness : 2}px solid transparent`,
      }}
      className={`rotate ` + className}
    ></div>
  )
}
