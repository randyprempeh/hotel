import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { HotelPage } from "./components/HotelPage";

export class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter basename="/hotel">
          <React.Fragment>
            <Route exact path="/" component={HomePage} />
            <Route path="/hotel/:id" component={HotelPage} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}
