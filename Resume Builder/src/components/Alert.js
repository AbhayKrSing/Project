import React from 'react'

const Alert = (props) => {
    const handleclick = () => {
        props.setcondition(false)
    }
    setTimeout(() => {
       handleclick()
    }, 3000)


    return (
        <React.Fragment>
            <div className='alert-2'>
                {props.condition && <div className={`alert alert-${props.color} alert-dismissible fade show`} role="alert">
                    <strong>{props.action}</strong>&ensp;{props.message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handleclick}></button>
                </div>}

            </div>
        </React.Fragment>
    )
}

export default Alert
