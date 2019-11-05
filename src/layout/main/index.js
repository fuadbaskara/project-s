import React, { useState } from 'react'
import { Avatar, Drawer, Icon, Layout, Menu } from 'antd'
import { withRouter, NavLink, Link } from 'react-router-dom'

import { PUBLIC_URL } from '../../config/url'
import { MENU } from '../../config/menu'
import Logo from '../../assets/logo.png'
import { logout, getCookies } from '../../utils/cookies'
import { CONFIG_COOKIES } from '../../config/cookies'
import './main.scss'

const Main = ({ children, title, location }) => {
  const { Header, Content } = Layout
  const [visible, setvisible] = useState(false)
  const locs = location.pathname ? location.pathname.replace(PUBLIC_URL, '').split('/') : []
  const getActiveNavLink = () => (locs.length > 1 ? locs[1] : '')
  const fullName = getCookies(CONFIG_COOKIES.FULLNAME)
  const userCode = getCookies(CONFIG_COOKIES.CODE)
  return (
    <Layout className="main">
      <Layout>
        <Drawer
          closable
          title={(
            <div className="main__drawer-avatar">
              <div className="flex">
                <Avatar size={40} icon="user" />
                <div>
                  <p className="main__drawer-avatar-acc">{fullName}</p>
                  <p className="small-text">{userCode}</p>
                </div>
              </div>
              {/* <Icon type="setting" /> */}
            </div>
          )}
          placement="left"
          onClose={() => setvisible(false)}
          visible={visible}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['/']}
            selectedKeys={[getActiveNavLink()]}
          >
            <Menu.Item key={MENU.TASK_REVIEW_LIST_KEY}><NavLink to={MENU.MAIN_PAGE}>Main page</NavLink></Menu.Item>
            {/* <Menu.Item key={MENU.FREELANCER_LIST_KEY}><NavLink to={MENU.FREELANCER_LIST}>Freelancer Management</NavLink></Menu.Item> */}
            <Menu.Item key="4" onClick={logout}>Logout</Menu.Item>
          </Menu>
        </Drawer>
        <Header className="main__header">
          <h2>{title}</h2>
          <div className="main-hedaer__logo">
            <Icon type="menu" onClick={() => setvisible(true)} />
            <Link to="/task-review">
              <img src={Logo} alt="" />
            </Link>
          </div>
        </Header>
        <Content className="app-content__container">
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default withRouter(Main)
