import React from 'react'

const Form = () => {
    const handlesubmmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="form">
            <div className='w-25 mx-auto'>
                <form className="mb-3" action='/merge' method='post' onSubmit={handlesubmmit} encType='multipart/form-data'>
                    <label htmlFor="formFile" className="form-label"></label>
                    <input className="form-control" type="file" multiple id="formFile" name='files' />
                    <button type='submit' className="btn btn-primary" value='upload' >Merge</button>
                </form>
                {/* <form enctype='multipart/form-data' method='POST' action='/merge'>
                <input type='file' name='files' multiple />
                <button type='submit'>Submit</button>
            </form> */}
            </div>
        </div>
    )
}

export default Form