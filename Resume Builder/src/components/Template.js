import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Transitions from './Transition'
import Editform from './Editform'
const Template = (props) => {
  const navigate=useNavigate()
  useEffect(() => {
    if(!props.template){
      navigate('/auth')
    }
    // eslint-disable-next-line
  }, [props.template]);


  return (
    <Transitions>
      <div className='d-flex'>
        <div className='template'>
          {props.template}
        </div>
        <div className='w-50 m-5'>
          <h1>Fill information</h1>
          <Editform edit={props.edit} setedit={props.setedit}/></div>
        </div >
    </Transitions>
    
  )
}

export default Template
