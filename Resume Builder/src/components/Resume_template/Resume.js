import React,{useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import Editform from '../Editform'
import Transitions from '../Transition'
const Resume = (props) => {
  const { name, email, work, phone, Address, education, skills } = props.edit
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token')){
        navigate('/')   
    }
     // eslint-disable-next-line
  },[])

  return (
    <>
    <Transitions>
      <div id='after_clicked' className={!props.condition?'after_click':''}>
        <div className={`${props.condition?'resume-1':'resume-2'} container-fluid mt-1`} >
          <div className="row" onClick={props.condition?()=>{props.handleclick('')}:()=>{}}>
            <div className="col-lg-8 mx-auto">
              <h1 className="text-center mb-5">{name}</h1>
              <h2 className="mb-4">Personal Information</h2>
              <p><strong>Email:</strong> {email}</p>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>Address:</strong> {Address}</p>
              <h2 className="mb-4 mt-5">Education</h2>
              <ul>
                <li><strong>{education}</strong>, XYZ University, Anytown USA</li>
                <li><strong>{education}</strong>, ABC University, Anytown USA</li>
              </ul>
              <h2 className="mb-4 mt-5">Work Experience</h2>
              <div className="media">
                <img src="https://via.placeholder.com/64" className="align-self-start mr-3" alt="..." />
                <div className="media-body">
                  <h5 className="mt-0">{work}, XYZ Company</h5>
                  <p>{skills}</p>
                  <p>Collaborated with cross-functional teams to deliver high-quality software products.</p>
                </div>
              </div>
              <div className="media mt-4">
                <img src="https://via.placeholder.com/64" className="align-self-start mr-3" alt="..." />
                <div className="media-body">
                  <h5 className="mt-0">Systems Analyst, ABC Corporation</h5>
                  <p>Designed and implemented computer systems for various clients.</p>
                  <p>Provided technical support and troubleshooting to clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='m-5'>
        {!props.condition && <Editform edit={props.edit} setedit={props.setedit} />}
        </div>
      </div>
      </Transitions>
    </>
  )
}

export default Resume
