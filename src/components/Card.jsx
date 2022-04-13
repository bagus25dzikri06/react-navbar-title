import React from "react";

const Card = (props) => {
  const cardRed = {
    backgroundColor: 'red'
  }, cardBlue = {
    backgroundColor: 'blue'
  };

  return (
    <>
      <div style={props.background === 'red' ? cardRed : cardBlue}>
        <h1>Card {`RP. ${props.harga}`}</h1>
      </div>
    </>
  );
};

export default Card;