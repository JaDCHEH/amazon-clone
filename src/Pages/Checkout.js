import React, { useState } from "react";
import "../Styles/Checkout.css";
import Subtotal from "../Components/Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../Components/CheckoutProduct";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  const [showPayment, setShowPayment] = useState(false);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  const handleProceedToPayment = () => {
    if (basket.length > 0) {
      setShowPayment(true);
    }
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    console.log("Order placed:", { basket, cardInfo });
    alert("Order placed successfully! Thank you for shopping with us.");
    // Here you would typically process the payment and clear basket
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout Ad"
        />
        <div>
          <h3 className="checkout__greeting">
            Hello, {user ? user.email : "Guest"}
          </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.length === 0 ? (
            <div className="checkout__empty">
              <h3>Your Amazon Cart is empty</h3>
              <p>Check out today's deals or visit your wish list</p>
              <Link to="/" className="checkout__shopButton">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              {basket.map((item, index) => (
                <CheckoutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}

              {showPayment && (
                <div className="checkout__paymentSection">
                  <h2 className="checkout__title">Payment Information</h2>

                  <form
                    className="checkout__paymentForm"
                    onSubmit={handleSubmitOrder}
                  >
                    <div className="payment__section">
                      <h3>Credit Card Details</h3>

                      <div className="payment__input-group">
                        <label>Cardholder Name</label>
                        <input
                          type="text"
                          name="cardholderName"
                          value={cardInfo.cardholderName}
                          onChange={handleInputChange}
                          placeholder="Full name on card"
                          required
                        />
                      </div>

                      <div className="payment__input-group">
                        <label>Card Number</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={cardInfo.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                          required
                        />
                        <div className="payment__help-text">
                          We accept all major credit cards
                        </div>
                      </div>

                      <div className="payment__row">
                        <div className="payment__input-group">
                          <label>Expiry Date</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={cardInfo.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            maxLength="5"
                            required
                          />
                        </div>

                        <div className="payment__input-group">
                          <label>CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            value={cardInfo.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            maxLength="4"
                            required
                          />
                          <div className="payment__help-text">
                            3 or 4 digits
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="payment__section">
                      <h3>Billing Address</h3>

                      <div className="payment__input-group">
                        <label>Address</label>
                        <input
                          type="text"
                          name="billingAddress"
                          value={cardInfo.billingAddress}
                          onChange={handleInputChange}
                          placeholder="123 Main Street"
                          required
                        />
                      </div>

                      <div className="payment__row">
                        <div className="payment__input-group">
                          <label>City</label>
                          <input
                            type="text"
                            name="city"
                            value={cardInfo.city}
                            onChange={handleInputChange}
                            placeholder="City"
                            required
                          />
                        </div>

                        <div className="payment__input-group">
                          <label>State</label>
                          <input
                            type="text"
                            name="state"
                            value={cardInfo.state}
                            onChange={handleInputChange}
                            placeholder="State"
                            required
                          />
                        </div>

                        <div className="payment__input-group">
                          <label>ZIP Code</label>
                          <input
                            type="text"
                            name="zipCode"
                            value={cardInfo.zipCode}
                            onChange={handleInputChange}
                            placeholder="12345"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="checkout__placeOrderButton"
                    >
                      Place Your Order
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal
          onProceedToPayment={handleProceedToPayment}
          showPayment={showPayment}
        />
      </div>
    </div>
  );
}

export default Checkout;
