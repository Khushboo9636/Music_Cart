import React, { useState } from 'react';
import cart from '../../assets/cart.png'
import styles from './Style.module.css';
import { Link } from 'react-router-dom'; //

function Card({ title, price, colorOrType, image,productId ,product, updateCartCount}) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  
  // const addToCart = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const userId = localStorage.getItem('userId');
  //     const response = await fetch('http://localhost:4000/api/product/cart/add', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`,// Assuming you store the user's token in local storage
  //       },
  //       body: JSON.stringify({
  //         userId, 
  //         productId,
  //         quantity: 1, 
  //       }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       console.log('Item added to cart:', data);
  //       setIsAddedToCart(true);
  //       updateCartCount(data.totalCount);
  //     } else {
  //       throw new Error(data.message);
  //       console.error('Failed to add item to cart:', data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error adding item to cart:', error);
  //   // Display the error message to the user
  //   alert(error.message);
  //   }
  // };
  const addToCart = async (productId, ) => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const response = await fetch('http://localhost:4000/api/product/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          productId,
           quantity: 1,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Item added to cart:', data);
        setIsAddedToCart(true);
        updateCartCount(data.totalCount);
      } else {
        console.error('Failed to add item to cart:', data.message);
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      alert(error.message);
    }
  };
  

  
    return (
          <div className={styles.CardContainer }>
          <section className={styles.CardImage}>
            <div className={styles.CardChild} />
            <div className={styles.CartItemImage}>
            <Link to={`/product/${productId}`} style={{textDecoration:"none"}}>
              <img className={styles.item} alt="images" src={image} />
                  </Link>
              <div className={styles.cartlogo} onClick={() => addToCart(productId)}>
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
            <Link to={`/product/${productId}`} style={{textDecoration:"none"}}>
              <div className={styles.cardTitle}>{title}</div>
            
              <div className={styles.cardPrice}>Price - ₹{price} </div>
              <div className={styles.colorOrType}>{colorOrType}</div>
              </Link>
            </div>
          </section>
          </div>
      
      );
}

export default Card
