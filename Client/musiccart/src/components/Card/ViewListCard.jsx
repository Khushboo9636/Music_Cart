import React from 'react'
import cart from '../../assets/cart.png'
import styles from './Style.module.css'

function ViewListCard({ title, price, colorOrType, image,viewMode,shortDescription  }) {
    return (
        <div className={styles.ListCardContainer}>
        
          <section className={styles.CardImage}>
            <div className={styles.CardChild} />
            <div className={styles.CartItemImage}>
              <img className={styles.item} alt="images" src={image} />
              <div className={styles.cartlogo}>
                <img
                  className={styles.wrapperCart}
                  alt="cart"
                  src={cart}
                />
              </div>
            </div>
          </section>
          <section className={styles.descriptionWrapper}>
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>{title}</div>
              
              
              <div className={styles.short}>{shortDescription}</div>
          
              <div className={styles.cardPrice}>Price - ₹{price} </div>
              <div className={styles.colorOrType}>{colorOrType}</div>
             
              
            <button className={styles.viewDetailsButton}>View Details</button>
      
            </div>
          </section>
         
        </div>
      );
}

export default ViewListCard
