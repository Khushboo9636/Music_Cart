import React from 'react'
import styles from './Style.module.css';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import img1 from '../../assets/music.png'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
function CheckOutPage() {
  const navigate = useNavigate(); 
  return (
   
      <div className={styles.inner}>
        <section className={styles.frameParent}>
          <div className={styles.frameGroup}>
           
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
            
            <div className={styles.checkoutWrapper}>
              <div className={styles.checkout}>Checkout</div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.deliveryAddressParent}>
                <div className={styles.deliveryAddress}>
                  <ol className={styles.deliveryAddress1}>
                    <li>Delivery address</li>
                  </ol>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.akashPatelWrapper}>
                    <h2 className={styles.akashPatel}>Akash Patel</h2>
                  </div>
                  <div className={styles.rectangleGroup}>
                    <input className={styles.frameItem} type="text" />
                    <div className={styles.rectangleContainer}>
                      <div className={styles.frameInner} />
                      <div className={styles.kkHhNagarContainer}>
                        <p className={styles.p}>104</p>
                        <p className={styles.kkHhNagar}>kk hh nagar, Lucknow</p>
                        <p className={styles.uttarPradesh226025}>
                          Uttar Pradesh 226025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.lineParent}>
                  <div className={styles.lineDiv} />
                  <div className={styles.frameParent5}>
                    <div className={styles.paymentMethodWrapper}>
                      <div className={styles.paymentMethod}>
                        <ol className={styles.paymentMethod1}>
                          <li>Payment method</li>
                        </ol>
                      </div>
                    </div>
                    <div className={styles.rectangleParent1}>
                      <div className={styles.rectangleDiv} />
                      <div className={styles.modeOfPayment}>
                        Mode of payment
                      </div>
                      <div className={styles.mingcutedownLineWrapper}>
                        <img
                          className={styles.mingcutedownLineIcon}
                          alt=""
                          src="/mingcutedownline.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameChild1} />
              </div>
              <div className={styles.continueButtonParent}>
                <div className={styles.continueButton}>
                  <div className={styles.reviewItemsAndContainer}>
                    <ol className={styles.reviewItemsAndDelivery}>
                      <li>Review items and delivery</li>
                    </ol>
                  </div>
                </div>
                <div className={styles.productLogo}>
                  <div className={styles.colorPicker}>
                    <div className={styles.orderItemsParent}>
                      <div className={styles.orderItems}>
                        <div className={styles.subtotal}>
                          <div className={styles.groupDiv}>
                            <div className={styles.frameChild2} />
                            <img
                              className={styles.image23Icon}
                              loading="lazy"
                              alt=""
                              src="/image-23@2x.png"
                            />
                          </div>
                        </div>
                        <div className={styles.rectangleParent2}>
                          <div className={styles.frameChild3} />
                          <img
                            className={styles.image23Icon1}
                            alt=""
                            src="/image-23-1@2x.png"
                          />
                          <img
                            className={styles.image24Icon}
                            loading="lazy"
                            alt=""
                            src="/image-24@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.orderItems1}>
                        <div className={styles.orderItemsInner}>
                          <div className={styles.rectangleParent3}>
                            <div className={styles.frameChild4} />
                            <img
                              className={styles.image23Icon2}
                              alt=""
                              src="/image-23-2@2x.png"
                            />
                            <img
                              className={styles.image13Icon}
                              loading="lazy"
                              alt=""
                              src="/image-13@2x.png"
                            />
                          </div>
                        </div>
                        <div className={styles.rectangleParent4}>
                          <div className={styles.frameChild5} />
                          <img
                            className={styles.image23Icon3}
                            loading="lazy"
                            alt=""
                            src="/image-23-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.paymentMethods}>
                      <div className={styles.paymentMethodsInner}>
                        <div className={styles.rectangleParent5}>
                          <div className={styles.frameChild6} />
                          <img
                            className={styles.image23Icon4}
                            loading="lazy"
                            alt=""
                            src="/image-23-4@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.rectangleParent6}>
                        <div className={styles.frameChild7} />
                        <img
                          className={styles.image23Icon5}
                          alt=""
                          src="/image-23-5@2x.png"
                        />
                        <img
                          className={styles.image25Icon}
                          loading="lazy"
                          alt=""
                          src="/image-25@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.productImage}>
                    <div className={styles.brandName}>
                      <div className={styles.sonyWhCh720n}>Sony WH-CH720N</div>
                    </div>
                    <div className={styles.blackColor}>
                      <div className={styles.clourBlack}>Clour : Black</div>
                    </div>
                    <div className={styles.estimatedDeliveryContainer}>
                      <p className={styles.estimatedDelivery}>
                        Estimated delivery :
                      </p>
                      <p className={styles.mondayFree}>
                        Monday — FREE Standard Delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent7}>
              <div className={styles.frameChild8} />
              <button className={styles.groupButton}>
                <div className={styles.frameChild9} />
                <div className={styles.placeYourOrder}>Place your order</div>
              </button>
              <div className={styles.paymentArea}>
                <div className={styles.totalSummaryLabel}>
                  <div className={styles.agreementCheckbox}>
                    <div className={styles.byPlacingYourContainer}>
                      <p className={styles.byPlacingYour}>
                        By placing your order, you agree to Musicart privacy
                      </p>
                      <p className={styles.noticeAndConditions}>
                        notice and conditions of use.
                      </p>
                    </div>
                  </div>
                  <div className={styles.totalSummaryLabelChild} />
                </div>
                <div className={styles.orderCompleteLabel}>
                  <div className={styles.orderSummary}>Order Summary</div>
                </div>
                <div className={styles.thankYouMessage}>
                  <div className={styles.homepageHeader}>
                    <div className={styles.itemsParent}>
                      <div className={styles.items}>{`Items : `}</div>
                      <div className={styles.delivery}>{`Delivery : `}</div>
                    </div>
                    <div className={styles.parent}>
                      <div className={styles.div1}>₹3500.00</div>
                      <div className={styles.div2}>₹45.00</div>
                    </div>
                  </div>
                </div>
                <div className={styles.priceLabel} />
                <div className={styles.totalAmountLabel}>
                  <div className={styles.paymentOptionIcon}>
                    <div className={styles.orderTotal}>{`Order Total : `}</div>
                    <div className={styles.netbankingIcon}>
                      <div className={styles.div3}>₹3545.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.placeOrderButtonParent}>
            <div className={styles.placeOrderButton} />
            <div className={styles.rectangleParent8}>
              <div className={styles.frameChild10} />
              <button className={styles.rectangleParent9}>
                <div className={styles.frameChild11} />
                <div className={styles.placeYourOrder1}>Place your order</div>
              </button>
              <div className={styles.orderTotalContainer}>
                <p className={styles.orderTotal1}>Order Total : ₹3545.00</p>
                <p className={styles.byPlacingYour1}>
                  By placing your order, you agree to Musicart privacy notice
                  and conditions of use.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    
  )
}

export default CheckOutPage
