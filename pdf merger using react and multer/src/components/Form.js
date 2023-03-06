import React from 'react'

const Form = () => {
    const handlesubmmit = (e) => {
        e.preventDefault()
        // let data = new FormData(e.target)
        // data = data.getAll('files')
        let data = new FormData(e.target)  //Itna hi karne se file or filled form data dono chali ja rhi hai server pe WTF


        //    let datas=data.getAll()     //.get only get one file
        //    console.log(datas)
        //     data.append('files',datas)        //sending form data  or files
        //     data.append('name',"datas")       //just for shake of learning how data.append works
        console.log(data)  //yeh ek form data jise middleware(multer) decode karke use req.files or req.body mey dalta hai.
        fetch('http://localhost:4000/merge', {
            method: 'POST',
            body: data
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
        })

    }
    return (
        <div className="form">
            <div className='w-25 mx-auto'>
                <form className="mb-3" onSubmit={handlesubmmit} encType='multipart/form-data'>
                    <label htmlFor="formFile" className="form-label"></label>
                    {/* <input className="form-control" type="text" id="textfile" name='text' /> */}
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