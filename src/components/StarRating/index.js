import React from "react";

export const StarRating = props => (
  <p className="star-rating">{!props.rating ? "" : starEngine(props.rating)}</p>
);

function starEngine(rating) {
  let fiveStars = [];
  let inactiveStars = 5 - rating;

  for (let i = 0; i < rating; i++) {
    fiveStars.push(
      <span key={i} id="active">
        *
      </span>
    );
  }

  for (let i = 0; i < inactiveStars; i++) {
    fiveStars.push(
      <span key={i + fiveStars} id="inactive">
        *
      </span>
    );
  }
  return fiveStars;
}
