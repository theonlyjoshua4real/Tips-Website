import React from 'react'
import { useParams } from 'react-router-dom'

const Sports = () => {
    const params = useParams();
    console.log(params)
  return (
    <div>The sport is {params.sport}</div>
    
  )
}

export default Sports