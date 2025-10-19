import React from 'react'
import '../Styles/Home.css'
import Product from '../Components/Product'

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="Home Banner"
                className="home__image"
            />
            <div className="home__row">
                <Product
                    id="123456"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    price={29.99}
                    rating={5}
                />

                <Product
                    id="123458"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    price={99.99}
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                    id="123459"
                    title="Samsung wave 7 163.3 cm (64.5 inches) 4K Ultra HD Smart QLED TV (Black) (2020 Model)"
                    image="https://m.media-amazon.com/images/I/81u-ERcjEJL._AC_SY300_SX300_QL70_FMwebp_.jpg"
                    price={199.99}
                    rating={3}
                />
                <Product
                    id="123462"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    image="https://images-na.ssl-images-amazon.com/images/I/61Gob-M3snL._AC_SX679_.jpg"
                    price={98.99}
                    rating={5}
                />
                <Product
                    id="123461"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    price={598.99}
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    id="123457"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    price={199.99}
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product 
                    id="1234"
                    title="Apple 2025 MacBook Air 13-inch Laptop with M4 chip: Built for Apple Intelligence, 13.6-inch Liquid Retina Display, 16GB Unified Memory, 256GB SSD Storage, 12MP Center Stage Camera, Touch ID; Midnight"
                    image="https://m.media-amazon.com/images/I/71cWZUr9SVL._AC_SL1500_.jpg"
                    price={899.99}
                    rating={4}
                />
                <Product
                    id="12346"
                    title="Apple iPhone 17 Pro Max Silicone Case with MagSafe and Camera Control: Lightweight Phone Case, Wireless Charging Compatible, Smooth Matte Finish; Terra Cotta"
                    image="https://m.media-amazon.com/images/I/61k4cslkgRL._AC_SX342_.jpg"
                    price={37.99}
                    rating={5}
                />
                <Product
                    id="1234655"
                    title="2025 Gaming Laptop with AMD Ryzen7 5000 Series(Up to 4.3GHZ,8C/16T),AMD Radeon Graphics,16GB DDR4x2 512GB SSD"
                    image="https://m.media-amazon.com/images/I/410j5klAqWL._AC_UL800_FMwebp_QL65_.jpg"
                    price={1699.99}
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1234567"
                    title="TCyberPowerPC Gamer Xtreme VR Gaming PC, "
                    image="https://m.media-amazon.com/images/I/71ENeVg0MuL._AC_UL960_FMwebp_QL65_.jpg"
                    price={989.99}
                    rating={5}
                />

                <Product
                    id="1234588"
                    title="Xbox Wireless Gaming Controller (2025) – Carbon Black – Play on Xbox"
                    image="https://m.media-amazon.com/images/I/615KnbjRmTL._AC_UL800_FMwebp_QL65_.jpg"
                    price={49.99}
                    rating={4}
                />
            </div>
        </div>
    </div>
  )
}

export default Home