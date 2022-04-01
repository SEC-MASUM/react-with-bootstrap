import React from "react";
import { CardGroup } from "react-bootstrap";
import Card2 from "../Card2/Card2";

const CardGroup2 = () => {
  const products = [
    { id: 1, name: "Laptop Pro", price: 134000 },
    { id: 1, name: "Laptop Pro", price: 134000 },
    { id: 1, name: "Laptop Pro", price: 134000 },
  ];
  return (
    <div>
      <CardGroup>
        {products.map((product) => (
          <Card2 product={product}></Card2>
        ))}
      </CardGroup>
    </div>
  );
};

export default CardGroup2;
