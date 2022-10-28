import React, { Children } from 'react'
import style from './style.module.css'

const Section = ({children}) => {
  return (
    <div className={style.wrapper}>{children}</div>
  )
}

export default Section