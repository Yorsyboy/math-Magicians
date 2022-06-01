import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';
import Navbar from './navbar';
import Footer from './footer';

const operators = ['÷', 'x', '-', '+', '='];
const digits = [
  'AC',
  '+/-',
  '%',
  '7',
  '8',
  '9',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  '0',
  '.',
];

const Calculator = () => {
  const [obj, calcObj] = useState({
    next: '',
    total: '',
    operation: '',
  });

  const handleClick = (btn) => {
    const { total, next, operation } = calculate(obj, btn);
    if (next === null && total === null) {
      calcObj({ next, total: '', operation });
    } else {
      calcObj({ next, total, operation });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="calc-group">
        <div className="desc">
          <p> Let&apos;s do some maths! </p>
          <img src="https://media.giphy.com/media/WMRb9p6N4mtIRtE2zr/giphy.gif" alt="gif" height="300" />
        </div>
        <div>
          <br />
          <br />
          <br />
          <ul className="calculator-body">
            <li className="calculator-screen">
              {obj.next || obj.total || '0'}
            </li>
            <li className="calculator-keyboard">
              <div className="calculator-digits">
                {digits.map((btn) => (
                  <button
                    onClick={() => handleClick(btn)}
                    type="button"
                    key={btn}
                  >
                    {btn}
                  </button>
                ))}
              </div>
              <div className="calculator-operators">
                {operators.map((btn) => (
                  <button
                    onClick={() => handleClick(btn)}
                    type="button"
                    key={btn}
                  >
                    {btn}
                  </button>
                ))}
              </div>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Calculator;
