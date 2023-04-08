import React from 'react'
import Resume from './Resume'

const Authorized = () => {
  return (<>
    <div className='auth'>
      <h1 className='text-center'>Select template</h1>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Resume/>      
          </div>
          <div className="carousel-item">
            <img src="https://th.bing.com/th/id/R.14692498181e6bdfe489d518f35b5e10?rik=IznoVeXPefr6WQ&riu=http%3a%2f%2fi.ytimg.com%2fvi%2fZADf8p5-c2s%2f0.jpg&ehk=Nwg8NjOZvCbpc%2bQpe6fFKkQM5FxuZiPH0BOYLBMKFB4%3d&risl=&pid=ImgRaw&r=0" className="d-block slider-img mx-auto" alt="img" />
          </div>
          <div className="carousel-item">
            <img src="https://th.bing.com/th/id/OIP.TA-__fSyGOWGEo_Qc_tYEAHaEU?pid=ImgDet&w=1024&h=597&rs=1" className="d-block slider-img mx-auto" alt="img" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  </>
  )
}

export default Authorized
