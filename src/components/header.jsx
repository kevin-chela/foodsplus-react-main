import { Link } from 'react-router-dom'

import { Logo } from './logo'

import CheckOut from '../component/checkout'

import * as React from 'react';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Tooltip from '@mui/material/Tooltip';

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBTypography,

  //Modal

  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,

  } from "mdb-react-ui-kit";

import { useState } from 'react';

//Context

import { useGlobalContext } from '../context/context'

//image

import empty from '../assets/images/empty.png'

const Header = ({ items }) => {

  //Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // badge

  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  //Modal
  const [centredModal, setCentredModal] = useState(false)
  const toggleShow = () => setCentredModal(!centredModal)

  const { 
    cart, 
    total, 
    remove,
    toggleAmount, 
    amount, 
    
     } = useGlobalContext()

  console.log(cart);

  return (
    <header className="fixed bg-light shadow-2xl" style={{padding: '20px'}}>
      <div className="mx-auto w-full max-w-6xl px-6 ">
        <div className="relative flex items-center justify-between">
        <div style={{marginRight: '60%'}}>

          <h1 className="m-0 text-xl font-bold uppercase leading-none" >
            <Link to="/" className="flex items-center no-underline">
              <Logo className="mr-3" /> &nbsp; &nbsp; &nbsp;ManHattan Desert
            </Link>
          </h1>
        </div>

          <div className="d-flex justify-end mx-3" style={{marginLeft: '60%'}}>

          <Badge color="secondary" variant="dot" invisible={invisible} className="mt-3 mr-5" style={{marginRight: '50px'}} >
          <Tooltip title="Notifications">
            <i className="far fa-bell text-info  " 
            style={{fontSize: 23, cursor: 'pointer'}}
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            ></i>
            </Tooltip>
          </Badge>

          <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          style={{marginTop: '30px', marginLeft: '-80px'}}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          >
          <div style={{padding: 10}}>
            <MenuItem style={{fontSize: 12}}>Warm welcome to our customers</MenuItem>
          </div>

          </Menu>

          <div className='bg-info' style={{width: '50px', height: '50px', borderRadius: '8px',}} onClick={toggleShow}>
          <MDBIcon fas icon="cart-arrow-down text-white mt-3 ml-5" style={{fontSize:20, cursor: 'pointer', marginLeft: '12px'}} />
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div> 
          </div>

          </div>
         
        </div>
      </div>
      <div>
      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
            <MDBModalDialog xl scrollable>
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>
                  <MDBIcon fas icon="cart-arrow-down text-success" className="me-3" />
                    Your Order  
                  </MDBModalTitle>
                 
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={toggleShow}
                    style={{ fontSize: 10, fontWeight: 'bold' }}
                  ></MDBBtn>
                </MDBModalHeader>

                <MDBModalBody>
                
                {cart.length > 0 ? 

                 <div>

                    {cart.map((item) => (

                    <MDBCard className="mb-2" key={item.id} >
                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <div>
                            <MDBCardImage
                              src={item.img} alt="image"
                              fluid className="rounded-3" style={{ width: "100px" }}
                              />
                          </div>
                          <div className="ms-3">
                            <MDBTypography tag="h5">
                              {item.title}
                            </MDBTypography>
                            <p className="small mt-2"></p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div className="number-input">

                            <p id="numberDisplay">{item.amount}</p>

                            <div style={{fontSize: '10px'}}>
                              <div><button  onClick={() => toggleAmount(item.id, 'inc')}>▲</button></div>
                              
                              <div><button onClick={() => toggleAmount(item.id, 'dec')}>▼</button></div>
                            </div>
                          </div>

                          <div style={{ width: "80px", marginLeft: "50px"  }}>
                            <MDBTypography tag="h5" className="mb-0">
                              {item.price}
                            </MDBTypography>
                          </div>
                          <a href="#!" className='deletes' style={{ color: "#cecece"}} onClick={() => remove(item.id)}>
                            <MDBIcon fas icon="trash-alt"  />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                    </MDBCard>             

                    ))}
                    <div className='d-flex justify-content-between px-3 py-3 font-bold' >

                    <h5 className='text-secondary' style={{fontSize: '35'}}>SubTotal</h5>

                    <h5 style={{fontSize: '35'}}>$ {total} USD</h5>

                    </div>
                    

                </div>:<div>

                <img src={empty} style={{marginLeft: '25%'}} width="230px"/>
                <br/>
                <MDBBtn tag="h5" 
                className="mb-3 bg-info sm items-center mt-3 font-bold"
                style={{height: '45px', marginLeft: '35%',}}
                onClick={toggleShow}
                >
                <p style={{lineHeight: '25px'}}>Start Order</p> 
                </MDBBtn>

                </div>}

                </MDBModalBody>

                {cart.length > 0 ? 

                <MDBModalFooter className="modal-footer">

                  <CheckOut 
                    Price = {total}/>

                </MDBModalFooter>

                :null}
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
      </div>
      <div style={{position: 'fixed', marginTop: '30%', marginLeft: '2%', zIndex: '100'}}> 
      <div className='bg-info' style={{width: '50px', height: '50px', borderRadius: '8px',}} onClick={toggleShow}>
          <MDBIcon fas icon="cart-arrow-down text-white mt-3 ml-3" style={{fontSize:20, cursor: 'pointer', marginLeft: '12px'}} />
            <div className='amount-container'>
              <p className='total-amount'>{amount}</p>
            </div> 
      </div>
      </div>
    </header>
  )
};

export default Header


