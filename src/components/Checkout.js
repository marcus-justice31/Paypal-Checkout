import PaypalCheckoutButton from "./PaypalCheckoutButton";
import style from "../styles.css";

const Checkout = () => {
    const productTest = {
        description: "Testing Description",
        price: 19
    }
    return (
        <div className="paypal">
            <p className="checkout-title">TESTING</p>
            <div className="paypal-button-container">
                <PaypalCheckoutButton product={productTest} />
            </div>
        </div>  
        
    )
}

export default Checkout;