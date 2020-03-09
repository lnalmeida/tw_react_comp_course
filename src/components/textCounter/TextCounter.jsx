import React, { useState, useEffect } from 'react'

import './textcounter.css'

const TextCounter = props => {
  const [atualChar, setAtualChar] = useState(0)
  const [maxChar, setMaxChar] = useState(1)

  useEffect(() => {
    const totalChar = parseInt(props.cols * props.rows)
    setMaxChar(totalChar)
  }, [])

  const onChangeText = e => {
    setAtualChar(e.target.value.length)
    if (atualChar >= maxChar) {
      e.target.value = e.target.value.substring(0, (maxChar - 1))
    }
  }
  return (
    <div className='textcounter'>
      <textarea onChange={onChangeText} cols={props.cols} rows={props.rows} />
      <span>{`${atualChar}/${maxChar}`}</span>
    </div>
  )
}

export default TextCounter
