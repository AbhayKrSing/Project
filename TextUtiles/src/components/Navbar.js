import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-light`} style={props.backgroundColorer} >
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode==='light'? 'dark':'light'}`} to="#">{props.titles}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.mode==='light'? 'dark':'light'}`} aria-current="page" to="/">Home</Link>
            </li>


            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='light'? 'dark':'light'}`} to="about">{props.About}</Link>
            </li>
          </ul>
          <div className="form-check form-switch d-md-none">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>props.toggleMode('dark')} />
            <label className={`form-check-label text-${props.mode==='light'? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >Enable {`${props.mode==='light'? 'Dark':'Light'}`} mode</label>
          </div>
        <button className={`btn btn-${props.mode==='primary'?'light':'primary'} d-md-block d-none mx-1 `} style={{width:'2%',height:'5vh'}} onClick={()=>{props.toggleMode('primary')}}></button>
        <button className={`btn btn-${props.mode==='success'?'light':'success'} d-md-block d-none mx-1`} style={{width:'2%',height:'5vh'}} onClick={()=>{props.toggleMode('success')}}></button>
        <button className={`btn btn-${props.mode==='warning'?'light':'warning'} d-md-block d-none mx-1`} style={{width:'2%',height:'5vh'}} onClick={()=>{props.toggleMode('warning')}}></button>
        <button className={`btn btn-${props.mode==='info'?'light':'info'} d-md-block d-none mx-1`} style={{width:'2%',height:'5vh'}} onClick={()=>{props.toggleMode('info')}}></button>

        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  titles: PropTypes.string.isRequired,            //propTypes set data types of passed props
  About: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  titles: 'Set Titles',
  About: 'Set [About]'
};            //defualt props are passed if nothing is passed in props


