import React from 'react'
import phone from '../../../assets/phone.png';
import styles from './Style.module.css'
function Navbar() {
  return (
    <header className={styles.mainContent}>
    <div className={styles.leftSide} />
    <div className={styles.phonelogo}>
      <img
        className={styles.phoneIcon}
        loading="lazy"
        alt=""
        src={phone}
      />
      <div className={styles.wrapper}>
        <div className={styles.phoneNum}>912121131313</div>
      </div>
    </div>
    <div className={styles.middleContent}>
      <div className={styles.middleItem}>
        <div className={styles.para}>
          <div className={styles.getOff}>Get 50% off on selected items</div>
        </div>
        <div className={styles.shopItem} />
        <div className={styles.shopNowWrapper}>
          <div className={styles.shopNow}>Shop Now</div>
        </div>
      </div>
    </div>
    <div className={styles.rightContainer}>
      <div className={styles.loginParent}>
        <h3 className={styles.login}>Login</h3>
        <div className={styles.lineWrapper}>
          <div className={styles.line} />
        </div>
        <div className={styles.signupWrapper}>
          <h3 className={styles.signup}>Signup</h3>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar
