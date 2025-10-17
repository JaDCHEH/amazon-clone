import React from "react";
import "../Styles/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__backToTop" onClick={scrollToTop}>
        Back to top
      </div>

      <div className="footer__content">
        <div className="footer__container">
          <div className="footer__column">
            <div className="footer__columnTitle">Get to Know Us</div>
            <ul className="footer__links">
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#about">About Amazon</a>
              </li>
              <li>
                <a href="#investor-relations">Investor Relations</a>
              </li>
              <li>
                <a href="#amazon-devices">Amazon Devices</a>
              </li>
              <li>
                <a href="#amazon-science">Amazon Science</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <div className="footer__columnTitle">Make Money with Us</div>
            <ul className="footer__links">
              <li>
                <a href="#sell-products">Sell products on Amazon</a>
              </li>
              <li>
                <a href="#sell-apps">Sell apps on Amazon</a>
              </li>
              <li>
                <a href="#become-affiliate">Become an Affiliate</a>
              </li>
              <li>
                <a href="#advertise">Advertise Your Products</a>
              </li>
              <li>
                <a href="#self-publish">Self-Publish with Us</a>
              </li>
              <li>
                <a href="#host-hub">Host an Amazon Hub</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <div className="footer__columnTitle">Amazon Payment Products</div>
            <ul className="footer__links">
              <li>
                <a href="#business-card">Amazon Business Card</a>
              </li>
              <li>
                <a href="#shop-points">Shop with Points</a>
              </li>
              <li>
                <a href="#reload-balance">Reload Your Balance</a>
              </li>
              <li>
                <a href="#amazon-currency">Amazon Currency Converter</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <div className="footer__columnTitle">Let Us Help You</div>
            <ul className="footer__links">
              <li>
                <a href="#amazon-covid">Amazon and COVID-19</a>
              </li>
              <li>
                <a href="#account">Your Account</a>
              </li>
              <li>
                <a href="#orders">Your Orders</a>
              </li>
              <li>
                <a href="#shipping">Shipping Rates & Policies</a>
              </li>
              <li>
                <a href="#returns">Returns & Replacements</a>
              </li>
              <li>
                <a href="#content-devices">Manage Your Content and Devices</a>
              </li>
              <li>
                <a href="#assistant">Amazon Assistant</a>
              </li>
              <li>
                <a href="#help">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__secondary">
        <div className="footer__secondaryContainer">
          <div className="footer__logo">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon"
              className="footer__logoImage"
            />
          </div>

          <div className="footer__globalLinks">
            <div className="footer__globalItem">
              <button className="footer__globalButton">
                <span className="footer__icon">🌐</span>
                English
              </button>
            </div>

            <div className="footer__globalItem">
              <button className="footer__globalButton">
                <span className="footer__currency">$</span>
                USD - U.S. Dollar
              </button>
            </div>

            <div className="footer__globalItem">
              <button className="footer__globalButton">
                <span className="footer__flag">🇺🇸</span>
                United States
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottomContainer">
          <div className="footer__bottomLinks">
            <div className="footer__bottomColumn">
              <div className="footer__bottomTitle">Amazon Music</div>
              <div className="footer__bottomSubtitle">
                Stream millions of songs
              </div>
            </div>

            <div className="footer__bottomColumn">
              <div className="footer__bottomTitle">Amazon Advertising</div>
              <div className="footer__bottomSubtitle">
                Find, attract, and engage customers
              </div>
            </div>

            <div className="footer__bottomColumn">
              <div className="footer__bottomTitle">6pm</div>
              <div className="footer__bottomSubtitle">
                Score deals on fashion brands
              </div>
            </div>

            <div className="footer__bottomColumn">
              <div className="footer__bottomTitle">AbeBooks</div>
              <div className="footer__bottomSubtitle">
                Books, art & collectibles
              </div>
            </div>

            <div className="footer__bottomColumn">
              <div className="footer__bottomTitle">ACX</div>
              <div className="footer__bottomSubtitle">
                Audiobook Publishing Made Easy
              </div>
            </div>

            <div className="footer__bottomColumn">
              <div className="footer__bottomTitle">Sell on Amazon</div>
              <div className="footer__bottomSubtitle">
                Start a Selling Account
              </div>
            </div>

            <div className="footer__bottomColumn">
              <div className="footer__bottomTitle">Veeqo</div>
              <div className="footer__bottomSubtitle">
                Shipping Software Inventory Management
              </div>
            </div>
          </div>

          <div className="footer__legal">
            <div className="footer__legalLinks">
              <a href="#conditions">Conditions of Use</a>
              <a href="#privacy">Privacy Notice</a>
              <a href="#interest-ads">Interest-Based Ads</a>
            </div>
            <div className="footer__copyright">
              © 1996-2025, Amazon.com, Inc. or its affiliates
            </div>
          </div>
        </div> 
      </div>
    </footer>
  );
}

export default Footer;
