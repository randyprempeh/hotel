import React from "react";
import styled from "styled-components";

const HotelContainer = styled.div`
display: flex;
margin-bottom: 10px;
padding: 15px;
overflow-x: scroll;
-webkit-overflow-scrolling: touch;

&::-webkit-scrollbar {
    display: none:
}
`;

const Hotelheader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;

  & h2 {
    text-transform: uppercase;
    font-size: 17px;
    line-height: 2;
  }

  & a {
    font-size: 10px;
    color: blue;
    margin: 0;
  }

  /*   &::after{
    content: "";
    width: 30px;
    position: absolute;
    top: 56%;
    left: 27%;
    border-top: 2px solid black;
    margin-top:5px;
  } */
`;

export class HotelList extends React.Component {
  initialScroll = 0;
  deltaScroll = 0;
  scrolling = false;

  mouseDown = event => {
    this.initialScroll = event.nativeEvent.x;
    this.scrolling = true;

    console.log(this.initialScroll);

    console.log();
  };

  mouseUp = events => {
    this.scrolling = false;
    console.log(this.scrolling);
  };

  mouseMove = event => {
    if (this.scrolling) {
      this.deltaScroll = event.nativeEvent.x;
      event.target.scrollLeft = this.initialScroll - this.deltaScroll;
    }
  };

  render() {
    return (
      <section className="hotel-list">
        <Hotelheader className="book-list header">
          <h2 className="pop-title">{this.props.title}</h2>
          <a href="">View all</a>
        </Hotelheader>
        <hr id="horizontal"></hr>
        <small className="indepth-info">50 Cities, 250 Hotels & growing</small>
        <HotelContainer
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          onMouseMove={this.mouseMove}
          className="hotel-list-container"
        >
          {this.props.children}
        </HotelContainer>
      </section>
    );
  }
}
