import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img
            className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""
            />
            {/* Product Id, title, prince, rating, image */}
            <div className="home__row">
                <Product
                    id="3215"
                    title="Código Limpio / Clean Code : Robert C. Martin"
                    price={9361}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp"
                />
                <Product
                    id="6987"
                    title="Book : Javascript: Javascript Programming For Absolute Be..."
                    price={1349}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_794903-MLA26289240932_112017-O.webp"
                />
            </div>

            <div className="home__row">
            <Product
                    id="6457"
                    title="Book : Learning React Native: Building Native Mobile Apps..."
                    price={11151}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_835599-MLA26239270219_102017-O.webp"
                />
                <Product
                    id="6547"
                    title="Book : React For Real Front-end Code, Untangled - Fischer,.."
                    price={4720}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_960888-MLA30864694005_052019-O.webp"
                />
                <Product
                    id="3259"
                    title="Book : React Design Patterns And Best Practices Build Easy.."
                    price={4800}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_949721-MLA29020525244_122018-O.webp"
                />
            </div>

            <div className="home__row">
                <Product
                    id="9865"
                    title="Book : Python Crash Course The Introduction To Programming.."
                    price={4951}
                    rating={5}
                    image="https://http2.mlstatic.com/D_NQ_NP_678176-MLA31546487400_072019-O.webp"
                />
            </div>

            {/* Product*/}

        </div>
    );
}

export default Home;
