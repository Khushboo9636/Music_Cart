import React from 'react'
import styles from './Style.module.css'
import Footer from '../../components/LayoutPage/Footer/Footer'
import OrderPlaced from '../../components/OrderPlaced/OrderPlaced'
import img1 from '../../assets/music.png'
function PlaceOrder() {
  return (
    <div className={styles.main}>
      <section className={styles.inner}>
        <div className={styles.imageContainerParent}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image4Icon}
              loading="lazy"
              alt="logo"
              src={img1}
            />
            <div className={styles.title}>
              <div className={styles.musicart}>Musicart</div>
            </div>
          </div>
          <OrderPlaced/>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default PlaceOrder
