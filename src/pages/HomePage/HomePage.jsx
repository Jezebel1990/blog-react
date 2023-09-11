import React, { useState } from 'react';
import banner_image from "../../assets/images/banner_image.gif";
import search_icon from "../../assets/images/search_icon.png";
import "./HomePage.scss";

import { useBlogsContext } from '../../context/blogsContext';
import Title from '../../components/Title/Title';
import BlogList from '../../components/BlogList/BlogList';

const HomePage = () => {
  const { blogs, setSearchTerm, searchTerm, fetchBlogsFromSearch } = useBlogsContext();

  const [errorMsg, setErrorMsg] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    const inputText = e.target.value.trim();

    if (inputText.length !== 0) {
      const regex = /\b[a-zA-Z]\w*\b/g;
      const matches = inputText.match(regex);

      if (matches && matches.length > 0) {
        setSearchTerm(matches.join(' '));
        setErrorMsg("");
      } else {
        setErrorMsg("Nenhuma palavra-chave encontrada, tente outra!");
      }
    } else {
      setErrorMsg("Palavra-chave não encontrada, tente outra!");
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    fetchBlogsFromSearch(searchTerm);
  }

  return (
    <div className='main-holder bg-lightGrey'>
      <header className='header' style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image}) center/cover no-repeat`
      }}>
        <div className='container'>
          <div className='header-content text-center flex align-center justify-center flex-column text-white'>
            <h1 className='header-title ls-2'>Pequenos detalhes fazem grandes momentos!</h1>
            <form className='flex allign-center justify-center' onSubmit={(e) => handleSearchResult(e)}>
              <div className='header-input-group flex align-stretch'>
                <input type="text" className='form-control fs-20' placeholder='Buscar ...' onChange={(e) => handleSearchTerm(e)} />
                <span className='form-text font-rubik fs-14 fw-4'>{errorMsg}</span>
                <button type='submit' className='form-btn bg-purple flex align-center justify-center'>
                  <img src={search_icon} alt="Search icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>

      <section className='section py-7'>
        <div className='container'>
          <div className='section-content'>
            <Title title="Blogs" color={"#0D1741"} />
            {<BlogList blogs={blogs} />}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
