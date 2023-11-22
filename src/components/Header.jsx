import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{height:'100px'}}>
                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto ms-4 mb-5 my-2 my-lg-0"
                            style={{ maxHeight: '100px', fontSize: '15px' }}
                            navbarScroll
                        >
                            <Nav.Link className='text-dark' style={{ color: "#222"  }}>Customer Service</Nav.Link>
                            <Nav.Link className='text-dark' style={{ color: "#222"  }}>Newsletter</Nav.Link>
                            <Nav.Link className='text-dark' style={{ color: "#222"  }}>Find a store</Nav.Link>
                            <Nav.Link className='text-dark mt-1' style={{ color: "#222" , fontSize:'18px' }}>°°°</Nav.Link>
                        </Nav>
                        <Navbar.Brand className='align-items-center mt-4'>
                            <img src="https://cdn.worldvectorlogo.com/logos/h-m.svg" style={{ width: '100px' }} alt="" />
                        </Navbar.Brand>

                        <Nav className="ms-auto me-5">

                            <Nav.Link className='text-dark' style={{ color: "#222" }}><i class="fa-regular fa-user"></i>  Sign in</Nav.Link>
                            <Nav.Link className='text-dark' style={{color: "#222"  }}><i class="fa-regular fa-heart"></i>  Favourites</Nav.Link>
                            <Nav.Link className='text-dark' style={{ color: "#222"  }}><i class="fa-solid fa-bag-shopping"></i>  Shopping bag (0)
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header

