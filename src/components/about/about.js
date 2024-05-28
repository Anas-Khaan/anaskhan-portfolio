import './about.css';


export default function About(props) {
    const change_color_theme = (props.theme === 'dark' ? '#fff' : '#0f0e1e')
    return (
        <>

            {/* About-Section */}

            <div className='container about-section mt-4'>
                <div>
                    <h1 className='heading'>Who I am.</h1>
                    <p className='content pb-lg-4'>
                        Hello! 👋 I'm Muhammad Anas, a web developer who loves turning ideas into engaging online experiences. I've got a strong track record of building web applications and specialize in creating websites and apps that help businesses, startups, and professionals thrive. 🚀
                        <br></br><br></br>

                        I focus on writing clean, semantic HTML and using responsive design to make sure websites look great on any device. I'm skilled in JavaScript (ES6+), which lets me create dynamic and interactive user experiences. For more complex projects, I use React for its component-based architecture and state management best practices. I also use Bootstrap to quickly prototype and build user interfaces, ensuring consistency and easy maintenance. Plus, I'm proficient in Git, so I can track my code changes effectively.

                        From start to finish, I'm dedicated to delivering innovative solutions that help your business grow. Whether you want to improve your brand, streamline operations, or expand your reach, I'm here to help.
                        <br></br><br></br>

                        Send me a message 📩 and let's talk about your project.
                    </p>

                </div>

            </div>
            <div className={`horizontal-line-${props.theme}`}></div>


            {/* About-Section */}




            {/* Technologies */}
            <div className="technologies common-styling p-4 p-md-0">
                <div >
                    <h1 className="fw-normal">Technologies</h1>
                    <p className="display-font-weight: 500">I've worked with a range of Programming Languages and web Technologies.</p>
                </div>
                <div className="row gx-0">
                    <div className="col-12 col-md-6">
                        <h3 className="fw-normal">Front-End </h3>
                        <svg fill={`${change_color_theme}`} width="30px" height="30px" viewBox="0 0 32.00 32.00" id="Camada_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" stroke="#bababa" strokeWidth="0.00032" transform="rotate(-45)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path d="M29.7,16c0-1.9-2.2-3.5-5.7-4.5C24.9,8,24.6,5.3,23,4.3C22.6,4.1,22.2,4,21.7,4c-1.5,0-3.5,1.1-5.5,3c-2-1.9-3.9-3-5.5-3 c-0.5,0-0.9,0.1-1.3,0.3C7.9,5.3,7.6,8,8.4,11.5c-3.4,1-5.7,2.7-5.7,4.5c0,1.9,2.2,3.5,5.7,4.5c-0.8,3.5-0.5,6.3,1.1,7.2 c0.4,0.2,0.8,0.3,1.3,0.3c1.5,0,3.5-1.1,5.5-3c2,1.9,3.9,3,5.5,3c0.5,0,0.9-0.1,1.3-0.3c1.6-0.9,1.9-3.7,1.1-7.2 C27.5,19.5,29.7,17.8,29.7,16z M21.7,5.3c0.3,0,0.5,0,0.6,0.2c0.8,0.4,1.1,2,0.8,4.1c-0.1,0.5-0.2,1.1-0.3,1.6 c-1.1-0.3-2.2-0.4-3.5-0.6c-0.7-1-1.4-1.9-2.2-2.7C18.9,6.2,20.6,5.3,21.7,5.3z M19.9,18.1c-0.4,0.7-0.8,1.4-1.3,2 c-0.8,0.1-1.6,0.1-2.4,0.1c-0.8,0-1.6,0-2.4-0.1c-0.4-0.6-0.8-1.3-1.3-2c-0.4-0.7-0.8-1.4-1.1-2.1c0.3-0.7,0.7-1.4,1.1-2.1 c0.4-0.7,0.9-1.4,1.3-2.1c0.8-0.1,1.6-0.1,2.4-0.1c0.8,0,1.6,0,2.4,0.1c0.4,0.6,0.9,1.3,1.3,2.1c0.4,0.7,0.8,1.4,1.1,2.1 C20.7,16.7,20.3,17.4,19.9,18.1z M21.7,17.5c0.3,0.7,0.5,1.4,0.7,2c-0.7,0.2-1.4,0.3-2.1,0.4c0.2-0.4,0.5-0.8,0.7-1.2 C21.3,18.4,21.5,17.9,21.7,17.5L21.7,17.5z M16.2,23.2c-0.5-0.5-1-1.1-1.4-1.7c0.5,0,1,0,1.4,0c0.5,0,1,0,1.4,0 C17.2,22.1,16.7,22.7,16.2,23.2z M12.1,20c-0.7-0.1-1.4-0.2-2.1-0.4c0.2-0.7,0.5-1.4,0.7-2c0.2,0.4,0.4,0.8,0.7,1.2 C11.7,19.2,11.9,19.6,12.1,20L12.1,20z M10.7,14.5c-0.3-0.7-0.5-1.4-0.8-2.1c0.7-0.2,1.4-0.3,2.2-0.4c-0.3,0.4-0.5,0.8-0.8,1.2 C11.2,13.7,11,14.1,10.7,14.5z M16.2,8.8c0.5,0.5,0.9,1.1,1.4,1.6c-0.5,0-0.9,0-1.4,0c-0.5,0-0.9,0-1.4,0 C15.3,9.9,15.8,9.3,16.2,8.8z M21,13.2c-0.3-0.4-0.5-0.8-0.8-1.2c0.8,0.1,1.5,0.2,2.2,0.4c-0.2,0.7-0.5,1.4-0.8,2.1 C21.5,14.1,21.3,13.7,21,13.2z M9.4,9.5c-0.3-2.1,0-3.6,0.8-4.1c0.2-0.1,0.4-0.2,0.6-0.2c1.1,0,2.7,0.9,4.5,2.6 c-0.7,0.8-1.5,1.7-2.2,2.7c-1.2,0.1-2.4,0.3-3.5,0.6C9.5,10.6,9.4,10,9.4,9.5z M7.2,18.7C5.3,17.9,4,16.8,4,16 c0-0.9,1.2-1.9,3.1-2.7c0.5-0.2,1-0.4,1.6-0.5c0.3,1.1,0.7,2.2,1.3,3.3c-0.5,1.1-0.9,2.2-1.2,3.2C8.2,19.1,7.7,18.9,7.2,18.7 L7.2,18.7z M10.1,26.6c-0.8-0.4-1.1-2-0.8-4.1c0.1-0.5,0.2-1.1,0.3-1.7c1.1,0.2,2.2,0.4,3.4,0.5c0.7,1,1.5,1.9,2.2,2.7 c-1.8,1.7-3.4,2.6-4.5,2.6C10.5,26.7,10.3,26.6,10.1,26.6L10.1,26.6z M23.1,22.5c0.3,2.1,0,3.6-0.8,4.1c-0.2,0.1-0.4,0.2-0.6,0.2 c-1.1,0-2.7-0.9-4.5-2.6c0.8-0.8,1.5-1.7,2.2-2.7c1.2-0.1,2.4-0.3,3.4-0.5C22.9,21.4,23,21.9,23.1,22.5L23.1,22.5z M25.3,18.7 c-0.5,0.2-1,0.4-1.6,0.5c-0.3-1-0.7-2.1-1.2-3.2c0.5-1.1,0.9-2.2,1.3-3.3c0.5,0.2,1.1,0.3,1.6,0.5c1.9,0.8,3.1,1.8,3.1,2.7 C28.4,16.8,27.2,17.9,25.3,18.7L25.3,18.7z"></path>
                                    <path d="M16.3,18.5c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5S14.9,18.5,16.3,18.5z"></path>
                                </g>
                            </g>
                        </svg>
                        <p className="fw-normal">Experience with <span className="italic"> Javascript, React.js<br></br> Bootstrap and Sass.</span></p>
                    </div>

                    <div className="col-12 col-md-6">
                        <h3 className="fw-normal">Back-End</h3>
                        <svg fill={`${change_color_theme}`} width="25px" height="25px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#bababa" strokeWidth="0.00032" style={{ margin: 0, padding: 0 }}>
                            <title>database</title>
                            <path d="M4 26.016q0 1.632 1.6 3.008t4.384 2.176 6.016 0.8 6.016-0.8 4.384-2.176 1.6-3.008v-3.392q0 1.632-1.632 2.88t-4.32 1.856-6.048 0.64-6.048-0.64-4.32-1.856-1.632-2.88v3.392zM4 20q0 1.632 1.6 3.008t4.384 2.208 6.016 0.8 6.016-0.8 4.384-2.208 1.6-3.008v-3.36q0 1.6-1.632 2.848t-4.32 1.888-6.048 0.64-6.048-0.64-4.32-1.888-1.632-2.848v3.36zM4 14.016q0 1.632 1.6 3.008t4.384 2.176 6.016 0.8 6.016-0.8 4.384-2.176 1.6-3.008v-3.392q0 1.632-1.632 2.88t-4.32 1.856-6.048 0.64-6.048-0.64-4.32-1.856-1.632-2.88v3.392zM4 8q0 1.632 1.6 3.008t4.384 2.208 6.016 0.8 6.016-0.8 4.384-2.208 1.6-3.008v-1.984q0-1.632-1.6-3.008t-4.384-2.176-6.016-0.832-6.016 0.832-4.384 2.176-1.6 3.008v1.984z"></path>
                        </svg>
                        <p className="fw-normal">Experience with <span className="lead"> Express JS,MongoDB<br></br> and Node.js.</span></p>
                    </div>

                </div>



            </div>
            {/* Technologies */}


            <div className="section-divider-mobile d-lg-none "></div>
            <div className="section-divider d-none d-lg-block" style={{ borderColor: `${change_color_theme}` }}></div>



            {/* Certifications */}
            <div className="certifications common-styling">
                <h1 className="fw-normal text-center text-lg-start">Certifications</h1>
                <ol className='ms-2 ms-md-5 ms-lg-0'>
                    <li><a href="https://www.coursera.org/account/accomplishments/certificate/E29PGBGZKKFA">Introduction to Front-End Development</a></li>
                    <li><a href="https://www.coursera.org/account/accomplishments/certificate/DKUR3XPLKC7A">HTML and CSS in depth</a></li>
                    <li><a href="https://www.coursera.org/account/accomplishments/certificate/TYRJCTW6LG59">Programming with JavaScript</a></li>
                    <li><a href="https://www.coursera.org/account/accomplishments/certificate/FLDLQ3DF7Y5U">React JS</a></li>
                    <li><a href="https://www.coursera.org/account/accomplishments/certificate/84RDKF7D49UE">Version Control</a></li>


                </ol>

            </div>
            {/* Certifications */}

        </>
    )
}