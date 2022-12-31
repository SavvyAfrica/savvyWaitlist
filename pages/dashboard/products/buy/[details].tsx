import React from 'react'
import { useRouter } from 'next/router'

function products_buy_details() {
  const router = useRouter()
  const { details } = router.query

  return (
    <div>[details]</div>
  )
}

export default products_buy_details