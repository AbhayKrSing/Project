import React from 'react'
import { saveAs } from 'file-saver';
const Download = (props) => {
  const handleclick = async () => {
    let res = await fetch('http://localhost:4000/download', {
      method: 'POST',
    })
    res = await res.blob()
    console.log(res)
    saveAs(res, 'new.pdf')
    props.setcondition(true)
    
     await fetch('http://localhost:4000/delete', {
        method: 'DELETE',
    })
    
 
    
  }
  return (
    <div className='text-center'>
      <button type="button" className="btn btn-primary btn-lg" onClick={handleclick}>Download</button>
    </div>
  )
}

export default Download
