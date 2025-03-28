import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <div>Error 404</div>
      <Link to="/" className='block text-blue-400'>Home From Link</Link>
      <a href="/">Home From a</a>
    </>
    
  )
}

export default ErrorPage