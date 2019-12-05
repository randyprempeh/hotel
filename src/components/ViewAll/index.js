import React from "react";
import { Aircon } from "../Ac";
import { Toileteries } from "../Toileteries";
import { Breakfast } from "../Breakfast";
import { Tv } from "../Tv";
import { Wifi } from "../Wifi";
import { Gym } from "../Gym";
import { SwimmingPool } from "../SwimmingPool";
import "./style.css";

export class ViewAmenities extends React.Component {
  state = {
    tv: false,
    wifi: true,
    breakfast: true, // breakfast = true , false = all inclusive
    aircondition: false,
    toileteries: true,
    swimmingPool: true,
    gym: true
  };

  // hotel Service functions
  tvService = () => {
    this.setState({ tv: !this.state.tv });
  };
  wifiService = () => {
    this.setState({ wifi: !this.state.wifi });
  };
  tv = () => {
    this.setState({ tv: !this.state.tv });
  };
  breakfastService = () => {
    this.setState({ breakfast: this.state.breakfast });
  };
  airconditionService = () => {
    this.setState({ aircondition: !this.state.aircondition });
  };

  TService = () => {
    this.setState({ toileteries: !this.state.toileteries });
  };
  GymService = () => {
    this.setState({ gym: !this.state.gym });
  };
  poolService = () => {
    this.setState({ swimmingPool: !this.state.swimmingPool });
  };

  render() {
    return (
      <div>
        <div className="hotel_Package">
          <h2>Free Assured Amenities</h2>
          <div className="hotel_amenities">
            {!this.state.airconditionService ? (
              <div className="pack air-con">
                <p>{Aircon}</p>
                <h4>AC</h4>
              </div>
            ) : (
              <div className="pack">
                {!this.state.poolService}
                <p>{SwimmingPool}</p>
                <h4>Pool</h4>
              </div>
            )}
            {!this.state.TService ? (
              <div className="pack Toileteries">
                <p>{Toileteries}</p>
                <h4>Toiletries</h4>
              </div>
            ) : (
              <div className="pack Gym">
                <p>{Gym}</p>
                <h4>Gym</h4>
              </div>
            )}
            {this.state.breakfastService ? (
              <div className="pack breakfast">
                <p>{Breakfast}</p>
                <h4>Breakfast</h4>
              </div>
            ) : (
              <div className="pack Gym">
                {!this.state.GymService}
                <p>{Gym}</p>
                <h4>Gym</h4>
              </div>
            )}
            {!this.state.tvService ? (
              <div className="pack tv">
                <p>{Tv}</p>
                <h4>TV</h4>
              </div>
            ) : (
              <div className="pack">
                <p>{Gym}</p>
                <h4>Gym</h4>
              </div>
            )}
            {!this.state.wifiService ? (
              <div className="pack wifi">
                <p>{Wifi}</p>
                <h4>Wifi</h4>
              </div>
            ) : (
              <div className="pack">
                <p>{Gym}</p>
                <h4>Gym</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
