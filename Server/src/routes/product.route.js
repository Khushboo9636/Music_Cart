const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const { Product, Cart, Order,Feedback   } = require('../models/Product.model')
const isAuthenticated = require('../middleware/cartAuth.js')
router.post('/create', async (req, res) => {
    try {
        // Extract product details from the request body
        const { productName, price, color, type,brand, shortDescription, longDescription, customerReview, availability, images ,defaultImage} = req.body;

        // Create a new product instance
        const newProduct = new Product({
            productName,
            price,
            color,
            type,
            brand,
            shortDescription,
            longDescription,
            customerReview,
            availability,
            images,defaultImage
        });

        // Save the product to the database
        await newProduct.save();

        res.status(201).json({ success: true, message: 'Product added successfully', product: newProduct });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});


router.get('/getallItems', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
// Route to get a single product by ID
router.get('/item/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
// Route to search products based on product name
router.get('/search', async (req, res) => {
    try {
      const { query } = req.query;
      const products = await Product.find({ name: { $regex: query, $options: 'i' } });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
 
// Route to filter products based on company name
router.get('/products/filterByCompany', async (req, res) => {
    try {
      const { company } = req.query;
      const products = await Product.find({ company });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Route to filter products based on headphone type
  router.get('/products/filterByHeadphoneType', async (req, res) => {
    try {
      const { headphoneType } = req.query;
      const products = await Product.find({ headphoneType });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Route to filter products based on color
  router.get('/products/filterByColor', async (req, res) => {
    try {
      const { color } = req.query;
      const products = await Product.find({ color });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Route to filter products based on price range, lowest to highest
  router.get('/products/filterByPriceRangeLowToHigh', async (req, res) => {
    try {
      const { minPrice, maxPrice } = req.query;
      const products = await Product.find({ price: { $gte: minPrice, $lte: maxPrice } }).sort({ price: 1 });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Route to filter products based on price range, highest to lowest
  router.get('/products/filterByPriceRangeHighToLow', async (req, res) => {
    try {
      const { minPrice, maxPrice } = req.query;
      const products = await Product.find({ price: { $gte: minPrice, $lte: maxPrice } }).sort({ price: -1 });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  // Route to sort products based on name, A-Z
router.get('/products/sortByNameAZ', async (req, res) => {
    try {
      const products = await Product.find().sort({ name: 1 });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Route to sort products based on name, Z-A
  router.get('/products/sortByNameZA', async (req, res) => {
    try {
      const products = await Product.find().sort({ name: -1 });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //


// // POST route to add item to cart
// router.post('/cart/add', isAuthenticated, async (req, res) => {
//   try {
//       const { userId, product, quantity } = req.body;

//       // Check if the required fields are provided
//       if (!userId || !product || !quantity) {
//           return res.status(400).json({ message: 'UserId, productId, and quantity are required.' });
//       }

//       // Find the product to add to the cart
//       //const product = await Product.findById(productId);

//       // if (!product) {
//       //     return res.status(404).json({ message: 'Product not found.' });
//       // }

//       // Find the user's cart or create a new one if it doesn't exist
//       let cart = await Cart.findOne({ user: userId });

//       if (!cart) {
//           cart = new Cart({ user: userId, items: [] });
//       }
//       const existingItemIndex = cart.items.findIndex(item => item.product._id.toString() === product._id);

    
//       if (existingItemIndex !== -1) {
//         // If the product already exists in the cart, update the quantity
//         cart.items[existingItemIndex].quantity += quantity;

//     } else {
//         // Add the product to the cart if it doesn't exist
//         cart.items.push({ product: product, quantity });
//     }

//     // Calculate the total count of items in the cart
//     let totalCount = 0;
//     for (const item of cart.items) {
//         totalCount += item.quantity;
//     }
//       // Save the cart to the database
//       await cart.save();

//       res.status(201).json({ message: 'Item added to cart successfully.', cart,totalCount });
//   } catch (error) {
//       console.error('Error adding item to cart:', error.message);
//       res.status(500).json({ message: 'Internal server error.' });
//   }
// });

// // POST route to add item to cart
// router.post('/cart/add', isAuthenticated, async (req, res) => {
//   try {
//     const { userId, productId, product, quantity } = req.body;
//     console.log(product);


//     // Check if the required fields are provided
//     if (!userId || !productId || !product || !quantity) {
//       return res.status(400).json({ message: 'UserId, productId, product, and quantity are required.' });
//     }

//     // Find the user's cart or create a new one if it doesn't exist
//     let cart = await Cart.findOne({ user: userId });

//     if (!cart) {
//       cart = new Cart({ user: userId, items: [] });
//     }

//     const existingItemIndex = cart.items.findIndex(item => item.product._id.toString() === productId);

//     if (existingItemIndex !== -1) {
//       // If the product already exists in the cart, update the quantity
//       const newQuantity = cart.items[existingItemIndex].quantity + quantity;
//       if (newQuantity > 8) {
//         throw new Error('Maximum quantity limit (8) exceeded for this product');
//       }
//       cart.items[existingItemIndex].quantity = newQuantity;
//     } else {
//       // Add the product to the cart if it doesn't exist
//       cart.items.push({ product, productId, quantity });
//     }

//     // Calculate the total count of items in the cart
//     let totalCount = 0;
//     for (const item of cart.items) {
//       totalCount += item.quantity;
//     }

//     // Save the cart to the database
//     await cart.save();

//     res.status(201).json({ message: 'Item added to cart successfully.', cart, totalCount });
//   } catch (error) {
//     console.error('Error adding item to cart:', error.message);
//     res.status(500).json({ message: 'Internal server error.' });
//   }
// });
// POST route to add item to cart
router.post('/cart/add', isAuthenticated , async (req, res) => {
  try {

    const { userId, productId, quantity } = req.body;
    
    // Check if the required fields are provided

    if (!userId || !productId || !quantity) {
      return res.status(400).json({ message: 'UserId, productId, and quantity are required.' });
    }

    // Find the product to add to the cart and populate all its fields

    const product = await Product.findById(productId).populate('defaultImage productName price color type brand availability');

    if (!product) {

      return res.status(404).json({ message: 'Product not found.' });

    }

    // Find the user's cart or create a new one if it doesn't exist
    let cart = await Cart.findOne({ user: userId }).populate('items.product');

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingItem = cart.items.find(item => item.product._id.toString() === productId);

    if (existingItem) {

      // If the product already exists in the cart, update the quantity
      const newQuantity = existingItem.quantity + quantity;

      if (newQuantity > 8) {
        throw new Error('Maximum quantity limit (8) exceeded for this product');
      }

      existingItem.quantity = newQuantity;

    } else {

      // Add the product to the cart if it doesn't exist
      cart.items.push({ product, quantity });

    }

    // Calculate the total count of items in the cart

    let totalCount = 0;

    for (const item of cart.items) {

      totalCount += item.quantity;

    }

    // Save the cart to the database
    await cart.save();

    res.status(201).json({ message: 'Item added to cart successfully.', cart,totalCount });

  } catch (error) {

    console.error('Error adding item to cart:', error.message);

    res.status(500).json({ message: 'Internal server error.' });

  }
});


// GET route to view items in cart
// router.get('/cart', isAuthenticated, async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const cart = await Cart.findOne({ user: userId }).populate('items.product');

//     if (!cart) {
//       return res.status(404).json({ success: false, error: 'Cart not found' });
//     }

//     let totalMRP = 0;
//     let totalDiscount = 0;
//     let totalConvenienceFee = 0;
//     let totalAmount = 0;

//     const itemsWithDetails = cart.items.map(item => {
//       const { _id, productName, price, color, availability, quantity } = item.product;
//       const total = price * quantity;

//       totalMRP += total;
//       totalDiscount += (price * quantity * (item.product.discountPercentage || 0)) / 100;
//       totalConvenienceFee += (item.product.convenienceFee || 0) * quantity;

//       return {
//         _id,
//         productName,
//         price,
//         color,
//         availability,
//         quantity,
//         total,
//         defaultImage: item.product.defaultImage,
//         customerReview: item.product.customerReview,
//         images: item.product.images
//       };
//     });

//     totalAmount = totalMRP - totalDiscount + totalConvenienceFee;

//     res.status(200).json({
//       success: true,
//       cart: {
//         items: itemsWithDetails,
//         totalCount: cart.items.length
//       },
//       totalMRP,
//       totalDiscount,
//       totalConvenienceFee,
//       totalAmount
//     });
//   } catch (error) {
//     console.error('Error fetching cart:', error);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });

router.get('/cart', isAuthenticated, async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId }).populate('items.product');

    if (!cart) {
      return res.status(404).json({ success: false, error: 'Cart not found' });
    }

    let totalMRP = 0;
    let totalDiscount = 0;
    let totalConvenienceFee = 45;
    let totalAmount = 0;

    const itemsWithDetails = cart.items.map(item => {
      const { _id, productName, price, color, availability } = item.product;
      const total = price * item.quantity; // Calculate total for each item
      const quantity = item.quantity; // Get quantity of the product

      totalMRP += total;
      totalDiscount += (price * item.quantity * (item.product.discountPercentage || 0)) / 100;
      totalConvenienceFee += (item.product.convenienceFee || 0) * item.quantity;

      return {
        _id,
        productName,
        price,
        color,
        availability,
        quantity, // Include quantity property
        total,
        defaultImage: item.product.defaultImage,
        customerReview: item.product.customerReview,
        images: item.product.images
      };
    });

    totalAmount = totalMRP - totalDiscount + totalConvenienceFee;

    res.status(200).json({
      success: true,
      cart: {
        items: itemsWithDetails,
        totalCount: cart.items.length
      },
      totalMRP,
      totalDiscount,
      totalConvenienceFee,
      totalAmount
    });
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});


//update quantity in cart
router.put('/cart/:id', isAuthenticated, async (req, res) => {
    try {
        const userId = req.user.id;
        const productId = req.params.productId;
        const { quantity } = req.body;

        // Check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        // Find the user's cart
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            return res.status(404).json({ success: false, error: 'Cart not found' });
        }

        // Check if the product already exists in the cart
        const existingItem = cart.items.find(item => item.product.toString() === productId);

        if (!existingItem) {
            return res.status(404).json({ success: false, error: 'Product not found in cart' });
        }

        // Update the quantity
        existingItem.quantity = quantity;

        // Save the updated cart
        await cart.save();

        res.status(200).json({ success: true, message: 'Cart updated successfully', cart });
    } catch (error) {
        console.error('Error updating cart:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});


// Route to place an order
router.post('/order/place', isAuthenticated, async (req, res) => {
    try {
        const { deliveryAddress, paymentMethod } = req.body;

        // Get cart items for the user
        const cartItems = await Cart.find({ user: req.user._id }).populate('product');

        // Calculate total price
        let totalPrice = 0;
        for (const cartItem of cartItems) {
            totalPrice += cartItem.product.price * cartItem.quantity;
        }

        // Create new order
        const order = new Order({
            user: req.user._id,
            items: cartItems.map(item => ({ product: item.product._id, quantity: item.quantity })),
            deliveryAddress,
            paymentMethod,
            totalPrice,
            status: 'Placed', // Set initial status to "Placed"
            orderDate: new Date()
        });

        // Save the order
        await order.save();

        // Clear the user's cart after placing the order
        await Cart.deleteMany({ user: req.user._id });

        res.json({ success: true, message: 'Order placed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
// Route to view order history
router.get('/order/history',isAuthenticated, async (req, res) => {
    try {
        // Get orders for the user
        const orders = await Order.find({ user: req.user._id }).populate('items.product');
        res.json({ orders });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to view a particular order by ID
router.get('/order/:id',isAuthenticated, async (req, res) => {
    try {
        // Get the order by ID for the user
        const order = await Order.findOne({ _id: req.params.id, user: req.user._id }).populate('items.product');
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json({ order });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add feedback route
router.post('/feedback', isAuthenticated, async (req, res) => {
    try {
        // Destructure type and message from the request body
        const { type, description } = req.body;

        // Validate if the type is one of the allowed values: 'bugs', 'feedback', 'query'
        if (!['bugs', 'feedback', 'query'].includes(type)) {
            return res.status(400).json({ error: 'Invalid feedback type' });
        }

        // Create a new feedback instance
        const feedback = new Feedback({ type, description });

        // Save the feedback to the database
        await feedback.save();

        // Send a success response
        res.json({ success: true, message: 'Feedback submitted successfully' });
    } catch (error) {
        // If an error occurs, send a 500 internal server error response
        res.status(500).json({ error: 'Internal server error' });
    }
});

  module.exports = router;