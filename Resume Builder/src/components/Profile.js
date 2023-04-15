import React, { useState, useEffect } from 'react'

const Profile = ({ userdata, edit, setedit }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await userdata()
      setedit({Name:data.Name,Email:data.Email})
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <React.Fragment>
      <div className="container-fluid mt-5 w-50 text-center" >
        <div className={`row profile ${isMobile ? '' : 'overflow-hidden'}`}>
          <div className="col-md-4 bg-warning items" style={{ borderRadius: isMobile ? '10px 10px 0 0' : '' }}>
            <div >
              <img src="https://cdn.onlinewebfonts.com/svg/img_266351.png" className='img-fluid' alt="img" srcSet="" width={300} /></div>
          </div>
          <div className="col-md-8 bg-danger items" style={{ borderRadius: isMobile ? '0 0 10px 10px' : '' }}>
            <div> <h1>{edit.Name}</h1>
              <p>{edit.Email}</p>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile
