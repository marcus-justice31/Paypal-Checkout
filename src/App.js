// import './App.css';

import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import Checkout from "./components/Checkout.js"
import "./styles.css";

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID, currency: 'CAD'}}>
      <Checkout></Checkout>
    </PayPalScriptProvider>
    
  );
}

export default App;
