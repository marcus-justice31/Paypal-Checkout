import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from 'react';

const PaypalCheckoutButton = (props) => {
    const { product } = props;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderID) => {
        // Call backend function to fulfill order

        // If response is success
        setPaidFor(true);

        // Refresh user's account or subscription status

        // If the response is error
        // setError("Error with payment.")
    };

    if (paidFor) {
        // Display success message, modal or redirect user to success page
        alert("Thank you for your purchase!");
    }

    if (error) {
        // Display error message, modal or redirect user to error page
        alert(error);
    }

    return (
        <PayPalButtons style={{
            color: "silver",
            layout: "horizontal",
            height: 48,
            tagline: false,
            shape: "pill"}}

            onClick={(data, actions) => {
                // Validate on button click, client or server side
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {value: product.price}
                        }
                    ]
                });
            }}
            onApprove={async(data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order);

                handleApprove(data.orderID);
            }}
            onCancel={() => {
                // Display cancel message, modal or redirect user to cancel page or back to cart
            }}
            onError={(err) => {
                setError(err);
                console.error("PayPal Checkout onError", err);
            }}
        /> 
        
        

    )
}

export default PaypalCheckoutButton;