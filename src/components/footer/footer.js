import { useState, useEffect } from "react";
import './footer.css'

export default function Footer(props){
    const [icon, setIcon] = useState('dark');
    useEffect(() => {
        setIcon(props.theme === 'light' ? '#000000' : '#ffffff');

    }, [props.theme])

    return(
        <>
        <div className="body"></div>
        <div className = {`row ms-5 me-5 gx-0 border-dark border-top px-0 px-lg-2 py-0 py-lg-3`}>
            <div className="col-12 col-lg-6 mt-1 d-flex order-lg-1 order-2 justify-content-center justify-content-lg-start"><div>© 2024 <a href="/" style={{textDecoration:"none", color:"inherit"}}>Anas Khan</a>. All Rights Reserved.</div></div>
            <div className="col-12 col-lg-6 mt-1 d-flex justify-content-center justify-content-lg-end order-lg-2 order-1 pe-1">
                        {/* Github Icon  */}
                        <a href="/" className="svg-container ms-3">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={icon} viewBox="0 0 24 24">

                                <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd" />
                            </svg>
                        </a>

                        {/* Hashnode Icon  */}
                        <a href="/" className="svg-container ms-3">
                            <svg width="20px" height="20px" viewBox="-15.36 -15.36 286.72 286.72" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000" strokeWidth="7.936">
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
                            <svg stroke="currentColor" fill={icon} strokeWidth="0" viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                <path fill={icon} d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path>
                            </svg>
                        </a>
                    </div>
        </div>
        </>
    )
};