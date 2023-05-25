import React from 'react'

function Alert(props) {
    let capitalize_space = (word) => {
        let A = word.slice(1)
        let B = word[0].toUpperCase()
        word = `${B + A} :`
        return word
    }
    return (<>
        <div style={{height:'8vh'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`} show role="alert">
                <strong>{capitalize_space(props.alert.type)}</strong>{props.alert.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}    {/* new syntax must learn*/}
        </div>
    </>
    )
}

export default Alert