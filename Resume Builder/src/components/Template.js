import React from 'react'
import Transitions from './Transition'
const Template = (props) => {
  return (
    <Transitions>
    <div className='template'>
        {props.template}
    </div>
    </Transitions>
  )
}

export default Template
