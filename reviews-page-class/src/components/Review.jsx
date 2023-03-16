import React from "react";
import "../stylesheets/Review.css";

class Review extends React.Component {
  render() {
    return (
      <div className="review-container">
        <img
          className="review-img"
          src={require(`../img/testimonio-${this.props.image}.png`)}
          alt={`Picture of ${this.props.image}`}
        />
        <div className="text-container">
          <p className="name-review">
            <strong>{this.props.name}</strong> en {this.props.country}
          </p>
          <p className="work-position">
            {this.props.position} en <strong>{this.props.company}</strong>
          </p>
          <p className="review-text">{this.props.review}</p>
        </div>
      </div>
    );
  }
}

export default Review;
