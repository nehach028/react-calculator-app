import React from 'react'
import { operators, specials, allKeys } from '../utils'

const Button = (props) => {
  const { handleClick } = props
  const renderNormalBtn = allKeys.map((k) => {
    const btnClass = k === 0 ? "zero" : ''
    if (operators.includes(k)) {
      return <button key={k} className="orange" value={k} onClick={e => handleClick(e)}>{k}</button>
    }
    if (specials.includes(k)) {
      return <button key={k} className="light-grey" value={k} onClick={e => handleClick(e)}>{k}</button>
    }
    return <button key={k} className={btnClass} value={k} onClick={e => handleClick(e)}>{k}</button>
  }
  )

  return (
    <div className="button-normal">{renderNormalBtn}</div>
  )
}

export default Button
