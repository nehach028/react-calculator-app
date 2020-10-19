import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Button from './components/Button';
import { calculate } from './utils';
import ScientificButton from './components/ScientificButton';

const App = () => {
  const [result, setResult] = useState('0')
  const [history, setHistory] = useState([])
  const [prevKey, setPrevKey] = useState(0)
  const [currentKey, setCurrentKey] = useState(0)
  const [operator, setOperator] = useState('')

  const handleClick = (e) => {
    const { value } = e.target
    e.preventDefault()
    const num = parseFloat(result)
    if (value === 'C') {
      setResult('0')
      setPrevKey(0)
      setCurrentKey(0)
      setOperator('')
      return
    }
    if (value === '+') {
      if (operator !== '') {
        const total = calculate(operator, prevKey, currentKey)
        setPrevKey(parseFloat(total))
      } else {
        setPrevKey(num)
      }
      setOperator(value)
      setCurrentKey(0)

      return setResult((result + value).toString())
    }
    if (value === 'x') {
      if (operator !== '') {
        const total = calculate(operator, prevKey, currentKey)
        setPrevKey(parseFloat(total))
      } else {
        setPrevKey(num)
      }
      setOperator(value)
      setCurrentKey(0)
      return setResult((result + value).toString())
    }
    if (value === '÷') {
      if (operator !== '') {
        const total = calculate(operator, prevKey, currentKey)
        setPrevKey(parseFloat(total))
      } else {
        setPrevKey(num)
      }
      setOperator(value)
      setCurrentKey(0)
      return setResult((result + value).toString())
    }
    if (value === '-') {
      if (operator !== '') {
        const total = calculate(operator, prevKey, currentKey)
        setPrevKey(parseFloat(total))
      } else {
        setPrevKey(num)
      }
      setOperator(value)
      setCurrentKey(0)
      return setResult((result + value).toString())
    }
    if (value === '%') {
      setOperator(value)
      setPrevKey(num)
      setCurrentKey(0)
      setHistory([...history, (num / 100).toString()])
      return setResult((num / 100).toString())
    }
    if (value === '+/-') {
      let tempNum = num
      setOperator(value)
      setCurrentKey(0)
      return setResult((num > 0 ? -num : tempNum *= -1).toString())
    }
    if (value === '.') {
      setPrevKey(parseFloat((result + value).toString()))
      setCurrentKey(0)
      if (operator === '.') {
        setCurrentKey(parseFloat(currentKey + operator + value).toString())
      }
      setOperator(value)
      return setResult((result + value).toString());
    }
    if (value === '=') {
      let total = 0
      switch (operator) {
        case '+': total = prevKey + currentKey;
          break;
        case '-': total = prevKey - currentKey;
          break;
        case 'x': total = prevKey * currentKey;
          break;
        case '÷': total = prevKey / currentKey;
          break;
        default:
      }
      setOperator('')
      setHistory([...history, (result + value + total)])
      return setResult(total.toString())

    }
    setCurrentKey(parseFloat(currentKey + value))
    return num === 0 ? setResult(value.toString()) : setResult((result + value).toString())
  }
  useEffect(() => {
    setOperator(operator)
  }, [operator])

  const displayHistory = history.length > 0 ? <div><p>History</p>{history.map(h => <p key={h}>{h}<br /></p>)}</div> : ''
  
  return (
    <Fragment>
      {displayHistory}
      <div className="row">
        <div className="calculator-scientific">
          <ScientificButton />
        </div>
        <div className="calculator">
          <div className="display">{result}</div>
          <Button handleClick={handleClick} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
