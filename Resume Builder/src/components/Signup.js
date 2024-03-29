import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const gotoserver = async (e) => {
        try {
            e.preventDefault()
            let data = new FormData(e.target)
            console.log(data)
            const res = await fetch('http://localhost:5000/user/Logup', {
                method: 'POST',
                body: data
            })
            data = await res.json()
            console.log(data)
            if (data.success) {
                localStorage.setItem('token', data.token)
                navigate(`/auth`)
            }
        } catch (error) {
            console.log(error.message)
        }

    }
    return (
        <div className="container d-flex align-items-center">
            <div className='inner_div d-flex align-items-center'>
                <div className='w-50'>  <img src="https://th.bing.com/th/id/R.5cd6aa66b5177259c442e92c72408315?rik=sHYs2g6x%2fXDWLQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbirds%2fbirds_PNG44.png&ehk=5Xj%2f9dQeBcg9ru1OzG7D31hzHkmzG3Dd10zZ7cW4Nio%3d&risl=&pid=ImgRaw&r=0" alt="img" srcSet="" width={600} className='img-fluid' />
                </div>
                <div className='w-50 main-login container-fluid'>
                    <h1>Welcome to builder</h1>
                    <form className='w-75 mx-auto my-5' encType="multipart/form-data" onSubmit={gotoserver}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='Name' />            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" name='Email' />            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword3" name='password' />
                        </div>
                        <button type="submit" className="btn btn-primary mx-2">Signup</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
