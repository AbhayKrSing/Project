import React from 'react'
import logo from './loader.gif'
const Spinner =()=> {

    return (
      <div className='text-center d-flex align-items-center justify-content-center vh-100' style={{height:'100vh'}}>
        <img width={100} className='img-fluid' src={logo} alt="loading..." />
      </div>
    )
  
}
export default Spinner
