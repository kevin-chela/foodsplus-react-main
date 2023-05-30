import { CLIENT_ID } from '../config/config'
import React, { useState, useEffect } from "react" ;
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

//Context

import { useGlobalContext } from '../context/context'

const Checkout = ({Price}) => {

    console.log({Price})

    //clear cart after payment

    const { 
        cart, 
        total, 
        clearCart,
        remove,
        increase, 
        decrease, 
        toggleAmount, 
        amount, 
        
         } = useGlobalContext()

    //navigate to receipt screen

    const navigate = useNavigate();

    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState({Price});
    
    console.log(orderID)
    console.log(total)
    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Fast Food",
                    amount: {
                        currency_code: "USD",
                        value: total,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };

    //capture likely error
    const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
    };

    useEffect(() => {
        if (success) {

            //clear cart

            clearCart
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
            navigate('/receipt', { replace: true })
 
        }
    },[success]);

    return (
        <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
            <div className='w-full'>
               
            <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={createOrder}
                onApprove={onApprove}
            />
                
            </div>
        </PayPalScriptProvider>
    );
}

export default Checkout

Checkout.propTypes = {
    Price: PropTypes.string.isRequired,
  };