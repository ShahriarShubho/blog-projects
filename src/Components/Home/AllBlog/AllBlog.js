import React from 'react';
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const AllBlog = ({blog}) => {
    const { name, price, img, _id } = blog;
    return (
        <div data-aos="flip-right" className="col-lg-4 col-md-6 col-sm-12 my-5 cardResponsive">
        <Card className="cardStyle" style={{ width: "15rem", padding: "10px" }}>
          <Card.Img
            style={{ width: "100%", height: "220px" }}
            variant="top"
            src={img}
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>HappyElectro is the team of the project that is the more suspective</Card.Text>
            <div className="d-flex justify-content-between">
              <strong className="mr-1 text-primary">Price: ${price}</strong>
              <Button
                as={Link}
                to={"/product/" +_id}
                className="btn-sm"
                variant="primary"
              >
                Buy Now
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
};

export default AllBlog;