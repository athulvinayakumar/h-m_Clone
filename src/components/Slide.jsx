import React from 'react'
import './Slide.css'

function Slide() {
  return (
    <div>
      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 d-flex  justify-content-center align-items-center category-container">
            <h6 className='category-item mb-3' style={{ fontSize: '20px', width: '100%' }}>Ladies</h6>
            <h6 className='category-item mb-3' style={{ fontSize: '20px', width: '100%' }}>Men</h6>
            <h6 className='category-item mb-3' style={{ fontSize: '20px', width: '100%' }}>Divided</h6>
            <h6 className='category-item mb-3' style={{ fontSize: '20px', width: '100%' }}>Baby</h6>
            <h6 className='category-item mb-3' style={{ fontSize: '20px', width: '100%' }}>Kids</h6>
            <h6 className='category-item mb-3' style={{ fontSize: '20px', width: '100%' }}>H&MHOME</h6>
            <h6 className='category-item mb-3' style={{ fontSize: '20px', width: '100%' }}>Sport</h6>
            <h6 className='category-item mb-3' style={{ fontSize: '20px', width: '100%' }}>Sustainability</h6>
            <h6 className='category-item mb-3' style={{ fontSize: '20px', width: '100%' }}>Sale</h6>
          </div>
          <div className="col-md-2 mt-3 mt-md-0 ms-auto">
            {/* <div className="input-group">
            <span className="input-group-text" style={{ borderBottom: '1px solid' }}>
              <i className="fa-solid fa-magnifying-glass fa-1"></i>
            </span>
            <input
              className='form-control border-0'
              type="text"
              placeholder='Search'
              style={{ fontSize: '16px', outline: 'none' }}
            />
          </div> */}
          </div>
        </div>
      </div>

      <div className="container-fluid text-center mt-4">
        <div className="row mt-3">
          <div className="col-md-2 text-center">

          </div>
          <div className="col-md-8">
            <div className='d-flex  justify-content-between align-items-center'>
            <h6 className='ms category-item' style={{ fontSize: '20px' }}>Members get free shipping above Rs.1999</h6>
            <h6 className='ms-4 category-item' style={{ fontSize: '20px' }}>Free & flexible 15 days return</h6>
            <h6 className='ms-4 category-item' style={{ fontSize: '20px' }}>Estimated delivery time: 2-7 days</h6>
            </div>
          </div>
          <div className="col-md-2">

          </div>
        </div>
      </div>

    </div>
  )
}

export default Slide