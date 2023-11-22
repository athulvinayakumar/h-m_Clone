import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <>
            <div className='container'>
                <div className="row mt-4">

                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10">
                        <div className="image-container">
                            <img width={'100%'} src="https://image.hm.com/ffc/share/assets/2023/6038/a/campaign/3x2_0001s_0004_6038_202.jpg?imwidth=2160" alt="" />
                            <div className="image-text text-center fw-bolder text-white">
                                <h1 className='fw-bolder mb-5'>A SOFTER TAKE</h1>
                                <button className='fw-bolder mb-5'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>

                </div>
                <div className="row mt-4">

                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10">
                        <div className="image-container">
                            <img width={'100%'} src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="image-text text-center fw-bolder text-white">
                                <h1 className='fw-bolder mb-5'>HOLIDAY</h1>
                                <button className='fw-bolder mb-5 border-0'>Shop Collection</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>

                </div>
            </div>
        </>
    )
}

export default Banner