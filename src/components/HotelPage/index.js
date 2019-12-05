import React from "react";
import "./style.css";

//DATA
import { hotels } from "../../data/hoteldata";
import { ViewAmenities } from "../ViewAll";
import MapContainer from "../MapContainer";

// eslint-disable-next-line

const SearchIcon2 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="gray"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-search"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export class HotelPage extends React.Component {
  state = {
    category: false,
    kids: false,
    adults: true,
    priceOffer: false,
    disOffer: true
  };

  discountOffers = () => {
    this.setState({ priceOffer: !this.state.priceOffer });
  };

  Maturity = () => {
    this.setState({ kids: !this.state.kids });
  };

  RoomCategory = () => {
    this.setState({ category: !this.state.category });
  };
  render() {
    return (
      <div className="hotel-container">
        {hotels
          .filter(hotel => {
            // eslint-disable-next-line
            return this.props.match.params.id == hotel.id;
          })
          .map((hotel, i) => {
            return (
              <div key={i}>
                <div className="package-intro">
                  <div
                    className="backspace"
                    onClick={this.props.history.goBack}
                  >
                    ←
                  </div>
                  <div className="room-default">
                    <p>Olschlege, {hotel.title}</p>
                    <span className="additional">
                      {hotel.bookingDate} /
                      {this.state.kids ? "Must be 18yrs" : "Adults"},{" "}
                      {this.state.category ? "2 Rooms" : "1 Room"}
                    </span>
                  </div>
                  <div className="search-icon_hotel">{SearchIcon2}</div>
                </div>
                <div className="hotel-item_view">
                  <img src={hotel.img} alt="" />
                </div>
                <div className="hotel-content">
                  <div className="hotel-item_add">
                    <h2>{hotel.title}</h2>
                    <p>{hotel.location}</p>
                  </div>
                  <div className="hotel-item_price">
                    {!this.state.priceOffer ? (
                      <div>
                        <h2>{hotel.rooms[0].disOffer}</h2>
                        <p id="offer_tag">
                          50% off{" "}
                          <span className="original_price">
                            {hotel.rooms[0].price}
                          </span>
                        </p>
                        <p>Inc. of all taxes</p>
                      </div>
                    ) : (
                      <div>
                        <h2>{hotel.rooms[0].price}</h2>
                        <p id="none_tag">
                          0% off <span>{hotel.rooms[0].price}</span>{" "}
                        </p>
                        <p>Inc. of all taxes</p>
                      </div>
                    )}
                  </div>
                </div>
                <ViewAmenities />
                <div className="hotel_view">
                  <p id="myth_location">
                    Location coordinates are not approximately correct as well
                    as the Hotel names, which were only created for this project
                  </p>
                  <MapContainer />
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
