import React, { useEffect, useState } from "react";
import "../Styles/Checkout.css";
import Subtotal from "../Components/Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../Components/CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import axios from "../axios";

function Checkout() {
  const [{ basket, user }] = useStateValue();
  const [showPayment, setShowPayment] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const navigate = useNavigate();

  const getBasketTotal = (basket) => {
    let total = 0;
    basket?.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${Math.round(
          getBasketTotal(basket) * 100
        )}`,
      });
      setClientSecret(response.data.clientSecret);
      console.log("Client secret obtained:", response.data.clientSecret);
    };

    if (basket.length > 0) {
      getClientSecret();
    }
  }, [basket]);

  const [cardInfo, setCardInfo] = useState({
    cardholderName: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  const handleCardChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleProceedToPayment = () => {
    if (basket.length > 0) {
      setShowPayment(true);
    }
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        navigate("/orders");

      })
      .catch((error) => {
        setError(`Payment failed: ${error.message}`);
        setProcessing(false);
      });
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
                        <label>Card Information</label>
                        <div className="payment__cardElement">
                          <CardElement
                            onChange={handleCardChange}
                            options={{
                              style: {
                                base: {
                                  fontSize: "14px",
                                  color: "#0f1111",
                                  fontFamily:
                                    '"Amazon Ember", Arial, sans-serif',
                                  "::placeholder": {
                                    color: "#767676",
                                  },
                                  lineHeight: "40px",
                                  padding: "8px 12px",
                                },
                                invalid: {
                                  color: "#c40000",
                                  iconColor: "#c40000",
                                },
                              },
                            }}
                          />
                        </div>
                        {error && <div className="payment__error">{error}</div>}
                        <div className="payment__help-text">
                          We accept all major credit cards
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
                      disabled={processing || succeeded || disabled}
                    >
                      <span>
                        {processing
                          ? "Processing..."
                          : succeeded
                          ? "Order Placed!"
                          : "Place Your Order"}
                      </span>
                    </button>

                    {succeeded && (
                      <div
                        style={{
                          color: "#067d62",
                          marginTop: "16px",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        ✓ Your order has been placed successfully!
                      </div>
                    )}
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
