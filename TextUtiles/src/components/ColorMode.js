
import React from 'react'

function ColorMode(props) {

    return (
        <><div className="container-fluid text-end" style={{ position: 'fixed', bottom: '40px' }}>
            <button className={`btn btn-light mx-2`} id='button1' style={{ width: '2%', height: '5vh' }} onClick={props.ThemeChanger} ></button>
            <button className={`btn btn-success mx-2`} id='button2' style={{ width: '2%', height: '5vh' }} onClick={props.ThemeChanger} ></button>
            <button className={`btn btn-warning mx-2`} id='button3' style={{ width: '2%', height: '5vh' }} onClick={props.ThemeChanger}></button>
            <button className={`btn btn-info mx-2`} id='button4' style={{ width: '2%', height: '5vh' }} onClick={props.ThemeChanger}></button>
        </div>
        </>
    )
}

export default ColorMode