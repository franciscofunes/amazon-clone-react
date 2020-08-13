import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import { getBasketTotal} from "./reducer";

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return  (
    <div className="subtotal">          
    {/*price*/}
    <CurrencyFormat
        renderText={(value) => (
        <>
            <p>
        Subtotal({basket.length} items): <strong>{ `${value}` }</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> Estar orden contiene un regalo
            </small>
        </>    

            
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"AR$"}
    />
    <button>iniciar el Checkout</button>
</div>
);    
}

export default Subtotal
