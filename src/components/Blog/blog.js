import './Blog.css';

export default function blog(prop) {
    const blog = [{
        id: 1,
        title: 'Understanding the CSS Box Model',
        description: 'Understand the CSS Box Model to master element layout and avoid common styling pitfalls for visually appealing web designs.',
        image: './Blogs-image/CSS-Box-Model.svg',
        url: 'https://anaskhan1.hashnode.dev/css-box-model'

    },
    {
        id: 2,
        title: 'Client-side rendering vs Server-side rendering',
        description: 'Overview of Server-Side Rendering (SSR) and Client-Side Rendering (CSR), their pros and cons, and key differences.',
        image: './Blogs-image/Rendering.svg',
        url: 'https://anaskhan1.hashnode.dev/client-side-rendering-vs-server-side-rendering'

    }
    ]


    return (
        <>
            <div className="container-fluid">
                <div className='d-flex justify-content-center mt-5 mb-5'>
                    <h1>Blog Posts</h1>
                </div>
                <div className="row d-flex justify-content-center g-0">
                    {blog.map((item, index) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4" key={item.id}>
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={item.image} className="card-img-top" alt="Card image cap" />
                                    <div className={`card-body theme-${prop.theme}`}>
                                        <h5 className="card-title"><a href={item.url} target='_blank' rel='noopener noreferrer'>{item.title}</a></h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </>
    )
}