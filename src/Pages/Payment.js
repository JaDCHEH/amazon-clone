import React, { useState } from "react";
import "../Styles/Payment.css";

function Payment() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", cardInfo);
    // Here you would typically process the payment
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__left">
          <h1 className="payment__title">Payment Information</h1>

          <form className="payment__form" onSubmit={handleSubmit}>
            <div className="payment__section">
              <h3>Credit Card Information</h3>

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
                    3 or 4 digits on the back of your card
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

            <button type="submit" className="payment__submit-btn">
              Complete Payment
            </button>
          </form>
        </div>

        <div className="payment__right">
          <div className="payment__order-summary">
            <h3>Order Summary</h3>
            <div className="payment__summary-row">
              <span>Items:</span>
              <span>$29.99</span>
            </div>
            <div className="payment__summary-row">
              <span>Shipping & handling:</span>
              <span>$5.99</span>
            </div>
            <div className="payment__summary-row">
              <span>Total before tax:</span>
              <span>$35.98</span>
            </div>
            <div className="payment__summary-row">
              <span>Estimated tax:</span>
              <span>$3.24</span>
            </div>
            <div className="payment__summary-row total">
              <span>Order total:</span>
              <span>$39.22</span>
            </div>
          </div>

          <div className="payment__security-notice">
            <strong>Security & Privacy</strong>
            <br />
            Your payment information is encrypted and secure. We use
            industry-standard SSL encryption to protect your data.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
