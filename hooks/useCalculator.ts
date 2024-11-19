import { useEffect, useRef, useState } from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '/',
}

export const useCalculator = () => {
  const [formula, setformula] = useState('0');
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setformula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setformula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateResult();
    setPreviousNumber(`${subResult}`);
  }, [formula]);

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
    setformula('0');
    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.startsWith('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber(`-${number}`);
    }
  };

  const deleteLast = () => {
    if (number.length > 1) return setNumber(number.slice(0, -1));
    setNumber('0');
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    }

    setPreviousNumber(number);
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const substractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.divide:
        return num1 / num2;

      default:
        throw new Error(`Operation ${operation} not implemented`);
    }
  };

  const calculateFinalResult = () => {
    const result = calculateResult();
    console.log("result", result);
    lastOperation.current = undefined;
    setPreviousNumber('0');
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') return setNumber(number + numberString);

      if (numberString === '0' && number.includes('.'))
        return setNumber(number + numberString);

      if (numberString !== '0' && !number.includes('.'))
        return setNumber(numberString);

      if (numberString === '0' && !number.includes('.')) return;
    }

    setNumber(number + numberString);
  };

  return {
    formula,
    number,
    previousNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    substractOperation,
    addOperation,
    calculateResult,
    calculateFinalResult
  };
};
