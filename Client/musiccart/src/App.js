// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import ViewCart from './Pages/ViewCart/ViewCart';
import { AuthProvider, useAuth } from './components/Context/AuthContext';
import CheckOut from './Pages/CheckOut/CheckOut';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
//import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Viewcart" element={<ViewCart/>} /> 
        <Route path="/checkOut" element={<CheckOut/>} /> 
        <Route path="/placeorder" element={<PlaceOrder/>} /> 
        <Route path="/product/:productId" element={<ProductDetail/>} /> 
      </Routes>
      </AuthProvider>
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/product/:productId" element={<ProductDetail />} />

//           {/* Private Routes */}
//           <PrivateRoute path="/viewcart" element={<ViewCart />} />
//           <PrivateRoute path="/checkout" element={<CheckOut />} />
//           <PrivateRoute path="/placeorder" element={<PlaceOrder />} />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// }


export default App;
