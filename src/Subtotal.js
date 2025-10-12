import React from 'react'
import { NumericFormat } from 'react-number-format';
import './Subtotal.css'
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{ basket }] = useStateValue();

    const getBasketTotal = (basket) => {
        let total = 0;
        basket?.forEach(item => {
            total += item.price;
        });
        return total;
    }
  return (
    <div className='subtotal'>
        <NumericFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket?.length} items): <strong>{getBasketTotal(basket)}$</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal