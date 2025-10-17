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
        </div>
    </div>
  )
}

export default Home