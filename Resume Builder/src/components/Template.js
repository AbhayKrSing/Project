import React,{useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser';
import Transitions from './Transition'
import Editform from './Editform'

const Template = (props) => {
  // const navigate=useNavigate()
  useEffect(() => {
    if(!props.template){
      props.settemplate(parse(localStorage.getItem('page')))
    
    }
    else{  
      localStorage.setItem('page', document.getElementsByClassName('template')[0].innerHTML)
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
