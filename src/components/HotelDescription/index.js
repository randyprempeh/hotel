import React from "react";
import styled from "styled-components";

const HotelDetails = styled.p`
  font-size: 10px;
  color: #999999;
  margin-bottom: 5px;
  text-align: center;
`;

export const HotelDescription = props => {
  return !props.location && !props.locationImg && !props.title ? (
    ""
  ) : (
    <div className="hotel-desription">
      {!props.locationImg ? "" : <img src={props.locationImg} alt="loc-img" />}
      {!props.title ? "" : <h3>{props.title}</h3>}
      {!props.location ? "" : <HotelDetails>{props.location}</HotelDetails>}
      {props.children}
    </div>
  );
};
