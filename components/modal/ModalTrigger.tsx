// components/ModalTrigger.tsx
interface TriggerProps {
  onClick: () => void
}

const ModalTrigger: React.FC<TriggerProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className='bg-blue-500 text-white rounded-md px-4 py-2'
    >
      Open Modal
    </button>
  )
}

export default ModalTrigger
