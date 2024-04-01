import React,{ useState, useEffect } from 'react'
import girl from '../../assets/girl.png'
import styles from './Style.module.css';
import img1 from '../../assets/music.png'
import search from '../../assets/search.png'
import WindowIcon from '@mui/icons-material/Window';
import mobileView from '../../assets/mobile.png'
import { ChevronDown } from 'react-feather';
import { Select, MenuItem, Button, Menu } from '@mui/material';
import Card from '../Card/Card';
import { Avatar } from '@mui/material'; 
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';




function HomePage() {
  const [items, setItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [headphoneType, setHeadphoneType] = useState('');
  const [company, setCompany] = useState('');
  const [colour, setColour] = useState('');
  const [price, setPrice] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [viewMode, setViewMode] = useState('gridView'); 
  

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const response = await fetch('https://music-cart-iwee.onrender.com/api/product/getallItems'); 
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  const handleHeadphoneTypeChange = (event) => {
    setHeadphoneType(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleColourChange = (event) => {
    setColour(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    handleClose(); // Close the menu after selecting an option
  };
  const toggleViewMode = () => {
    console.log("click")
    setViewMode((prevMode) => (prevMode === 'gridView' ? 'listView' : 'gridView')); // Toggle between grid and list view
  };
  return (
    <div>
        <div className={styles.mainContainer}>
            <section className={styles.mainChild}>
              <div className={styles.topContent}>
                <div className={styles.tag1}>
                    <img className={styles.imgIcon}
                    alt='logo'
                    src={img1}/>
              <div className={styles.musicartWrapper}>
                      <div className={styles.musicart}>Musicart</div>
             </div>
               <div className={styles.topHome}>
                   <div className={styles.home}>Home</div>
                 </div>
                
                </div>
             
              <div className={styles.bannerContent}>
                 <div className={styles.banner}>
                       <img src={girl}
                       alt='girl'
                       className={styles.girl}/>
                       <div className={styles.product}>
                        <div className={styles.productChild}/>
                           <div className={styles.grabUpContainer}>
                              <p className={styles.grabUp}>Grab upto 50% off on</p>
                              <p className={styles.selectedHeadphones}>Selected headphones</p>
                           </div>
                       </div>
                 </div>
              </div>
              <div className={styles.searchBarContainer}>
                <div className={styles.searchBar}>                <img className={styles.search_icon} src={search} alt='search'/>
                <input type="text" className={styles.searchInput} name=""
                            
                      placeholder="Search Your Products" />
                       
                
              </div>
              </div>
              <div className={styles.filterContent}>
                <div className={styles.leftSide}> 
                <WindowIcon onClick={toggleViewMode} />
                <img src={mobileView} alt='mobile' className={styles.mobileView} onClick={toggleViewMode}/>
                 </div>
                <div className={styles.middleSide}>
                  
                  
                    <Select
                       value={headphoneType}
                       onChange={handleHeadphoneTypeChange}
                           displayEmpty
                         renderValue={(selected) => {
                        if (!selected) {
                           return <p>Headphone type</p>;
                      }
                        return selected;
                       }}
                    style={{
                      top: '1px',
                       backgroundColor: 'silver',
                       borderRadius: '50px',
                       border: 'transparent',
                       fontFamily:'Roboto;',
                       height:"30px",
                      fontSize:"13px",
                      margin:"8px",
                      "&:hover":{
                        border:"none",
                      },
          
                       }}
                      
                   >
                <p style={{paddingLeft:"12px"}}>Features</p>
                <MenuItem  value="In-ear headphone"  sx={{
      "&:hover": {
        backgroundColor: "blue", 
      },
                }}>In-ear headphone</MenuItem>
                <MenuItem value="Over-ear" sx={{
                 "&:hover": {
                  backgroundColor: "blue", 
                   },
                 }}>Over-ear</MenuItem>
               <MenuItem value="On-ear" sx={{
              "&:hover": {
                 backgroundColor: "blue", 
                  },
                  }}>On-ear</MenuItem> 
                  </Select>
                    
                    {/* <Menu
                        anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                   onClose={handleClose}
                 anchorOrigin={{
                vertical: 'bottom',
                  horizontal: 'left',
                   }}
                transformOrigin={{
                   vertical: 'top',
                   horizontal: 'left',
                  }}
                     getContentAnchorEl={null}
                     style={{ top: '1px' }}
                 >
                  <MenuItem className={styles.featuredtitle}>Featured</MenuItem>
                <MenuItem onClick={handleClose}>In-ear headphone</MenuItem>
             <MenuItem onClick={handleClose}>Over-ear</MenuItem>
             <MenuItem onClick={handleClose}>On-ear</MenuItem>
                    </Menu> */}

                    
                    <Select
                        value={company}
                        onChange={handleCompanyChange}
                           displayEmpty
                         renderValue={(selected) => {
                        if (!selected) {
                           return <p>Company</p>;
                      }
                        return selected;
                       }}
                    style={{
                      top: '1px',
                       backgroundColor: 'silver',
                       borderRadius: '50px',
                       border: 'transparent',
                       fontFamily:'Roboto;',
                       height:"30px",
                      fontSize:"13px",
                      margin:"8px",
                      "&:hover":{
                        border:"none",
                      },
          
                       }}
                      
                   >
                <p style={{paddingLeft:"12px"}}>Features</p>
               <MenuItem  value="JBL"  sx={{
                         "&:hover": {
                                backgroundColor: "blue", 
                            },
                   }}>JBL</MenuItem>
                <MenuItem value="Sony" sx={{
                  "&:hover": {
                     backgroundColor: "blue", 
                        },
                  }}>Sony</MenuItem>
               <MenuItem value="Boat" sx={{
                    "&:hover": {
                     backgroundColor: "blue", 
                    },
                    }}>Boat</MenuItem>
                     <MenuItem value="Zebronics" sx={{
                    "&:hover": {
                     backgroundColor: "blue", 
                    },
                    }}>Zebronics</MenuItem>
                     <MenuItem value="MArshall" sx={{
                    "&:hover": {
                     backgroundColor: "blue", 
                    },
                    }}>Marshall</MenuItem>
                     <MenuItem value="ptron" sx={{
                    "&:hover": {
                     backgroundColor: "blue", 
                    },
                    }}>Ptron</MenuItem>
              </Select>
                    
               
                   
                    <Select
                      value={colour}
                      onChange={handleColourChange}
                           displayEmpty
                         renderValue={(selected) => {
                        if (!selected) {
                           return <p>Colour</p>;
                      }
                        return selected;
                       }}
                    style={{
                      top: '1px',
                       backgroundColor: 'silver',
                       borderRadius: '50px',
                       border: 'transparent',
                       fontFamily:'Roboto;',
                       height:"30px",
                      fontSize:"13px",
                      margin:"8px",
                      "&:hover":{
                        border:"none",
                      },
          
                       }}
                      
                   >
                <p style={{paddingLeft:"12px"}}>Features</p>
               <MenuItem  value="Blue"  sx={{
                top:"1px",
                "&:hover": {
                  backgroundColor: "blue", 
                  },
               }}>Blue</MenuItem>
                <MenuItem value="Black" sx={{
                  "&:hover": {
                   backgroundColor: "blue", 
                },
               }}>Black</MenuItem>
               <MenuItem value="white" sx={{
                    "&:hover": {
                   backgroundColor: "blue", 
                   },
                   }}>White</MenuItem>
                 <MenuItem value="Brown" sx={{
                         "&:hover": {
                     backgroundColor: "brown", 
                   },
                    }}>Brown</MenuItem>
                <MenuItem value="pink" sx={{
                       "&:hover": {
                    backgroundColor: "brown", 
                       },
                  }}>pink</MenuItem>
              </Select>
                    
                   
                    
                    <Select
                      value={price}
                      onChange={handlePriceChange}
                           displayEmpty
                         renderValue={(selected) => {
                        if (!selected) {
                           return <p>Price</p>;
                      }
                        return selected;
                       }}
                    style={{
                      top: '1px',
                       backgroundColor: 'silver',
                       borderRadius: '50px',
                       border: 'transparent',
                       fontFamily:'Roboto;',
                       height:"30px",
                      fontSize:"13px",
                      margin:"8px",
                      "&:hover":{
                        border:"none",
                      },
          
                       }}
                      
                   >
                <p style={{paddingLeft:"12px"}}>Featured</p>
               <MenuItem  value="zeroTo100"  sx={{
                 "&:hover": {
                 backgroundColor: "blue", 
                },
              }}>&#8377;0 - &#8377;1,000

              </MenuItem>
                 <MenuItem value="one" sx={{
               "&:hover": {
                  backgroundColor: "blue", 
                 },
               }}>&#8377;1,000 - &#8377;10,000</MenuItem>
               <MenuItem value="two" sx={{
                "&:hover": {
                 backgroundColor: "blue", 
             },
                }}>&#8377;10,000 - &#8377;20,000</MenuItem>
              </Select>
                    
                    
                  </div>
                <div className={styles.rightSide}>
                  <div className={styles.sorted}>
                  <Select
                       value={sortBy}
                       onChange={handleSortByChange}
                           displayEmpty
                         renderValue={(selected) => {
                        if (!selected) {
                           return <p>Sort By: Featured</p>;
                      }
                        return selected;
                       }}
                    style={{
                      top: '1px',
                       backgroundColor: 'silver',
                       borderRadius: '50px',
                       border: 'none',
                       fontFamily:'Roboto;',
                       height:"30px",
                      fontSize:"13px",
                      "&:hover":{
                        border:"none",
                      },
          
                       }}
                      
                   >
                <p style={{paddingLeft:"12px"}}>Featured</p>
               {/**/}
     <MenuItem  value="Price: Lowest"  sx={{
      top:"1px",
      "&:hover": {
        backgroundColor: "blue", 
      },
    }}>Price: Lowest</MenuItem>
                <MenuItem value="Price: Highest" sx={{
      "&:hover": {
        backgroundColor: "blue", 
      },
    }}>Price: Highest</MenuItem>
               <MenuItem value="Name(A-Z)" sx={{
      "&:hover": {
        backgroundColor: "blue", 
      },
    }}>Name(A-Z)</MenuItem>
    <MenuItem value="Name(Z-A)" sx={{
      "&:hover": {
        backgroundColor: "blue", 
      },
    }}>Name(Z-A)</MenuItem>
              </Select>
             
                    
                  </div>

                </div>
              </div>
              <div className={styles.allItems}>
              <div className={viewMode === 'gridView' ? styles.gridContainer : styles.listContainer}>
              {items.map((item) => (
              <Card
                key={item._id}
                title={item.productName} 
                price={item.price}
                colorOrType={`${item.color} | ${item.type}`} // Concatenate color and type
                image={item.defaultImage} 
                shortDescription={item.shortDescription}
          
               />
             ))}
              </div>
             </div>
              </div>           
            </section>
        </div>
        </div>
  );
}

export default HomePage
