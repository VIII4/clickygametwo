import React, { Component } from "react";
import "./style.css";

class ImageCard extends Component {
  state = {
    mouseOver: false,
  };
  //Method to call when card is clicked
  handleMouseOver = (event) => {
    this.setState({ mouseOver: true });
    console.log(this.state);
  };

  handleMouseExit = (event) => {
    this.setState({ mouseOver: false });
    console.log(this.state);
  };

  render() {
    let className = "card-img card-img-cstm";
    className += this.state.mouseOver === true ? " animated tada" : "";
    return (
      <div className="col mb-4">
        <div className="card text-center">
          <a
            href="#!"
            id={this.props.id}
            name={this.props.name}
            onClick={this.props.handleClick}
          >
            <img
              className={className}
              src={this.props.image}
              alt="?"
              onMouseOver={this.handleMouseOver}
              onMouseLeave={this.handleMouseExit}
            />
            <div
              className="card-img-overlay rgba-white-slight"
              id={this.props.id}
              name={this.props.name}
              onMouseOver={this.handleMouseOver}
              onMouseLeave={this.handleMouseExit}
            ></div>
          </a>
        </div>
      </div>
    );
  }
}

export default ImageCard;
