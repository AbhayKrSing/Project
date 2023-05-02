import React, { useState } from 'react'

const Editform = (props) => {
    const { edit, setedit } = props
    const [disable, setdisable] = useState(false)
    const sendPDF = (e) => {
        e.preventDefault()
        props.createPDF()
    }
    const handlechange = (e) => {
        setedit({ ...edit, [e.target.name]: e.target.value })
    }
    const processPhoto = (pics) => {
        setdisable(true)
        // const data = URL.createObjectURL(pics);        //To create URL for an image or file.(imp)
        // setedit({ name: edit.name, email: edit.email, work: edit.work, phone: edit.phone, Address: edit.Address, website: edit.website, summary: edit.summary, education: edit.education, skills: edit.skills, pic: data })
        //adding file into cloudnary
        const data = new FormData()
        data.append('file', pics)      //file key must be there(because there must be file named key used in cloudnary code to save data)
        data.append('upload_preset', 'ChatApp')
        data.append('cloud_name', 'do8whoupu')
        fetch("https://api.cloudinary.com/v1_1/do8whoupu/image/upload", {
            method: 'POST',
            body: data,
        }).then((data) => {
            return data.json()
        }).then((data) => {
            const URL = (data.url).toString()
            console.log(URL)
            setedit({ name: edit.name, email: edit.email, work: edit.work, phone: edit.phone, Address: edit.Address, website: edit.website, summary: edit.summary, education: edit.education, skills: edit.skills, pic: URL })
            setdisable(false)
        })

    }
    const savePDF = async (e) => {
        e.preventDefault()
        try {
            let data = await fetch("http://localhost:5000/user/savepdf", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },
                body: JSON.stringify({
                    User: localStorage.getItem('token'),
                    Name: edit.name,
                    Email: edit.email,
                    Work: edit.work,
                    Phone: Number(edit.phone),
                    Address: edit.Address,
                    Website: edit.website,
                    Summary: edit.summary,
                    Education: edit.education,
                    Skills: edit.skills,
                    pic: edit.pic
                })
            })
            data = await data.json()
            console.log(data)

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <form className='container-fluid'>
                <h1>Fill Information</h1>
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
                <div className="mb-3">
                    <label htmlFor="exampleInputSkills1" className="form-label">Upload Img</label>
                    <input type='file' className="form-control" accept='image/*' id="exampleInputImg" onChange={(e) => { processPhoto(e.target.files[0]) }} />
                </div>

                <button className="btn btn-primary mx-2" onClick={savePDF} disabled={disable}>Save PDF</button>
                <button className="btn btn-primary" disabled={disable} onClick={sendPDF}>Download PDF</button>
            </form>
        </div>
    )
}

export default Editform
