import React from 'react'

const Editform = () => {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputName1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputWork1" className="form-label">Work</label>
                    <input type="text" className="form-control" id="exampleInputWork1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPhone1" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="exampleInputPhone1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputAddress1" className="form-label">Address</label>
                    <input type="address" className="form-control" id="exampleInputAddress1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputWebsite1" className="form-label">Website</label>
                    <input type='url' className="form-control" id="exampleInputUrl1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputAddress1" className="form-label">Summary</label>
                    <input type='address' className="form-control" id="exampleInputAddress1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEducation1" className="form-label">Education</label>
                    <input type='text' className="form-control" id="exampleInputEducation1"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputSkills1" className="form-label">Skills</label>
                    <input type='text' className="form-control" id="exampleInputSkils1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Editform
