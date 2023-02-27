import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Get data submitted in request's body.
    const body = req.body
  

    if (
      !body.firstName || 
      !body.lastName || 
      !body.phoneNumber || 
      !body.email || 
      !body.password
    ) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'incomplete data provided' })
    }
  
    // Sends a HTTP success code
    res.status(200).json(
      { data: 
       `${body.firstName} 
        ${body.lastName} 
        ${body.phoneNumber} 
        ${body.email} 
        ${body.password}
      ` 
      })
}