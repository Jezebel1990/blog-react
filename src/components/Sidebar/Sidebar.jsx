import React from 'react';
import { useSidebarContext } from '../../context/sidebarContext';
import { FaTimes } from "react-icons/fa";
import { RiNewspaperFill } from "react-icons/ri";
import "./Sidebar.scss";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useSidebarContext();
  return (
    <div className= {`sidebar ${isSidebarOpen ? 'sidebar-open' :""}`}>
        <button type="button" className='sidebar-close-btn' onClick={() => closeSidebar()}>
          <FaTimes size={24} className='text-white'/>
        </button>
      <Link className='navbar-brand text-white  flex align-center fs-26'  to="/">
      <span className='navbar-brand-icon'>
          <RiNewspaperFill />
      </span>
      <span className='navbar-brand-txt font-rubik fw-5'>Blog</span>
      </Link>

<ul className='sidebar-nav font-rubik my-5'>
    <li className='nav-item'>
      <Link to = "/" className='nav-link text-white fw-4 fs-18'>Home</Link>
    </li>
    <li className='nav-item'>
      <Link to = "/blog" className='nav-link text-white fw-4 fs-18'>Blog</Link>
    </li>
    <li className='nav-item'>
      <Link to = "/about" className='nav-link text-white fw-4 fs-18'>Sobre nós</Link>
    </li>
</ul>

<div className='sidebar-blocks my-5'>
    <div className='sidebar-block'>
        <h3 className='font-rubik text-white'>Endereço</h3>
        <p className='text-white'>Rua da Amizade, 123</p>
    </div>
<div className='sidebar-block'>
    <h3 className='font-rubik text-white'>Telefone</h3>
<p className='text-white'>(11) 5000-9999</p>
</div>

<div className='sidebar-block'>
<h3 className='font-rubik text-white'>Email</h3>
<p className='text-white'>blog@blog.com</p>
</div>
</div>
    </div>
  )
}

export default Sidebar;
