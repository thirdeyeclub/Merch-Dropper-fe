import React, { Fragment } from "react";
import styled from "styled-components";
import heatherStone from "../../references/mockImages/heatherStone.jpg";

const modelA = heatherStone;
const Card = styled.div`
  width: 150px;
  height: 250px;
  background: white;
  border: solid #EEF2F4 1px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 165px;
  }
  .cardLabel {
    height: 85px;
    background: gray;
    border-radius:0 0 5px 5px;
    width: 100%

    p {

      text-align: center;
      font-family: roboto;
      color: #03133f;
      font-weight: 500
      display:flex;
    }
  }

`;

const ShirtCard = (props) => {
  return (
    <Fragment>
      <Card>
        <img src={modelA} alt="" />
        <div className="cardLabel">
          <h3>Army Ant</h3>
        </div>
      </Card>
    </Fragment>
  );
};

export default ShirtCard;
