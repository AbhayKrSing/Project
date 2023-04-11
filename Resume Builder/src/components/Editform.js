import React, { useEffect } from 'react'

const Editform = (props) => {
   let {edit,setedit}=props
    useEffect(() => {   
            let copy=edit
           setedit(copy);
        // eslint-disable-next-line
    }, [edit])


    const handlechange = (e) => {
        setedit({ ...edit, [e.target.name]: e.target.value })
        // let deepCopyObj ={...a};
        // // deepCopyObj= JSON.parse(JSON.stringify(deepCopyObj))  // same as  let deepCopyObj ={...a};
        // props.setedit(deepCopyObj)
    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" onChange={handlechange} name='name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" onChange={handlechange} name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputWork1" className="form-label">Work</label>
                    <input type="text" className="form-control" id="exampleInputWork1" onChange={handlechange} name='work' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone1" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPhone1" onChange={handlechange} name='phone' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
                    <input type="address" className="form-control" id="exampleInputAddress1" onChange={handlechange} name='Address' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputWebsite1" className="form-label">Website</label>
                    <input type='url' className="form-control" id="exampleInputUrl1" onChange={handlechange} name='website' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress1" className="form-label">Summary</label>
                    <input type='address' className="form-control" id="exampleInputAddress1" onChange={handlechange} name='summary' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEducation1" className="form-label">Education</label>
                    <input type='text' className="form-control" id="exampleInputEducation1" onChange={handlechange} name='education' />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputSkills1" className="form-label">Skills</label>
                    <input type='text' className="form-control" id="exampleInputSkils1" onChange={handlechange} name='skills' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Editform
