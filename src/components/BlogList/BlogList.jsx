import React, { useState } from 'react';
import "./BlogList.scss";
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { useBlogsContext } from '../../context/blogsContext';
import Pagination from '../Pagination/Pagination';

const BlogList = ({blogs}) => {
     const { blogsLoading, searchBlogsLoading } = useBlogsContext();
     const blogLimit = 6
     const [paginate, setPaginate] = useState(1 * blogLimit);
     const paginateHandler = (value) => setPaginate(value * blogLimit);
     if(blogsLoading || searchBlogsLoading){ return (<Loader />)}

  return (
    <>
      <div className="blog-items grid my-6">
        {
          blogs?.slice(paginate - 6, paginate).map(blog => {
            return (
              <div className='blog-item' key = {blog.id}> 
              <div className='blog-item-title fw-5 fs-18 font-rubik'>{blog.title}</div>
              <p className='p-first-letter-uppercase'>{(blog.body).substring(0, 100)}...</p>
              <div className='blog-item-btn'>
                 <Link to = {`/blog/${blog.id}`} className='see-more-btn font-rubik fw-4'>Veja Mais</Link>
                </div>
              </div>
    
            )
          })
        }
      </div>
      <Pagination noOfBlogs={blogs.length} paginateHandler={paginateHandler} />
    </>
  )
}

export default BlogList;
