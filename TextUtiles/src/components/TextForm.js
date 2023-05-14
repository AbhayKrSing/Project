import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
    const [text, NewText] = useState("");
   
    let onclickfn_1 = (event) => {
        /* console.clear()
           console.log(event)  //event active happened
           console.log(event.target) */
        event.preventDefault()
        // console.log("Convert button was pressed")
        NewText(text.toUpperCase())
        props.ShowAlert('letter successfully converted', 'success')
    }
    let onclickfn_2 = (event) => {
        /*   console.clear()
           console.log(event)  //event active happened
           console.log(event.target) */
        event.preventDefault()
        // console.log("Convert button was pressed")
        NewText(text.toLowerCase())
        props.ShowAlert('letter successfully converted', 'success')

    }
    let onchangefn = (event) => {
        /*   console.log(event)
           console.log(event.target)
           console.log("change occur") */
        NewText(event.target.value)
    }
    let processor = (event) => {
        if (!/-->/.test(text)) {
            event.preventDefault()
            let arr_Words = text.split(/\s+/).filter((x) => x !== '')
            let obj = {}
            for (let i in arr_Words) {
                if (obj[arr_Words[i]] === undefined) { obj[arr_Words[i]] = 1 }
                else obj[arr_Words[i]]++
            }
            let arr = []
            for (let key in obj) {
                arr.push(`${key}-->${obj[key]}`)
            }
            let str = arr.join('   ')
            NewText(str)
            props.ShowAlert('letter successfully processed', 'success')
        }
        else {
            event.preventDefault()
            NewText('')
            props.ShowAlert('letter successfully processed and showned Before', 'success')
        }


    }
    let Remove_unusualSpaces = (event) => {
        event.preventDefault()
        NewText(text.split(/\s+/).join(" "))
        props.ShowAlert('unusualSpaces successfully removed', 'success')

    }
    let handleCopy=()=>{
        navigator.clipboard.writeText(text)
        props.ShowAlert('letter successfully Copy', 'success')

    }

    return (
        <>
            <div className="container">
                <form className={`container  text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h1 className={`container  text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
                    <textarea name="" className={`form-control  mt-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} style={props.backgroundColorer} id='form-contral' cols="90" rows="10" value={text} onChange={onchangefn}></textarea>
                    <button type="text" disabled={text.split(/\s+/).filter((x) => x !== '').length === 0} style={props.backgroundColorer} className={`btn mt-3 text-${props.mode === 'light' ? 'light' : 'light'} bg-${props.mode==='light'?'primary':''}`} onClick={onclickfn_1}>click to convert text to Uppercase</button>
                    <button type="text" disabled={text.split(/\s+/).filter((x) => x !== '').length === 0} style={props.backgroundColorer} className={`btn mt-3 ms-3 text-${props.mode === 'light' ? 'light' : 'light'} bg-${props.mode==='light'?'primary':''}`} onClick={onclickfn_2}>click to convert text to lowercase</button>
                    <button type='text' disabled={text.split(/\s+/).filter((x) => x !== '').length === 0} style={props.backgroundColorer} className={`btn mt-3 ms-3 text-${props.mode === 'light' ? 'light' : 'light'} bg-${props.mode==='light'?'primary':''}`} onClick={processor}>click only ones to count words</button>
                    <button type='text' disabled={text.split(/\s+/).filter((x) => x !== '').length === 0} style={props.backgroundColorer} className={`btn mt-3 ms-3 text-${props.mode === 'light' ? 'light' : 'light'} bg-${props.mode==='light'?'primary':''}`}>Reload</button>
                    <button type='text' disabled={text.split(/\s+/).filter((x) => x !== '').length === 0} style={props.backgroundColorer} className={`btn mt-3 ms-3 text-${props.mode === 'light' ? 'light' : 'light'} bg-${props.mode==='light'?'primary':''}`} onClick={Remove_unusualSpaces}>Remove unusual spaces</button>
                    <button type='text' disabled={text.split(/\s+/).filter((x) => x !== '').length === 0} style={props.backgroundColorer} className={`btn mt-3 ms-3 text-${props.mode === 'light' ? 'light' : 'light'} bg-${props.mode==='light'?'primary':''}`} onClick={handleCopy}>Copy text</button>

                    {/* <button type='text' disabled={text.split(/\s+/).filter((x) => x !== '').length === 0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} mt-3 ms-3`} onClick={handleCopy}>Copy text</button> */}

                </form>

            </div>
            <div className={`container  text-${props.mode === 'light' ? 'dark' : 'light'}`}> 
                <h2>Text Summary</h2>
                <p>Your words {text.split(/\s+/).filter((element) => element !== '').length} Your character {text.split(/\s+/).filter((element) => element !== '').join('').length}</p>  
            </div>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}> 
                <h4>Time taken to read this words is {0.3 / 100 * text.split(/\s+/).filter((element) => element !== '').join('').length} minutes</h4>
            </div>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Preview</h2>
                <p>{text === '' ? 'Nothing to preview' : text}</p>
            </div>      
        </>
    )
}
TextForm.defaultProps = {
    heading: 'Set Titles',
};
TextForm.propTypes = {
    heading: PropTypes.string.isRequired,            //propTypes set data types of passed props
};
