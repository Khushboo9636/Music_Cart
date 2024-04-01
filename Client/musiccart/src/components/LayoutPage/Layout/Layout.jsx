import React from 'react'

import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <main style={{minHeight:"80vh",overflowY:"auto"}}>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout
