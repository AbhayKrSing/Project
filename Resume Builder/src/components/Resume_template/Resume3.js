import React from 'react'
import { useNavigate } from "react-router-dom"
const Resume3 = (props) => {
  const navigate = useNavigate();
  const { name,  work,  Address, summary, education, skills } = props.edit


    const gototemplate=()=>{
     props.settemplate(<div className="resume-2 container-fluid p-5">
     <div className="row" onClick={gototemplate}>
         <div className="col-lg-4">
             <div className="text-center">
                 <img src="https://via.placeholder.com/150" alt="profile" className="rounded-circle mb-3"/>
                 <h2 className="mb-2">{name}</h2>
                 <p className="mb-0">{work}</p>
                 <p className="text-muted">{Address}</p>
                 <ul className="list-inline mb-0">
                     {/* <li className="list-inline-item"><a href="#">LinkedIn</a></li>
                     <li className="list-inline-item"><a href="#">GitHub</a></li>
                     <li className="list-inline-item"><a href="#">Website</a></li> */}
                 </ul>
             </div>
         </div>
         <div className="col-lg-8">
             <h2 className="mb-4">Summary</h2>
             <p className="lead mb-4">{summary}</p>
             <h2 className="mb-4">Education</h2>
             <div className="media mb-4">
                 <img src="https://via.placeholder.com/50" alt="university logo" className="align-self-center mr-3"/>
                 <div className="media-body">
                     <h5 className="mt-0 mb-1">{education}</h5>
                     <p className="font-weight-bold">University of California, Berkeley</p>
                     <p><em>August 20XX - May 20XX</em></p>
                     <p>Relevant courses: Algorithms, Data Structures, Computer Networks, Database Systems</p>
                 </div>
             </div>
             <h2 className="mb-4">Experience</h2>
             <div className="media mb-4">
                 <img src="https://via.placeholder.com/50" alt="company logo" className="align-self-center mr-3"/>
                 <div className="media-body">
                     <h5 className="mt-0 mb-1">Full-Stack Web Developer</h5>
                     <p className="font-weight-bold">ABC Corporation</p>
                     <p><em>June 20XX - Present</em></p>
                     <ul>
                         <li>Develop and maintain scalable web applications using React, Node.js, and SQL.</li>
                         <li>Collaborate with cross-functional teams to gather requirements and define project scope.</li>
                         <li>Optimize application performance and ensure code quality through testing and code reviews.</li>
                         <li>Mentor junior developers and facilitate knowledge sharing among team members.</li>
                     </ul>
                 </div>
             </div>
             <div className="media mb-4">
                 <img src="https://via.placeholder.com/50" alt="company logo" className="align-self-center mr-3"/>
                <div className="media-body">
                     <h5 className="mt-0 mb-1">Front-End Web Developer</h5>
                     <p className="font-weight-bold">XYZ Company</p>
                     <p><em>May 20XX - June 20XX</em></p>
                     <ul>
                         <li>Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.</li>
                         <li>Collaborated with UX designers to create visually appealing and intuitive web applications.</li>
                         <li>Integrated web applications with APIs and third-party services.</li>
                         <li>Conducted user testing and incorporated feedback to improve the user experience.</li>
                     </ul>
                 </div>
             </div>
             <h2 className="mb-4">Skills</h2>
             <ul className="list-inline">
             <div className="row">
                        <div className="col-md-6">
                            <h5>Programming Languages</h5>
                            <ul>
                                <li>{skills}</li>
                                <li>{skills}</li>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>Spring</li>
                                <li>{skills}</li>
                                <li>Django</li>
                                <li>AngularJS</li>
                            </ul>
                        </div>
                    </div>
             </ul>
         </div>
     </div>
 </div>)
     navigate('/template')
    }
  return (
<>
     <div className="resume-1 container-fluid  mt-1">
        <div className="row" onClick={gototemplate}>
            <div className="col-lg-4">
                <div className="text-center">
                    <img src="https://via.placeholder.com/150" alt="profile" className="rounded-circle mb-3"/>
                    <h2 className="mb-2">John Doe</h2>
                    <p className="mb-0">Software Developer</p>
                    <p className="text-muted">New York, NY</p>
                    <ul className="list-inline mb-0">
                        {/* <li className="list-inline-item"><a href="#">LinkedIn</a></li>
                        <li className="list-inline-item"><a href="#">GitHub</a></li>
                        <li className="list-inline-item"><a href="#">Website</a></li> */}
                    </ul>
                </div>
            </div>
            <div className="col-lg-8">
                <h2 className="mb-4">Summary</h2>
                <p className="lead mb-4">Results-driven software developer with 5+ years of experience in full-stack web development. Skilled in JavaScript, React, Node.js, Python, and SQL. Passionate about creating scalable and efficient web applications.</p>
                <h2 className="mb-4">Education</h2>
                <div className="media mb-4">
                    <img src="https://via.placeholder.com/50" alt="university logo" className="align-self-center mr-3"/>
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">Bachelor of Science in Computer Science</h5>
                        <p className="font-weight-bold">University of California, Berkeley</p>
                        <p><em>August 20XX - May 20XX</em></p>
                        <p>Relevant courses: Algorithms, Data Structures, Computer Networks, Database Systems</p>
                    </div>
                </div>
                <h2 className="mb-4">Experience</h2>
                <div className="media mb-4">
                    <img src="https://via.placeholder.com/50" alt="company logo" className="align-self-center mr-3"/>
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">Full-Stack Web Developer</h5>
                        <p className="font-weight-bold">ABC Corporation</p>
                        <p><em>June 20XX - Present</em></p>
                        <ul>
                            <li>Develop and maintain scalable web applications using React, Node.js, and SQL.</li>
                            <li>Collaborate with cross-functional teams to gather requirements and define project scope.</li>
                            <li>Optimize application performance and ensure code quality through testing and code reviews.</li>
                            <li>Mentor junior developers and facilitate knowledge sharing among team members.</li>
                        </ul>
                    </div>
                </div>
                <div className="media mb-4">
                    <img src="https://via.placeholder.com/50" alt="company logo" className="align-self-center mr-3"/>
                   <div className="media-body">
                        <h5 className="mt-0 mb-1">Front-End Web Developer</h5>
                        <p className="font-weight-bold">XYZ Company</p>
                        <p><em>May 20XX - June 20XX</em></p>
                        <ul>
                            <li>Designed and implemented responsive user interfaces using HTML, CSS, and JavaScript.</li>
                            <li>Collaborated with UX designers to create visually appealing and intuitive web applications.</li>
                            <li>Integrated web applications with APIs and third-party services.</li>
                            <li>Conducted user testing and incorporated feedback to improve the user experience.</li>
                        </ul>
                    </div>
                </div>
                <h2 className="mb-4">Skills</h2>
                <ul className="list-inline">
                    <li className="list-inline-item"><span className="badge bg-primary">JavaScript</span></li>
                    <li className="list-inline-item"><span className="badge bg-primary">React</span></li>
                    <li className="list-inline-item"><span className="badge bg-primary">Node.js</span></li>
                    <li className="list-inline-item"><span className="badge bg-primary">Python</span></li>
                    <li className="list-inline-item"><span className="badge bg-primary">SQL</span></li>
                    <li className="list-inline-item"><span className="badge bg-primary">HTML</span></li>
                    <li className="list-inline-item"><span className="badge bg-primary">CSS</span></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Resume3
