import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator">
        <div className="output">
          <div className="output_view">
            <h1>0</h1>
          </div>
        </div>
        <div className="calculator_rows">
          <div className="calculator_row">
            <button type="button" className="calculator_greyButton">AC</button>
            <button type="button" className="calculator_greyButton">+/-</button>
            <button type="button" className="calculator_greyButton">%</button>
            <button type="button" className="calculator_orangeButton">÷</button>
          </div>
          <div className="calculator_row">
            <button type="button" className="calculator_greyButton">7</button>
            <button type="button" className="calculator_greyButton">8</button>
            <button type="button" className="calculator_greyButton">9</button>
            <button type="button" className="calculator_orangeButton">x</button>
          </div>
          <div className="calculator_row">
            <button type="button" className="calculator_greyButton">4</button>
            <button type="button" className="calculator_greyButton">5</button>
            <button type="button" className="calculator_greyButton">6</button>
            <button type="button" className="calculator_orangeButton ">—</button>
          </div>
          <div className="calculator_row">
            <button type="button" className="calculator_greyButton">1</button>
            <button type="button" className="calculator_greyButton">2</button>
            <button type="button" className="calculator_greyButton">3</button>
            <button type="button" className="calculator_orangeButton ">+</button>
          </div>
          <div className="calculator_row">
            <button type="button" className="calculator_greyButtonZero">0</button>
            <button type="button" className="calculator_greyButton">.</button>
            <button type="button" className="calculator_orangeButton">=</button>
          </div>
        </div>
      </div>
    );
  }
}
