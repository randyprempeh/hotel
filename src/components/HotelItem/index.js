import React from "react";
import { HotelDescription } from "../HotelDescription";
import { StarRating } from "../StarRating";

const Image = props => {
  return (
    <div className={props.imageClass}>
      <img src={props.img} alt="hotel preview" />
    </div>
  );
};

export class HotelItem extends React.Component {
  render() {
    return (
      <div
        className={
          !this.props.layout ? "hotel-item" : "hotel-item " + this.props.layout
        }
      >
        <Image img={this.props.img} imageClass="hotel-image" />
        <HotelDescription
          title={this.props.title}
          location={this.props.location}
          rating={this.props.rating}
        >
          <StarRating rating={this.props.rating} />
        </HotelDescription>
      </div>
    );
  }
}
