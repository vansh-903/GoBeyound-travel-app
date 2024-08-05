import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.png";
import sliderImg2 from "../../assets/images/slider/3.png";
import "../Banner/banner.css"

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  GO-BEYOUND YOUR LIMITS<span>WITH GoBeyound</span>
                  
                </h5>
                <p className="sub_text">
                  We should explore India's beauty: diverse culture,
                  historic monuments, stunning landscapes, vibrant festivals, and warm hospitality.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  JOURNEY TO <span>EXPLORE INDIA</span>
                </h5>
                <p className="sub_text">
                Explore India's beauty: vibrant festivals, historic monuments, 
                stunning landscapes, delicious cuisine, rich culture, bustling markets, and warm hospitality.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg2} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  TRAVEL PLACES <span>TO EXPLORE</span>
                </h5>
                <p className="sub_text">
                Discover India;s beauty: colorful festivals, ancient monuments, 
                breathtaking landscapes, savory cuisine, diverse culture, lively markets, and welcoming hospitality.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </section>
    </>
  );
};

export default Banner;