import React from 'react'
import { useNavigate } from "react-router-dom"

const Resume2 = (props) => {
    const navigate = useNavigate();
    const { name, email, work, phone, Address, website, summary, education, skills } = props.edit

    const gototemplate = () => {
        props.settemplate(
            <div className="resume-2 container-fluid p-5">
                <div className="row justify-content-center" onClick={gototemplate}>
                    <div className="col-lg-8">
                        <div className="text-center mb-5">
                            <h1>{name}</h1>
                            <p className="lead">{work}</p>
                        </div>
                        <hr />
                        <h2 className="section-title mb-4">{phone}</h2>
                        <div className="row mb-5">
                            <div className="col-md-6">
                                <p><strong>Address:</strong> {Address}</p>
                            </div>
                            <div className="col-md-6">
                                <p><strong>Phone:</strong> {phone}</p>
                            </div>
                            <div className="col-md-6">
                                <p><strong>Email:</strong> {email}</p>
                            </div>
                            <div className="col-md-6">
                                <p><strong>Website:</strong>{website}</p>
                            </div>
                        </div>
                        <hr />
                        <h2 className="section-title mb-4">Summary</h2>
                        <p>{summary}</p>
                        <hr />
                        <h2 className="section-title mb-4">Education</h2>
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0 mb-4">
                                    {education}
                                </h5>
                                <p className="font-weight-bold">University of Anytown</p>
                                <p>Graduated May 20XX</p>
                            </div>
                        </div>
                        <hr />
                        <h2 className="section-title mb-4">Experience</h2>
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0">Software Developer</h5>
                                <p className="font-weight-bold">ABC Corporation</p>
                                <p><em>January 20XX - Present</em></p>
                                <ul>
                                    <li>Develop and maintain enterprise-level software applications using Java, Spring, and Hibernate.</li>
                                    <li>Work closely with product owners and project managers to define and implement software requirements.</li>
                                    <li>Collaborate with other developers on the team to write high-quality, maintainable code.</li>
                                    <li>Conduct code reviews and provide constructive feedback to other developers.</li>
                                    <li>Identify and resolve software bugs and performance issues.</li>
                                    <li>Participate in team meetings and contribute to the overall software development process.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0">Software Developer Intern</h5>
                                <p className="font-weight-bold">XYZ Corporation</p>
                                <p><em>May 20XX - August 20XX</em></p>
                                <ul>
                                    <li>{skills}.</li>
                                    <li>{skills}</li>
                                    <li>{skills}</li>
                                    <li>Participated in team meetings and contributed to the overall software development process.</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <h2 className="section-title mb-4">Skills</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Programming Languages</h5>
                                <ul>
                                    <li>Java</li>
                                    <li>C++</li>
                                    <li>Python</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h5>Tools and Frameworks</h5>
                                <ul>
                                    <li>Spring</li>
                                    <li>Hibernate</li>
                                    <li>Django</li>
                                    <li>AngularJS</li>
                                </ul>
                            </div>
                        </div>
                        <hr />

                    </div>
                </div>
            </div>)
        navigate('/template')

    }
    return (
        <div className="resume-1 container-fluid  mt-1">
            <div className="row justify-content-center" onClick={gototemplate}>
                <div className="col-lg-8">
                    <div className="text-center mb-5">
                        <h1>John Doe</h1>
                        <p className="lead">Software Developer</p>
                    </div>
                    <hr />
                    <h2 className="section-title mb-4">Contact Information</h2>
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <p><strong>Address:</strong> 123 Main Street, Anytown USA 12345</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Phone:</strong> (123) 456-7890</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Email:</strong> john.doe@email.com</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Website:</strong> www.johndoe.com</p>
                        </div>
                    </div>
                    <hr />
                    <h2 className="section-title mb-4">Summary</h2>
                    <p>A highly skilled software developer with over 5 years of experience in developing and maintaining enterprise-level software applications. Proficient in Java, C++, and Python, with a strong understanding of software development best practices and agile methodologies. Excellent problem-solving skills and ability to work collaboratively with teams to deliver high-quality software on time and on budget.</p>
                    <hr />
                    <h2 className="section-title mb-4">Education</h2>
                    <div className="media">
                        <div className="media-body">
                            <h5 className="mt-0 mb-4">Bachelor of Science in Computer Science</h5>
                            <p className="font-weight-bold">University of Anytown</p>
                            <p>Graduated May 20XX</p>
                        </div>
                    </div>
                    <hr />
                    <h2 className="section-title mb-4">Experience</h2>
                    <div className="media">
                        <div className="media-body">
                            <h5 className="mt-0">Software Developer</h5>
                            <p className="font-weight-bold">ABC Corporation</p>
                            <p><em>January 20XX - Present</em></p>
                            <ul>
                                <li>Develop and maintain enterprise-level software applications using Java, Spring, and Hibernate.</li>
                                <li>Work closely with product owners and project managers to define and implement software requirements.</li>
                                <li>Collaborate with other developers on the team to write high-quality, maintainable code.</li>
                                <li>Conduct code reviews and provide constructive feedback to other developers.</li>
                                <li>Identify and resolve software bugs and performance issues.</li>
                                <li>Participate in team meetings and contribute to the overall software development process.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="media">
                        <div className="media-body">
                            <h5 className="mt-0">Software Developer Intern</h5>
                            <p className="font-weight-bold">XYZ Corporation</p>
                            <p><em>May 20XX - August 20XX</em></p>
                            <ul>
                                <li>Assisted with the development and testing of software applications using Python and Django.</li>
                                <li>Participated in code reviews and provided feedback on other developers' code.</li>
                                <li>Collaborated with other interns and developers on team projects.</li>
                                <li>Participated in team meetings and contributed to the overall software development process.</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <h2 className="section-title mb-4">Skills</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Programming Languages</h5>
                            <ul>
                                <li>Java</li>
                                <li>C++</li>
                                <li>Python</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h5>Tools and Frameworks</h5>
                            <ul>
                                <li>Spring</li>
                                <li>Hibernate</li>
                                <li>Django</li>
                                <li>AngularJS</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <h2 className="section-title mb-4">References</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Jane Smith</strong></p>
                            <p>Software Development Manager</p>
                            <p>ABC Corporation</p>
                            <p>jane.smith@email.com</p>
                            <p>(123) 456-7890</p>
                        </div>
                        <div className="col-md-6">
                            <p><strong>John Smith</strong></p>
                            <p>Senior Software Developer</p>
                            <p>XYZ Corporation</p>
                            <p>john.smith@email.com</p>
                            <p>(234) 567-8901</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Resume2
