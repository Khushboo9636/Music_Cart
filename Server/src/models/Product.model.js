const mongoose = require('mongoose');


// Define Schema for Product
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    enum: ['blue', 'black', 'white', 'pink'],
    required: true,
  },
  type: {
    type: String,
    enum: ['in-ear', 'on-ear', 'over-ear'],
    required: true,
  },
  brand: {
    type: String,
    enum: ['JBL', 'Sony', 'Boat', 'Zebronics', 'ptron', 'marshall'],
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: true,
  },
  customerReview: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
   availability: {
    type: String,
    enum: ['In stock', 'Out of stock'],
    default: 'In stock',
   },
    defaultImage:{
      type: String,
      required: true,
    },
    images: [
     {
       type: String,
       required: true,
     }
    ]
  });

// Define Schema for Cart
const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [{
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        min: 1,
        required: true,
    }
}]
  

});


// Define Schema for Order
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [{
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        min: 1,
        required: true,
    }
}],
  deliveryAddress: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['pay on delivery', 'UPI', 'card'],
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Placed', 'Shipped', 'Delivered'],
    default: 'Placed',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// Define Schema for Feedback
const feedbackSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['bugs', 'feedback', 'query'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Create Models
const Product = mongoose.model('Product', productSchema);
const Cart = mongoose.model('Cart', cartSchema);
const Order = mongoose.model('Order', orderSchema);
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = { Product, Cart, Order,Feedback};
