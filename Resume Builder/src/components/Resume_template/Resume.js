import React from 'react'
import { useNavigate } from "react-router-dom"
const Resume = (props) => {
  const {name,email,work,phone,Address,education,skills}=props.edit
  const navigate = useNavigate();
  const gototemplate = () => {
    props.settemplate(<div className="resume-2 container-fluid p-5">
      <div className="row" onClick={gototemplate}>
        <div className="col-lg-8 mx-auto">
          <h1 className="text-center mb-5">{name}</h1>
          <h2 className="mb-4">{work}</h2>
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
    </div>)
    navigate('/template')
  }
  return (

      <div className="resume-1 container-fluid mt-1">
        <div className="row" onClick={gototemplate}>
          <div className="col-lg-8 mx-auto">
            <h1 className="text-center mb-5">John Doe</h1>
            <h2 className="mb-4">Personal Information</h2>
            <p><strong>Email:</strong> john.doe@email.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Address:</strong> 123 Main Street, Anytown USA</p>
            <h2 className="mb-4 mt-5">Education</h2>
            <ul>
              <li><strong>Bachelor of Science in Computer Science</strong>, XYZ University, Anytown USA</li>
              <li><strong>Master of Science in Information Technology</strong>, ABC University, Anytown USA</li>
            </ul>
            <h2 className="mb-4 mt-5">Work Experience</h2>
            <div className="media">
              <img src="https://via.placeholder.com/64" className="align-self-start mr-3" alt="..." />
              <div className="media-body">
                <h5 className="mt-0">Software Engineer, XYZ Company</h5>
                <p>Developed and maintained software applications using Java and Python.</p>
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
 

  )
}

export default Resume
