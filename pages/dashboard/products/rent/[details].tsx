import React from 'react'
import { useRouter } from 'next/router'

function products_rent_details() {
  const router = useRouter()
  const { details } = router.query

  return (
    <div>[details]</div>
  )
}

export default products_rent_details