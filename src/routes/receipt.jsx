
import React,  {useState} from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useGlobalContext } from '../context/context'
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom'

import { Logo } from '../components/logo'

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,

  //Table

   MDBTable,
   MDBTableHead,
   MDBTableBody,

  } from "mdb-react-ui-kit";

import placeholder from '../assets/images/profiler.jpeg'
import background from '../assets/images/empty1.png'

import empty from '../assets/images/empty.png'

import CheckOut from '../component/checkout'

export default function Receipt ({ data }){

  const navigate = useNavigate();

  const handleClick = () => {

    navigate('/', { replace: true })

  };

  const [time, setTime] = useState(new Date());

  let day = time.getDate();
  let month = time.getMonth() + 1;
  let year = time.getFullYear();

  let currentDate = `${day} | ${month} | ${year}`;

  const { 
    cart, 
    total, 
    remove,
    toggleAmount, 
    amount, 

     } = useGlobalContext()

  return (
   <MDBContainer className="py-5 h-100" >
        <MDBRow className="justify-content-center align-items-center h-100" >
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow >
                  <MDBCol lg="7" className='mt-1'>

                  <MDBCard className="h-100">

              <MDBCardBody className="p-4">            

            <h3 className="m-0 text-xl font-bold uppercase leading-none">
            <Link to="/" className="flex items-center no-underline">
              <Logo className="mr-3" /> &nbsp; &nbsp; &nbsp;Receipt
            </Link>
            </h3>



        {!cart.length > 0 ? (
        <>

        <div className='mt-5'><img src={empty} style={{marginLeft: '20%'}} width="300px"/>
        <br/>
          <MDBBtn tag="h5" 
          className="mb-3 bg-info sm items-center mt-3 font-bold"
          style={{height: '45px', marginLeft: '35%',}}
          onClick={handleClick}
          >
          <p style={{lineHeight: '25px'}}>Start Order</p> 
          </MDBBtn>
        </div>

        </>

        ):(

        <>
        <div className='mt-3' style={{marginLeft: '60px'}}>

        <h5 className="m-0 text-sm mb-2 uppercase" >Bussiness Address : 3025-1002 MADARAKA THIKA</h5>
        <h5 className="m-0 text-sm mb-2 uppercase" >Office Contact : +254714845504 </h5>
        <h5 className="m-0 text-sm mb-2 uppercase" >Date : {currentDate}</h5>
        <h5 className="m-0 text-sm mb-2 uppercase" >Time : {time.toLocaleTimeString()}</h5>


        </div>



        <MDBTable className='mt-4' align="middle" style={{marginLeft: '50', marginRight: '50'}} >
        <MDBTableHead>
        <tr>
            <th scope="col">No.</th>
            <th scope="col">Description</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
        </tr>
        </MDBTableHead>
        <MDBTableBody style={{marginLeft: '150'}}>

        {cart.map((tasks) => (<>

            <tr key={tasks.key}>
            <td>

              <p className="fw-bold mb-1">{tasks.id}</p>

            </td>

            <td>
                <p className="fw-normal mb-1">{tasks.title}</p>
            </td>

            <td>
                <p className="fw-normal mb-1">{tasks.price}</p>
            </td>

            <td>
                <p className="fw-normal mb-1">{tasks.amount}</p>
            </td>

            <td>
            <p className="fw-normal mb-1">{tasks.amount * tasks.price}</p>
            </td>

            </tr>

            </> 
        ))}

        </MDBTableBody>
        </MDBTable>

        <h5 className="m-0 font-bold text-sm mb-2 uppercase text-right" >Amount : {total}</h5>



        </>

    )} 
    </MDBCardBody>
    </MDBCard>


                  </MDBCol>

                  <MDBCol lg="5">
                    <MDBCard className="bg-primary text-white rounded-3"
                    style={{
                      backgroundImage: `url(${background})` ,
                      backgroundSize: "500px",


                    }}>
                      <MDBCardBody>
                        <div className='opacity mb-4'>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <MDBTypography tag="h5" className="mb-0">
                            Delivery details
                          </MDBTypography>
                          <MDBCardImage src= {placeholder}
                            fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" contain />
                        </div>

                        <p className="small">Card type</p>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-visa fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-amex fa-2x me-2" />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                          <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                        </a>

                        <form className="mt-4">
                          <MDBInput className="mb-4" label="Customer Name" type="text" size="lg"
                             contrast />


                          <MDBInput className="mb-4" label="Location" type="text" size="lg"
                            minLength="19" maxLength="19" contrast 
                            
                            />

                        </form>


                        <hr className="mb-3"/>



                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Delivery Cost</p>
                          <p className="mb-2">$ 2.00</p>
                        </div>

                      </div>

                        <CheckOut />

                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

  );
};
