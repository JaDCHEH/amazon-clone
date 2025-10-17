import React from "react";
import { NumericFormat } from "react-number-format";
import "../Styles/Subtotal.css";
import { useStateValue } from "../StateProvider";

function Subtotal({ onProceedToPayment, showPayment }) {
  const [{ basket }] = useStateValue();

  const getBasketTotal = (basket) => {
    let total = 0;
    basket?.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  const handleCheckout = () => {
    if (onProceedToPayment) {
      onProceedToPayment();
    }
  };

  return (
    <div className="subtotal">
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={handleCheckout}
        disabled={basket.length === 0 || showPayment}
        className={showPayment ? "disabled" : ""}
      >
        {showPayment ? "Payment Form Below" : "Proceed to Payment"}
      </button>
    </div>
  );
}

export default Subtotal;
