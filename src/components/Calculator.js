import React, { useState } from 'react';
import './Calculator.css';

const Calculator = ({ closeApp }) => { 
  const [display, setDisplay] = useState('');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);
    if (isNaN(inputValue)) return;

    if (operator === '+') {
      return firstOperand + inputValue;
    } else if (operator === '-') {
      return firstOperand - inputValue;
    } else if (operator === '*') {
      return firstOperand * inputValue;
    } else if (operator === '/') {
      return firstOperand / inputValue;
    } else {
      return inputValue;
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleEqual = () => {
    const result = performCalculation();
    if (!isNaN(result)) {
      setDisplay(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => inputDigit(7)}>7</button>
        <button onClick={() => inputDigit(8)}>8</button>
        <button onClick={() => inputDigit(9)}>9</button>
        <button onClick={() => handleOperator('/')}>÷</button>
        <button onClick={() => inputDigit(4)}>4</button>
        <button onClick={() => inputDigit(5)}>5</button>
        <button onClick={() => inputDigit(6)}>6</button>
        <button onClick={() => handleOperator('*')}>×</button>
        <button onClick={() => inputDigit(1)}>1</button>
        <button onClick={() => inputDigit(2)}>2</button>
        <button onClick={() => inputDigit(3)}>3</button>
        <button onClick={() => handleOperator('-')}>-</button>
        <button onClick={() => inputDigit(0)}>0</button>
        <button onClick={inputDecimal}>.</button>
        <button onClick={() => handleOperator('+')}>+</button>
        <button onClick={clearDisplay}>AC</button>
        <button onClick={handleEqual}>=</button> 
        <button onClick={closeApp}>Close</button> 
      </div>
    </div>
  );
};

export default Calculator;
