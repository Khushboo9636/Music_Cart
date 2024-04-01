import React, { useState, useEffect } from 'react';
import styles from './Style.module.css'
import img1 from '../../assets/music.png'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function Product() {
  const { productId } = useParams();
  console.log(productId);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (newImage) => {
    setSelectedImage(newImage);
  };
  const handleMouseEnter = (newImage) => {
    setSelectedImage(newImage);
  };
  const renderStars = (rating) => {
    const stars = [];
    const fullStar = '\u2605'; // Full star Unicode character
    const halfStar = '\u2B50'; // Half star Unicode character
    const starStyle = { color: 'yellow' }; 
    const starStyle2 = { color: 'white' };// Define the color here
  
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<span key={i} style={starStyle}>{fullStar}</span>);
    }
  
    if (rating % 1 !== 0) {
      stars.push(<span key={rating} style={starStyle2}>{halfStar}</span>);
    }
  
    return stars;
  };
  
// const renderStars = (rating) => {
//   const stars = [];
//   const starStyle = { color: 'yellow' };
//   const halfStar = '\uFFED'; // Unicode character for half-filled star

//   for (let i = 0; i < Math.floor(rating); i++) {
//     stars.push(<i key={i} className="fa-regular fa-star" style={starStyle}></i>);
//   }

//   if (rating % 1 !== 0) {
//     stars.push(<i key={rating} className="fas fa-star-half-alt" style={starStyle}></i>);
//   }

//   return stars;
// };
  
  useEffect(() => {
    // Fetch product data from backend when the component mounts
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/product/item/${productId}`); // Update the URL with your backend endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const productData = await response.json();
        setProduct(productData);
        setSelectedImage(productData.defaultImage);
      } catch (error) {
        console.error('Error fetching product:', error);
        // Handle error as needed
      }
    };

    fetchProduct(); // Call the fetchProduct function
  }, [productId]); 
  return (
    <div className={styles.mainContainer}>
       <div className={styles.topHeader}>
               <div className={styles.topLeftContent}>
               <div className={styles.topLeftSide}>
                 <div className={styles.tag1}>
                    <img className={styles.imgIcon}
                    alt='logo'
                    src={img1}/>
                <div className={styles.musicartWrapper}>
                      <div className={styles.musicart}>Musicart</div>
               </div>
                 </div>
                 <div className={styles.topHome}>
                   <div className={styles.home}>Home/ page name</div>
                   
                 </div>
                </div>   
               <div className={styles.BackBtnContainer}>
                  <button className={styles.backBtn}>
                    <div className={styles.frameChild} />
                    <div className={styles.backToProducts}>
                      Back to products
                    </div>
                  </button>
               </div>
               </div>
              
                <div className={styles.rightContent}>
                  
                  <Link to="/viewCart" className={styles.cartButton}>
                    <ShoppingCartOutlinedIcon style={{paddingLeft:"10px",width:"18px", height:"18px"}}/><span> View cart </span>
                  </Link>
               </div>
      </div>
      {product ? (
      <div className={styles.mainbody}>
        <section className={styles.productDetailContainer}>
          <div className={styles.shortWrapper}>
            <div
              className={styles.shortDescription}
            >{product.shortDescription}</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.imageContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.image1Icon}
                  loading="lazy"
                  alt=""
                  src={selectedImage}
                />
              </div>
              <div className={styles.image24Parent}>
                <div className={styles.im1}>
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src={product.images[0]}
                  onClick={() => handleImageChange(product.images[0])}
                  onMouseEnter={() => handleMouseEnter(product.images[0])}
                /></div>
                <div className={styles.im2}>
                <img
                  className={styles.image3Icon}
                  loading="lazy"
                  alt=""
                  src={product.images[1]}
                  onClick={() => handleImageChange(product.images[1])}
                  onMouseEnter={() => handleMouseEnter(product.images[1])}
                /></div>
                <div className={styles.im3}>
                <img
                  className={styles.image4Icon}
                  loading="lazy"
                  alt=""
                  src={product.images[2]}
                  onClick={() => handleImageChange(product.images[2])}
                  onMouseEnter={() => handleMouseEnter(product.images[2])}
                />  </div>
              </div>
            </div>
            <div className={styles.deatilWrapper}>
              <div className={styles.detailDiv}>
                <div className={styles.productitle}>
                  <div className={styles.title}>{product.productName}</div>
                </div>
                <div className={styles.itemDescription}>
                  <div className={styles.product_rating}>
                    <div className={styles.imageParent}>
                    {renderStars(product.customerReview)}
                    </div>
                    <div className={styles.customerReviews}>
                      <div className={styles.customerReviews1}>
                        (50 Customer reviews)
                      </div>
                    </div>
                  </div>
                  <div className={styles.priceHeadphones}>
                    <div className={styles.price}>Price - ₹ {product.price}</div>
                  </div>
                </div>
                <div className={styles.productName}>
                  <div className={styles.blackOverEar}>
                    {product.color} | {product.type} headphone
                  </div>
                </div>
                <div className={styles.aboutContainer}>
                  <div className={styles.aboutThisItemContainer}>
                    <p className={styles.aboutThisItem}>About this item</p>
                    <ul className={styles.productNameContainer}>
                      <li className={styles.productname}>
                        {product.longDescription}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.availableAndBrand}>
                  <div className={styles.blackOverlay}>
                    <div className={styles.availableInContainer}>
                      <span className={styles.available}>{`Available - `}</span>
                      <span>{product.availability}</span>
                    </div>
                    <div className={styles.brandContainer}>
                      <span className={styles.brand}>{`Brand - `}</span>
                      <span>{product.brand}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <button className={styles.addToCartBtn}>
                    <div className={styles.frameItem} />
                    <div className={styles.addToCart}>Add to cart</div>
                  </button>
                </div>
                <div className={styles.frameWrapper2}>
                  <button className={styles.buyNowBtn}>
                    <div className={styles.frameInner} />
                    <div className={styles.buyNow}>Buy Now</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      ):( <div> Loading.... </div>)}
      
    </div>
  )
}

export default Product


