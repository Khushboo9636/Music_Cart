import React  from 'react'
import styles from './Style.module.css'
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import img1 from '../../assets/music.png'
import img2 from '../../assets/bag.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

function ViewCartItem() {
    const [quantity, setQuantity] =useState('1');
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [datatotal, setDataTotal] =useState(null);

    const navigate = useNavigate(); 

    const handleChange = (event) => {
        setQuantity(event.target.value);
      };
      useEffect(() => {
        const fetchCart = async () => {
            try {
              const token = localStorage.getItem('token');
                const response = await fetch('https://music-cart-iwee.onrender.com/api/product/cart', {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch cart');
                }

                const data = await response.json();
                setCart(data.cart);
                setDataTotal(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        fetchCart();
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }
  return (
    <div className={styles.mainContainer}>
        <section className={styles.mainChild}>
          <div className={styles.myCartTitle}>
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
                  <button className={styles.backBtn} onClick={() => navigate('/')}>
                    <div className={styles.frameChild} />
                    <div className={styles.backToProducts}>
                      Back to products
                    </div>
                  </button>
               </div>
               </div>
                {/* loginpart */}
                <div className={styles.rightContent}>
                  {/* Render user avatar */}
                 
                  {/* Render cart image */}
                  <Link to="/viewCart" className={styles.cartButton}>
                    <ShoppingCartOutlinedIcon style={{paddingLeft:"10px",width:"18px", height:"18px"}}/><span> View cart </span>
                  </Link>
               </div>
            </div>
            <div className={styles.headingBox}>
              <div className={styles.itemImagePlaceholder}>
                <img
                  className={styles.bagIcon}
                  loading="lazy"
                  alt=""
                  src={img2}
                />
                <div className={styles.headingTitlel}>
                  <b className={styles.myCart}>My Cart</b>
                </div>
              </div>
            </div>
            <div className={styles.mainLeftSideContent}>
               <div className={styles.orderButton}>
                  <div className={styles.priceDisplay}>
                <div className={styles.priceDisplayInner}>
                  <div className={styles.subtotalDisplayParent}>
                    <div className={styles.subtotalDisplay}>
                        <div className={styles.Display} />
                        <div className={styles.shippingDisplay}>
                        {cart && cart.items.map(item => (
                          <div key={item._id}  className={styles.frameGroup}>
                            <div className={styles.itemImageContainer}>
                              <div className={styles.rectangleContainer}>
                                <div className={styles.frameInner} />
                                <img
                                  className={styles.image23Icon}
                                  loading="lazy"
                                  alt=""
                                  src={item.defaultImage}
                                />
                              </div>
                            </div>
                            <div className={styles.productdetailContainer}>
                              <div className={styles.productName}>
                                <div className={styles.nameTitle}>
                                  <div className={styles.sonyWhCh720n}>
                                    {item.productName}
                                  </div>
                                  <div className={styles.clourBlack}>
                                    Clour : {item.color}
                                  </div>
                                </div>
                                <div className={styles.inStock}>{item.availability}</div>
                              </div>
                            </div>
                            <div className={styles.paymentMethodLabelWrapper}>
                              <div className={styles.paymentMethodLabel}>
                                <div className={styles.price}>Price</div>
                                <div className={styles.div1}>₹{item.price}</div>
                              </div>
                            </div>
                            <div className={styles.quantityInput}>
                              <div className={styles.quantityParent}>
                              <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                              <NativeSelect
                              defaultValue={item.quantity}
                                inputProps={{
                                    name: 'age',
                                   id: 'uncontrolled-native',
                                    }}
                                  >
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                   <option value={3}>3</option>
                                   <option value={4}>4</option>
                                   <option value={5}>5</option>
                                   <option value={6}>6</option>
                                   <option value={7}>7</option>
                                   <option value={8}>8</option>
                                   </NativeSelect>
                                
                              </div>
                            </div>
                          
                            <div   className={styles.frameContainer}>
                              <div className={styles.totalParent}>
                                <div className={styles.total}>Total</div>
                                <div className={styles.div9}>₹{item.total}</div>
                              </div>
                            </div>
                          
                          </div>
                           
                            ))} 
                        </div>
                   </div>
                   <div className={styles.backToProductsButton}>
                        <div className={styles.backToProductsButtonChild} />
                        {datatotal && (
                        <div  className={styles.cartSummary}>
                          <div className={styles.itemPrice1}>
                            <div className={styles.item}>{datatotal.cart.totalCount} Item</div>
                            <div className={styles.div10}>₹{datatotal.totalAmount}</div>
                          </div>
                        </div>
                          )}
                      </div>
                </div> 
                </div>
                <div className={styles.sideline} />
                  </div>
                  <div className={styles.orderPlacementButton}>
                  {datatotal && (
                  <div   className={styles.frameParent1}>
                    <div className={styles.priceDetailsParent}>
                      <div className={styles.priceDetails}>PRICE DETAILS</div>
                      <div className={styles.mRPLabel}>
                        <div className={styles.convenienceFeeLabel}>
                          <div className={styles.totalAmount}>
                            <div className={styles.totalMrp}>Total MRP</div>
                            <div className={styles.discountAmountLabel}>
                              <div className={styles.discountOnMrp}>
                                Discount on MRP
                              </div>
                            </div>
                            <div className={styles.convenienceFee1}>
                              Convenience Fee
                            </div>
                          </div>
                        </div>
                        <div className={styles.paymentButton}>
                          <div className={styles.currencySymbol}>
                            <div className={styles.div11}>₹{datatotal.totalMRP}</div>
                            <div className={styles.div12}>₹{datatotal.totalDiscount}</div>
                          </div>
                          <div className={styles.div13}>₹{datatotal.totalConvenienceFee}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.musicartLogoParent}>
                    
                      <div  className={styles.musicartLogo}>
                  
                        <div className={styles.totalAmountWrapper}>
                        
                          <div className={styles.totalAmount1}>
                            Total Amount
                          </div>
                        </div>
                        <div className={styles.div14}>₹{datatotal.totalAmount}</div>
                     
                      </div>
                    
                      <button className={styles.groupButton}>
                        <div className={styles.frameChild6} />
                        <div className={styles.placeOrder} onClick={() => navigate('/checkout')}>PLACE ORDER</div>
                      </button>
                    </div>
                  </div>
                    )}
                </div>
              </div>

           </div>

         </div>        

         </section>
      
    </div>
  )
}

export default ViewCartItem
