import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <>
            <footer className="text-dark pt-5 pb-5 footer-custom mt-5" id="footer" style={{ backgroundColor: '#E6E6E6' }}>
                <div className="container p-3">
                    <div className="row justify-content-center ">
                        <div className="col-md-3 col-sm-6 ">
                            <div className="footer-section mt-3 ms-5">
                                <h6 className='ms-4'><strong>SHOP</strong></h6>
                                <div className='me-1 mt-3' style={{ fontSize: '14px' }}>
                                    <ul className='footer-link'>Ladies</ul>
                                    <ul className='footer-link'>Men</ul>
                                    <ul className='footer-link'>Baby</ul>
                                    <ul className='footer-link'>Kids</ul>
                                    <ul className='footer-link'>H&M HOME</ul>
                                    <ul className='footer-link'>H&M HOME</ul>
                                    <ul className='footer-link'>Sport</ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-section mt-3">
                                <h6 className='ms-3'><strong>CORPORATE INFO</strong></h6>
                                <div className=' mt-3' style={{ fontSize: '14px' }}>
                                    <ul className='footer-link'>Career at H&M</ul>
                                    <ul className='footer-link'>About H&M group</ul>
                                    <ul className='footer-link'>Sustainability H&M Group</ul>
                                    <ul className='footer-link'>Press</ul>
                                    <ul className='footer-link'>Investor relations</ul>
                                    <ul className='footer-link'>Corporate governance</ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-section mt-3">
                                <h6 className='ms-5'><strong>HELP</strong></h6>
                                <div className=' mt-3' style={{ fontSize: '14px' }}>
                                    <ul className='footer-link'>Customer Service</ul>
                                    <ul className='footer-link'>My H&M</ul>
                                    <ul className='footer-link'>Find a store</ul>
                                    <ul className='footer-link'>Legal & Privacy</ul>
                                    <ul className='footer-link'>Contact</ul>
                                    <ul className='footer-link'>Report a scam</ul>
                                    <ul className='footer-link'>Cookie Notice</ul>
                                    <ul className='footer-link'>Cookie Settings</ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-section ">
                                <div className='justiify-content-center align-items-center p-5 ' style={{ fontSize: '14px' }}>
                                    <p>Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p>
                                    <p>Read more <i class="fa-solid fa-arrow-right"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-3'>
                        <a href="" target='-blank' className='btn '><i class="fa-brands fa-instagram fs-3"></i></a>
                        <a href="" target='-blank' className='btn me-2'><i class="fa-brands fa-youtube fs-3"></i></a>
                        <a href="" target='-blank' className='btn me-2'><i class="fa-brands fa-pinterest fs-3"></i></a>
                        <a href="" target='-blank' className='btn me-2'><i class="fa-brands fa-square-facebook fs-3"></i></a>

                    </div>

                    <div className='text-center mt-3'>
                        <h5 className='align-items-center'>The content of this site is copyright-protected and is the property of H & M Hennes & Mauritz AB.</h5>
                    </div>

                    <div className='text-center mt-4'>
                    <h1 className='fw-bolder text-dark'>H&M</h1>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="developer-custom text-center fs-">INDIA | Rs.</div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer