import React from 'react'
import Layout from '../../components/LayoutPage/Layout/Layout'
import HomeLogin from '../../components/HomePage/HomeLogin';
import { useAuth } from '../../components/Context/AuthContext';
import HomePage from '../../components/HomePage/HomeLogin';
function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <Layout>
    <HomeLogin /> 
  </Layout>
  )
}

export default Home
