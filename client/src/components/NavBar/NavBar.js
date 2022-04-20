import React from 'react'
import {Navbar,Nav, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const NavBar = () => {

    const location = useLocation()


    const menu = [
        {
            name:'Home',
            url:'/'
        },
        {
            name:'Register',
            url:'/register'
        },
        {
            name:'Login',
            url:'/login'
        },
        {
          name:'Create',
          url:'/create'
        },
        {
          name:'Posts',
          url:'/posts'
        },
    ]

  return (
    <div>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><Link to="/">Logo</Link></Navbar.Brand>
    <Nav className="me-auto menu_item">
    {
        menu.map((item,i)=>  <Link   className={location.pathname===item.url ? 'active': ''} key={i} to={item.url}>{item.name}</Link> ) 
    }
        
     
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavBar