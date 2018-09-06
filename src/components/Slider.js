import React from "react";
import "./slider.css";
import Image from "./Image";

class Slider extends React.Component {
  constructor() {
    super();

    this.state = {
      position: 0,
      style: {
        transform: "translateX(0px)"
      }
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  nextSlide(event) {
    event.preventDefault();
    let position = this.state.position;

    if (position === -2000 + 400) position = 0;
    else position -= 400;

    this.setState({
      position,
      style: {
        transform: `translateX(${position}px)`
      }
    });
  }

  previousSlide(event) {
    event.preventDefault();
    let position = this.state.position;

    if (position === 0) position = -1600;
    else position += 400;

    this.setState({
      position,
      style: {
        transform: `translateX(${position}px)`
      }
    });
  }
  render() {
    return (
      <div id="slider-container">
        <a className="nav" id="previous" onClick={this.previousSlide}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB/0lEQVRoQ+3YTU4bMRQH8Pcml4BFb1Cx5uMAqIuKsSNxAjZhgRChpAt2XYAUPlZwCTR+MuIGSC10U0F7hB6hLGOjQYmUBZB5z56Moybb2DP/n5/t8QzCjP9wxvPDHNB0BecV+F8qgFrrjvd+xzm3gIg/W61WryiKX6EDMI0phHme9xGxOx4WEZ8Gg8Ena+1tCKJuwKvhR4FLhPd+jYgepIg6Ae+GHwt8Q0SfUwNUDQ/Oub/W2g8pASqHH4b+QUSrqQC44QERtTGGUgCwwwPAHhGdS8OX/WIt4kbCxwI0Fj4GoNHwoYDGw4cAkggvBSQTXgJIKjwboJQ6BoAeY98O3ucn3avyc6Ddbi855zinxtrDsyqgtd723l9MGpHh/1MJzwLked5BxMuZBSilPgLA74qAstlUqlB5DZSJtNbfvPeHDESXiM4Y7dlNWYDy8KeUOmLuRLUiuICXdZMSQgIQIRBx3xhzyp4jEzpIAckgQgBJIEIBIgQAfCGikxjTKQagUUQsgBRxQET9kErEBEgRm0R0JUXEBrARiHhvjFlOCcBCpPhpcTSYVZ/Y10S0kVoFKiGcc/+yLFshoj+pAt6cTmV4AFi31n6Xhme90ITcZHgA3AKAXQBYBIC7LMu+FkXxGHjdaN9GQ3OI+9exjYrDSDrOAZJRi9lnXoGYoym51jMpKNsx9gutjgAAAABJRU5ErkJggg==" />
        </a>
        <div id="slider">
          <div id="slider-slides" style={this.state.style}>
            {this.props.images.map((slide, index) => {
              return <Image key={index} src={slide} />;
            })}
          </div>
        </div>
        <a className="nav" id="next" onClick={this.nextSlide}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACIklEQVRoQ+2ZPW4UQRCFX/VsBITIR7AIjbDICIgIp2uWjAAOAcZCQtgIycbIN3ACIkPb3QES5BAicQDLmRPkO3RZg3YlCxmmZ/pnvGgn3Zrq971XPX9LWPKDllw/VgBjJ7hK4L9IQGt9l4gOvPd3AJxWVXVojDkqARc9Qk3T3BeRzwCuXRRMRG+MMS9zQ0QBaK03lFLfReT6ZUJLQMQCfCWiB/9yOTdEFEBd17+UUmtdY5ITIgqAmX8AaDdu55ELIgqgaZqHIvKpU/28IAdEFECri5mfAng3FkQ0wBziGYCDMSCSAIwJkQyghdBabxHR25JJJAUYAyI5QGmILADzPfEcwH7uccoGUAoiK8AQCACvrLWvg5MLLYypY+ZtAHshPbz3fjKZ3JrNZsch9dkTWIjoAwHgibX2/TIDPLbWfrgyAH3cb0eIiNadcydXAqCP+FawiLxwzgXtl7Y+6x7oK56Ido0xOyHOL2qyAZQQny2BUuKzAJQUnxygtPikAGOITwYwlvgkAGOKjwZg5kcAPoZet4dc57t6R90HmPkngI2uRX47NeAmFdQ3pOhvNcx8BuBmV49c4qNHSGsd8nG39+NBlyEXf48aofbzuoh8U0rduGzRnM4nexaq6/peVVVf/vyPQER2nHO7fdwcUhuVwGLB6XR623u/773fVEqdAjgMfSEZIjrZCMUunuL8JAmkEDK0xwpgqHOpzlslkMrJoX3OAdTb3DGtIXT+AAAAAElFTkSuQmCC" />
        </a>
      </div>
    );
  }
}

export default Slider;
