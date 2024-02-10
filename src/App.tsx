import React, { useState } from 'react';
import './App.css';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('');

  const appendNumber = (number: string): void => {
    setDisplayValue((prevValue) => prevValue + number);
  };

  const appendOperator = (operator: string): void => {
    if (displayValue !== '') {
      setDisplayValue((prevValue) => prevValue + operator);
    }
  };

  const appendDot = (): void => {
    if (displayValue.indexOf('.') === -1) {
      setDisplayValue((prevValue) => prevValue + '.');
    }
  };

  const calculate = (): void => {
    try {
      const result: number = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const clearDisplay = (): void => {
    setDisplayValue('');
  };

  return (
    <div id="calculator">
      <input type="text" value={displayValue} readOnly />
      <br />
      <button onClick={() => appendNumber('7')}>7</button>
      <button onClick={() => appendNumber('8')}>8</button>
      <button onClick={() => appendNumber('9')}>9</button>
      <button onClick={() => appendOperator('/')}>/</button>
      <br />
      <button onClick={() => appendNumber('4')}>4</button>
      <button onClick={() => appendNumber('5')}>5</button>
      <button onClick={() => appendNumber('6')}>6</button>
      <button onClick={() => appendOperator('-')}>-</button>
      <br />
      <button onClick={() => appendNumber('1')}>1</button>
      <button onClick={() => appendNumber('2')}>2</button>
      <button onClick={() => appendNumber('3')}>3</button>
      <button onClick={() => appendOperator('+')}>+</button>
      <br />
      <button onClick={() => appendNumber('0')}>0</button>
      <button onClick={appendDot}>.</button>
      <button onClick={calculate}>=</button>
      <button onClick={clearDisplay}>C</button>
    </div>
  );
};

export default Calculator;