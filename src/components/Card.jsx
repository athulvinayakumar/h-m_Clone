import React from 'react'
import './Card.css'
function Card() {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <h3>New Arrivals</h3>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-1"></div>
                    <div className="col-md-4 d-flex">
                        <div className="circle">
                            <button className='btn btn-danger border border-dark' style={{borderRadius:'50%',height:'120%', width:"120%"}}>Ladies</button>
                        </div>

                        <div className="circle ms-5 ">
                        <button className='btn btn-white border border-dark' style={{borderRadius:'50%',height:'120%', width:"120%"}}>Men</button>
                            
                        </div>

                        <div className="circle ms-5">
                        <button className='btn btn-white border border-dark' style={{borderRadius:'50%',height:'120%', width:"120%"}}>Divided</button>
                    
                        </div>

                        <div className="circle ms-5">
                        <button className='btn btn-white border border-dark' style={{borderRadius:'50%',height:'120%', width:"120%"}}>Baby</button>
             
                        </div>

                        <div className="circle ms-5">
                        <button className='btn btn-white border border-dark' style={{borderRadius:'50%',height:'120%', width:"120%"}}>Kids</button>
          
                        </div>

                        <div className="circle ms-5">
                        <button className='btn btn-white border border-dark' style={{borderRadius:'50%',height:'120%', width:"120%"}}>H&M</button>
          
                        </div>

                        <div className="circle ms-5">
                        <button className='btn btn-white border border-dark' style={{borderRadius:'50%',height:'120%', width:"120%"}}>Sports</button>
             
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row mt-4">

                    <div className="col-md-1"></div>
                    <div className="col-md-2 ms-2 me-3 kimage">
                        <img width={'120%'} src="https://lp2.hm.com/hmgoepprod?set=source[/9d/3c/9d3cb947976f0c4b88a5b438a07f60d785ac5af1.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" alt="aaa" />
                        <p>Hodded Jacket <br />
                            Rs.5999.00 </p>
                            
                    </div>
                    <div className="col-md-2 ms-5 kimage">

                        <img width={'120%'} src="https://lp2.hm.com/hmgoepprod?set=source[/39/40/394041f079a6999051b070338e6d30c0e1dd5ce6.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]" alt="aaa" />
                        <p>Flutted Coat <br />
                            Rs.5499.00</p>
                    </div>
                    <div className="col-md-2 ms-5 kimage">

                        <img width={'120%'} src="https://lp2.hm.com/hmgoepprod?set=source[/31/c4/31c47bcb07dd54bc4dd3377ad7b343fd5b0e2742.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[2]&call=url[file:/product/main]" alt="aaa" />
                        <p>Satin Shirt <br />
                            Rs.1999.00</p>
                    </div>
                    <div className="col-md-2 ms-5 kimage">

                        <img width={'120%'} src="https://lp2.hm.com/hmgoepprod?set=source[/5b/90/5b9026f054d2936701aa9fdbcd4dac9e35b64fd4.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[2]&call=url[file:/product/main]" alt="aaa" />
                        <p>Drapped Blouse <br />
                            Rs.1799.00</p>
                    </div>

                    <div className="col-md-1 mb-4 "></div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <h3>° ° ° ° ° °</h3>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
    )
}

export default Card