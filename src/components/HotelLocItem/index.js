import React from "react";
import { HotelDescription } from "../HotelDescription";
import { StarRating } from "../StarRating";

export class HotelLocItem extends React.Component {
  render() {
    return (
      <div
        className={
          !this.props.layout
            ? "hotel-itemloc"
            : "hotel-itemloc" + this.props.layout
        }
      >
        <HotelDescription
          title={this.props.title}
          location={this.props.location}
          locationImg={this.props.locationImg}
        >
          <StarRating rating={this.props.rating} />
        </HotelDescription>
      </div>
    );
  }
}
