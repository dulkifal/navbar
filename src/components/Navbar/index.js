import React from 'react';
import { useState } from 'react';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const navElemts = open? 'navElemts': 'hide'
  return (
    <>
      <Nav className='nav'>
        <Bars onClick={() => { setOpen(!open) }} />

        <NavMenu className={navElemts}>
          <NavLink to='/' activestyle>
            Home
          </NavLink>
          <NavLink to='/about' activestyle>
            About
          </NavLink>
          <NavLink to='/events' activestyle>
            Events
          </NavLink>
          
          <NavLink to='/blogs' activestyle>
            Blogs
          </NavLink>
          <NavLink to='/sign-up' activestyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
