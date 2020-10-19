import React from 'react'
import { scientificKeys } from '../utils'

const ScientificButton = () => {
  const renderScientificBtn = scientificKeys.map((k) => {
    return <button key={k} className="button-scientific" value={k} >{k}</button> 
  })
  return (
    <div className="scientific-div">
        {renderScientificBtn}
    </div>
  );
};

export default ScientificButton