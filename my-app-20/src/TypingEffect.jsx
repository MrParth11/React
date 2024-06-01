import React, { Component } from 'react';
import Typed from 'typed.js'; // Importing directly from 'typed.js' library

class TypingEffect extends Component {
  componentDidMount() {
    const options = {
      strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
      typeSpeed: 50,
      loop: true
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <span
        ref={(el) => { this.el = el; }}
        className="typed"
      />
    );
  }
}

export default TypingEffect;
