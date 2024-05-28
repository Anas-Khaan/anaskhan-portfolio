import data from './project-data';
import './project.css';

export default function Project(props) {
    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-center mt-5'>
                    <h1>Projects</h1>
                </div>
                <div className='d-flex justify-content-center mt-2'><div className={`divider-${props.theme}`}></div></div>
                <div className='row d-flex justify-content-center'>
                    {data.map((item, index) => {
                        return (
                            <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center mt-5 mb-5' >
                                <div className="card" style={{ width: '28rem' }}>
                                    <img src={item.image} className="card-img-top" alt="..." />
                                    <div className={`card-body theme-${props.theme}`}>
                                        <p className="card-text">{item.description}</p>
                                        <div className='d-flex justify-content-center'>
                                            {item.stack.map((stack, index) => {
                                                return <h6 className='m-3' key={index}>{stack}</h6>
                                            })}
                                        </div>
                                        <div className='text-center mt-2'>
                                            <button className={`bttn-${props.theme}`}>
                                                <a href={item.url} rel='noopener noreffer'>
                                                    Source Code
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })}


                </div>
            </div>
        </>
    )
}
