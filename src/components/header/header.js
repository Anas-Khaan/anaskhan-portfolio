import { useEffect, useState } from 'react';
import "./header.css";

export default function Header(props) {

    const [icon, setIcon] = useState('dark');
    useEffect(() => {
        setIcon(props.theme === 'light' ? '#000000' : '#ffffff');

    }, [props.theme])

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-transparent mt-lg-2 text-align-center`}>
                <div className="container-fluid">
                    <a className="navbar-brand ms-2 fs-3" href="/">Anas Khan</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-lg-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-lg-4 animation">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item ms-lg-4 animation">
                                <a className="nav-link" href="/">Projects</a>
                            </li>
                            <li className="nav-item ms-lg-4 animation">
                                <a className="nav-link" href="/">Blog</a>
                            </li>
                            <li className="nav-item ms-lg-4 animation">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item ms-lg-4 animation">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                        </ul>
                   
                    <div className="me-lg-5">
                        {/* Theme changing Icon  */}
                        <a href="#" className='svg-container' onClick={props.changetheme}>
                            {props.theme === 'light' ? (
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.288"></g><g id="SVGRepo_iconCarrier"> <path d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z" fill="#000000"></path> <path d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z" fill="#000000"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#000000"></path> </g></svg>
                            ) : (
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z" fill="#ffffff"></path> <g opacity="0.5"> <path d="M4.39838 4.39838C4.69127 4.10549 5.16615 4.10549 5.45904 4.39838L5.85188 4.79122C6.14477 5.08411 6.14477 5.55898 5.85188 5.85188C5.55898 6.14477 5.08411 6.14477 4.79122 5.85188L4.39838 5.45904C4.10549 5.16615 4.10549 4.69127 4.39838 4.39838Z" fill="#ffffff"></path> <path d="M19.6009 4.39864C19.8938 4.69153 19.8938 5.16641 19.6009 5.4593L19.2081 5.85214C18.9152 6.14503 18.4403 6.14503 18.1474 5.85214C17.8545 5.55924 17.8545 5.08437 18.1474 4.79148L18.5402 4.39864C18.8331 4.10575 19.308 4.10575 19.6009 4.39864Z" fill="#ffffff"></path> <path d="M18.1474 18.1474C18.4403 17.8545 18.9152 17.8545 19.2081 18.1474L19.6009 18.5402C19.8938 18.8331 19.8938 19.308 19.6009 19.6009C19.308 19.8938 18.8331 19.8938 18.5402 19.6009L18.1474 19.2081C17.8545 18.9152 17.8545 18.4403 18.1474 18.1474Z" fill="#0f0e1e"></path> <path d="M5.85188 18.1477C6.14477 18.4406 6.14477 18.9154 5.85188 19.2083L5.45904 19.6012C5.16615 19.8941 4.69127 19.8941 4.39838 19.6012C4.10549 19.3083 4.10549 18.8334 4.39838 18.5405L4.79122 18.1477C5.08411 17.8548 5.55898 17.8548 5.85188 18.1477Z" fill="#0f0e1e"></path> </g> </g></svg>
                            )}
                        </a>

                        {/* Github Icon  */}
                        <a href="/" className="svg-container ms-3">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill={icon} viewBox="0 0 24 24">

                                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                            </svg>
                        </a>

                        {/* Hashnode Icon  */}
                        <a href="/" className="svg-container ms-3">
                            <svg width="30px" height="30px" viewBox="-15.36 -15.36 286.72 286.72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000" strokeWidth="7.936">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="6.656000000000001"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g fillRule="evenodd">
                                        <path d="M17.5913461,85.5328619 C-5.86378203,108.98799 -5.86378203,147.01185 17.5913461,170.464766 L85.5337714,238.409404 C108.9889,261.862319 147.01276,261.862319 170.465675,238.409404 L238.410313,170.464766 C261.863229,147.009638 261.863229,108.985777 238.410313,85.5328619 L170.465675,17.5904365 C147.010547,-5.86247884 108.986687,-5.86247884 85.5337714,17.5904365 L17.5913461,85.5328619 Z M157.724673,157.725976 C174.143262,141.307386 174.143262,114.690241 157.724673,98.2738645 C141.308296,81.8552748 114.691151,81.8552748 98.274774,98.2738645 C81.8561843,114.692454 81.8561843,141.307386 98.274774,157.725976 C114.693364,174.142353 141.308296,174.142353 157.726886,157.725976 L157.724673,157.725976 Z" fill="#fff"></path>
                                    </g>
                                </g>
                            </svg>
                        </a>

                        {/* Linkedin Icon  */}
                        <a href="/" className="svg-container ms-3">
                            <svg stroke="currentColor" fill={icon} strokeWidth="0" viewBox="0 0 1024 1024" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                                <path fill={icon} d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav >

        </>
    )
}