import React from 'react'
import styles from './Style.module.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import img1 from '../../assets/head.png'
function Login() {
  return (
    <div className={styles.signInForm}>
      <section className={styles.signInFormInner}>
          <LoginForm/>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.musicartAll}>Musicart | All rights reserved</div>
      </footer>
    </div>

  )
}

export default Login
