import React from 'react'
import Transitions from './Transition'
import Editform from './Editform'
const Template = (props) => {
  return (
    <Transitions>
      <div className='d-flex'>
        <div className='template'>
          {props.template}
        </div>
        <div className='w-50 m-5'>
          <h1>Fill information</h1>
          <Editform /></div>
        </div >
    </Transitions>
    
  )
}

export default Template
