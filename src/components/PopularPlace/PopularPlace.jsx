import React from "react";
import "../PopularPlace/popularPlace.css";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";

import Anchorage from "../../assets/images/popular/Anchorage To La Paz.jpg";
import Sikkim from "../../assets/images/popular/Discover Singapore.png";
import Kiwiana from "../../assets/images/popular/Kiwiana Panorama.jpg";
import Quito from "../../assets/images/popular/Anchorage To Quito.jpg";
import Cuzco from "../../assets/images/popular/Cuzco To Anchorage.jpg";
import Ushuaia from "../../assets/images/popular/Anchorage To Ushuaia.jpg";
import Santiago from "../../assets/images/popular/Anchorage To Santiago.jpg";
import Explorer from "../../assets/images/popular/LA Explorer.jpg";

const PopularPlace = () => {
  

  const populars = [
    {
      id: 0,
      tilte: "Discover Sikkim",
      image: Sikkim,
      location: "Ravangla Monastery, Sikkim",
      category: ["Escorted Tour", "Rail Tour"],
      days: "6 days - 5 nights",
      price: 25999,
      afterDiscount: 21999,
      rating: 3,
      reviews: 5,
    },
    {
      id: 1,
      tilte: "Andaman And Nicobar Island",
      image: Kiwiana,
      location: "Port Blair, Andaman And Nicobar Island",
      category: ["River Cruise", "Wildlife"],
      days: "7 days - 6 nights",
      price: 51999,
      afterDiscount: 45999,
      rating: 4,
      reviews: 9,
    },
    {
      id: 2,
      tilte: "Dawki Waterfall Trek",
      image: Quito,
      location: "Meghalaya",
      category: ["Escorted Tour", "River Cruise"],
      days: "6 days - 5 nights",
      price: 25999,
      afterDiscount: 21999,
      rating: 4,
      reviews: 9,
    },
    {
      id: 3,
      tilte: "Chulia Falls",
      image: Anchorage,
      location: "Rawatbhata, Rajasthan",
      category: ["River Cruise", "Rail Tour"],
      days: "unlimited",
      price: 0,
      afterDiscount: 0,
      rating: 5,
      reviews: 20,
    },
    {
      id: 4,
      tilte: "Dehradun",
      image: Cuzco,
      location: "Dehradun, Mussorie Uttrakhand",
      category: ["River Cruise", "Escorted Tour"],
      days: "6 days - 5 nights",
      price: 18999,
      afterDiscount: 14999,
      rating: 3,
      reviews: 12,
    },
    {
      id: 5,
      tilte: "Kaziranga National Park",
      image: Ushuaia,
      location: "Kaziranga, Assam",
      category: ["Escorted Tour", "Wildlife"],
      days: "5 days - 4 nights",
      price: 21999,
      afterDiscount: 16999,
      rating: 4,
      reviews: 12,
    },
    {
      id: 6,
      tilte: "Lakshwadeep Island",
      image: Santiago,
      location: "Andretti, Lakshwadeep Island",
      category: ["River Cruise", "Wildlife"],
      days: "6 day - 5 night",
      price: 42999,
      afterDiscount: 39999,
      rating: 5,
      reviews: 18,
    },
    {
      id: 7,
      tilte: "Har ki dun Trek",
      image: Explorer,
      location: "Har ki dun, Valley in Uttrakhand",
      category: ["Escorted Tour", "Wildlife"],
      days: "8 days - 7 night",
      price: 8999,
      afterDiscount: 8599,
      rating: 4,
      reviews: 22,
    },
  ];

  return (
    <section className="popular">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1> Popular Activities </h1>
            </div>
          </Col>
        </Row>
        <Row>
        {populars.map((val, inx)=>{
          return(
          <Col  md={3} sm={6} xs={12} className="mb-5" key={inx}>
            <Card className="rounded-2 shadow-sm">
              <Card.Img
                variant="top"
                src={val.image}
                className="img-fluid"
                alt={"image"}
              />
              <Card.Body>
                <Card.Text>
                  <i className="bi bi-geo-alt"></i>
                  <span className="text">{val.location}</span>
                </Card.Text>
                <Card.Title> {val.tilte} </Card.Title>
                <p className="reviwe">
                  <span>
                    <i className="bi bi-star-fill me-1"></i>
                  </span>
                  <span>{val.rating} </span>
                  <span>( {val.reviews} reviews )</span>
                </p>
                {val.category.map((cat, index)=>{
                  return(
                    <span key={index} 
                    className={cat.replace(/ .*/, "") + " badge"}>{cat}</span>
                  )
                })}
                
              </Card.Body>

              <Card.Footer className="py-4">
                {val.afterDiscount ? (
                  <p className="text-decoration-line-through"> ₹{val.price.toFixed(2)}</p>
                ): ""}
               
                <Stack
                  direction="horizontal"
                  className="justify-content-between  mt-3"
                >
                  <p>
                    From <b>{val.afterDiscount ? val.afterDiscount.toFixed(2) : val.price.toFixed(2)}</b>
                  </p>
                  <p>
                  
                    <i className="bi bi-clock"></i> {val.days}
                  </p>
                </Stack>
              </Card.Footer>
            </Card>
          </Col>
        )
        })}
        </Row>
      </Container>
    </section>
  );
};

export default PopularPlace;