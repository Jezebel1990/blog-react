import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
  <footer className='footer py-4 bg-darkGrey'>
    <div className='container'>
        <div className='footer-content text-white text-center'>
            <p className='copyright-text font-rubik fw-4 ls-1'>Copyright © 2023. Todos os direitos reservados.</p>
        </div>
    </div>
  </footer>
  )
}

export default Footer
