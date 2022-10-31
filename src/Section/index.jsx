import React from 'react'
import style from './style.module.css'

const Section = ({children, id, title}) => {
  return (
    <section id={id}>
      <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.wrapper}>
      {children}
      </div> 
      </div>
    </section>
  )
}

export default Section;
