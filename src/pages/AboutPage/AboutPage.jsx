import React from 'react';
import fund from "../../assets/images/fund.png";
import about from "../../assets/images/about.png"
import "./AboutPage.scss";
import { FaFacebookF } from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";
import {SiPinterest} from "react-icons/si";
import {CgTwitter} from "react-icons/cg";

const AboutPage = () => {
  return (
    <div className='main-holder-about'>
      <header className='header-about'style = {{
  background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${fund}) center/cover no-repeat`
  }} >
      <div className='container-about'> 
      <div style={{ height: '100px' }}></div>
      <div className='header-content-about text-center flex align-center justify-center flex-column text-white'>
<h3 className='header-title-about ls-2'>Sobre Nós</h3>
<div className='horz-line'> </div>
</div>
      </div>
      </header>
    
<div className='about text-center flex align-right justify-right'> 
<div className='aboutText'>
<div className='aboutItem'>
<span className='aboutTitle'>NOSSO TIME</span>
</div>
<p className='p-about'>
Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
amet ex esse.Sunt eu ut nostrud id quis proident.
</p>
<div className='aboutItem'>
    <span className='aboutTitle'>CATEGORIAS</span>
    <ul className='aboutList'>
    <li className='aboutListItem'>
      <span>Música</span>
    </li>
    <li className='aboutListItem'>
      <span>Esporte</span>
    </li>
    <li className='aboutListItem'>
      <span>Cinema</span>
    </li>
    <li className='aboutListItem'>
      <span>Tecnologia</span>
    </li>
    <li className='aboutListItem'>
      <span>Saúde</span>
    </li>
    <li className='aboutListItem'>
      <span>Atualidade</span>
    </li>
    </ul>
</div>
<div className='aboutItem'>
<span className='aboutTitle'>SIGA-NOS</span>
<div className='aboutSocial'>
< FaFacebookF />
<RiInstagramFill />
<CgTwitter />
<SiPinterest />
</div>
 </div>
 </div>
<div className='aboutImage'>
<img src={about}  alt='About us' />
    </div>
    </div>
    </div>
  )
}

export default AboutPage;
