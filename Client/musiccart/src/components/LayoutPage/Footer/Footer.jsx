import React from 'react'
import style from './Style.module.css'
function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style.footerChild} />
        <div className={style.musicartAll}>Musicart | All rights reserved</div>
      </footer>
  )
}

export default Footer
