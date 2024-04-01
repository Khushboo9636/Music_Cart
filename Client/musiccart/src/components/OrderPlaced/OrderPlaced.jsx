import React from 'react'
import styles from './Style.module.css'
function OrderPlaced() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.mainContentChild}>
        <div className={styles.frameChild} />
        <div className={styles.trophy}>
          <img
            className={styles.tropyIcon}
            loading="lazy"
            alt=""
            src="/confetti-1@2x.png"
          />
        </div>
        <div className={styles.message}>
          <div className={styles.successMessage}>
            <div className={styles.title}>
              Order is placed successfully!
            </div>
          </div>
          <div className={styles.para}>
            You will be receiving a confirmation email with order details
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.homebutton}>
            <div className={styles.frameItem} />
            <div className={styles.goBackTo}>Go back to Home page</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OrderPlaced
