import React from 'react'
import style from './Style.module.css'
import SignForm from '../../components/SignupForm/SignForm'

function Signup() {
  return (
    <div className={style.div}>
       
        <section className={style.content}>
           <SignForm/>
        </section>
        <footer className={style.footer}>
        <div className={style.footerChild} />
        <div className={style.musicartAll}>Musicart | All rights reserved</div>
      </footer>
    </div>
  )
}

export default Signup
