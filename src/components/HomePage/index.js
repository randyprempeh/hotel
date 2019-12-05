import React from "react";
import styled from "styled-components";
import FlipMove from "react-flip-move";
import { Link } from "react-router-dom";
import logo from "../../logo/oss.jpg";

// DATA
import { hotels } from "../../data/hoteldata";

// COMPONENTS
import { SearchBar } from "../SearchBar";
import { HotelList } from "../HotelList";
import { HotelItem } from "../HotelItem";
import { HotelLocItem } from "../HotelLocItem";
import conbgn from "../../images/mybgn.jpg";

const MenuIcon = styled.svg`
  width: 40px;
  height: 20px;
  cursor: pointer;
  margin-left: 150px;
`;

const Background = styled.section`
  background-image: url(${conbgn});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 50%;
`;

const Main = styled.section`
  padding: 30px 15px;
`;
const Title = styled.p`
  font-size: 13px;
  color: white;
  opacity: 2.5;
  line-height: 1.5;
  font-weight: 900;
`;

export class HomePage extends React.Component {
  state = {
    searchTerm: "",
    isSearching: false
  };
  searchHotels = search => {
    if (!search) {
      // if there is no searchterm in the searchbar, set isSearching to false and display the default layout
      this.setState({ isSearching: false });
    } else {
      // if there is a searchterm in the searchbar, change the state and display the results
      this.setState({ searchTerm: search, isSearching: true });
    }
  };

  render() {
    return (
      /* // eslint-disable-next-line */
      this.state.isSearching === true ? (
        <div className="container">
          <SearchBar
            searchFunction={this.searchHotels}
            placeholder="Search for Hotels"
          />
          <HotelList title="Search">
            <FlipMove>
              {hotels
                .filter(hotel => {
                  return hotel.title
                    .toLowerCase()
                    .includes(this.state.searchTerm.toLocaleLowerCase());
                })
                .map(hotel => (
                  <Link to={"/hotel/" + hotel.id}>
                    <HotelItem
                      key={hotel.id}
                      img={hotel.img}
                      title={hotel.title}
                      location={hotel.location}
                    />
                  </Link>
                ))}
            </FlipMove>
          </HotelList>
        </div>
      ) : (
        <div className="container">
          <Background>
            <div className="nav">
              <img src={logo} alt="logo" id="img-logo" />
              <div className="who">
                <h1>
                  O.Schlege <br />
                  <span id="brand-info">Hotels</span>
                </h1>
              </div>
              <MenuIcon viewBox="0 0 1024 896">
                <path
                  d="M27 130q-4-4-7-9t-4-10.5T15 98q0-19 12-31t31-12h913q19 0 31 
                   12t12 31-12 31.5-31 12.5H58q-19 0-31-12zm975 285q12 12 12 31t-12 31-31
                   12H58q-19 0-31-12-2-2-4-5t-3.5-6-2.5-6-1.5-6.5-.5-7.5q0-19 12-31t31-12h913q19 0 31
                   12zm0 347q12 12 12 31t-12 31.5-31 12.5H58q-19 0-31-12-2-2-3.5-4.5l-3-5-2.5-5-2-5.5-1-5.5V793q0-19
                   12-31t31-12h913q18 0 31 12z"
                  fill="white"
                />
              </MenuIcon>
            </div>

            <Main>
              <Title>
                {" "}
                Deutschland's Top Hotel Chain <br />
                Good rooms.Good services.Good prices.
              </Title>
              <SearchBar
                searchFunction={this.searchHotels}
                placeholder="Search for Hotels"
              />
            </Main>
          </Background>
          <HotelList title="Popular Cities">
            {hotels
              .filter(hotel => {
                return hotel.popularCities === true;
              })
              .map((hotel,i) => (
                <Link to={"/hotel/" + hotel.id} key={i}>
                  <HotelLocItem
                    key={hotel.id}
                    locationImg={hotel.locationImg}
                    location={hotel.location}
                  />
                </Link>
              ))}
          </HotelList>

          <HotelList title="Best Offers">
            {hotels
              .filter(hotel => {
                return hotel.bestOffers === true;
              })
              .map((hotel,i) => (
                <Link to={"/hotel/" + hotel.id} key={i}>
                  <HotelItem
                    key={hotel.id}
                    img={hotel.img}
                    title={hotel.title}
                    rating={hotel.rating}
                  />
                </Link>
              ))}
          </HotelList>
        </div>
      )
    );
  }
}
