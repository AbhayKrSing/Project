import React from 'react'
import Resume from './Resume_template/Resume'
import Resume2 from './Resume_template/Resume2'
import Resume3 from './Resume_template/Resume3'
import Transitions from './Transition'

const Authorized = (props) => {
  
  return (<>
  <Transitions>
    <div className='auth'>
      <h1 className='text-center p-2'>Select template</h1>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Resume settemplate={props.settemplate} edit={props.edit} setedit={props.setedit}/>      
          </div>
          <div className="carousel-item">
         <Resume2 settemplate={props.settemplate} edit={props.edit} setedit={props.setedit}/>
           
          </div>
          <div className="carousel-item">
          <Resume3 settemplate={props.settemplate} edit={props.edit} setedit={props.setedit}/>
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
    </div>
</Transitions>
  </>
  )
}

export default Authorized
