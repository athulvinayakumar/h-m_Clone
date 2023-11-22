import React from 'react'

function Slider1() {
  return (
    <>
     <div className='container mt-5'>
                <div className="row mt-4">

                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10">
                        <div className="image-container">
                            <img width={'100%'} src="https://cdn.pixabay.com/photo/2016/03/27/18/52/flower-1283602_1280.jpg" alt="" />
                            <div className="image-text text-center fw-bolder text-dark mb-3">
                                <h1 className='fw-bold'>Let's layer up!</h1>
                                <h1 className='mb-4' style={{fontSize:'18px'}}>Breeze into winter with style, starting ₹1299</h1>
                                <button className='fw-bolder  btn btn-dark'>Learn</button>
                                <button className='fw-bolder  btn btn-dark ms-2'>Shop Now</button>
                                <button className='fw-bolder  btn btn-dark ms-2'>Shop Now</button>
                                <button className='fw-bolder btn btn-dark ms-2'>Shop Now</button>
                                <button className='fw-bolder  btn btn-dark ms-2'>Shop Now</button>
                            
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

export default Slider1