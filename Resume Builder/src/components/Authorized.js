import React, { useState, useEffect } from 'react'
import Resume from './Resume_template/Resume'
import Resume2 from './Resume_template/Resume2'
import Resume3 from './Resume_template/Resume3'
import { useNavigate } from "react-router-dom";
import Transitions from './Transition'
import Getuser from './Getuser'
const Authorized = (props) => {

  const navigate = useNavigate();
  const [condition, setcondition] = useState(true)
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/')
    }

    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    fetch('http://localhost:5000/user/fetchUserData', {
      method: 'POST',
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    }).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
      props.setedit({ name: data.Name, email: data.Email, work: data.Work, phone: data.Phone, Address: data.Address, website: data.Website, summary: data.Summary, education: data.Education, skills: data.skills, pic: data.pic })
    })


  }, [])
  const handleclick = (no) => {
    navigate(`/auth/resume` + no)
    setcondition(false)
  }
  return (<>
    <Transitions>

      {condition && <div className='auth'>
        <Getuser />
        <h1 className='text-center p-2'>Select template</h1>

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <Resume edit={props.edit} setedit={props.setedit} condition={condition} handleclick={handleclick} createPDF={props.createPDF} />
            </div>
            <div className="carousel-item" >
              <Resume2 edit={props.edit} setedit={props.setedit} condition={condition} handleclick={handleclick} createPDF={props.createPDF} />

            </div>
            <div className="carousel-item" >
              <Resume3 edit={props.edit} setedit={props.setedit} condition={condition} handleclick={handleclick} createPDF={props.createPDF} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-pill" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-pill" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>}
    </Transitions>
  </>
  )
}

export default Authorized
