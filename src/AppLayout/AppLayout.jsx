import React from 'react'
import { Footer, Navbar } from '../Components'
import { Outlet } from 'react-router-dom'
import { Layout, Typography } from 'antd'

const AppLayout = () => {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Outlet />
          </div>
        </Layout>
      <div className="footer">
        <Footer />
      </div>
      </div>
    </div>
  )
}

export default AppLayout