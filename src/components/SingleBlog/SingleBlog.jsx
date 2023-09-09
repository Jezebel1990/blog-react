import React from 'react';
import "./SingleBlog.scss";
import {BiUser, BiCommentDots} from 'react-icons/bi';
import Comment from '../Comment/Comment';
import author from "../../assets/images/author.jpg";
import { useBlogsContext } from '../../context/blogsContext';
import Loader from '../Loader/Loader';
import avatar from '../../assets/images/avatar.png';

const SingleBlog = ({blog, user, comments}) => {
 const { singleBlogLoading, singleBlogError} = useBlogsContext();
  
 if(singleBlogLoading) {
    return(<Loader />);
 }

 const commentsList = Array.isArray(comments) ? comments : [];

 
 
 return (
    <div className='blog-single grid'>
       <div className='blog-single-l'>
          <div className='blog-details'>
            <div className='blog-info flex align-center'>
              <div className='blog-info-item flex align-center'></div>
<BiUser className='text-blue' />
<span className='blog-info-item-text font-rubik fw-5'>{user?.name} </span>
</div>
<div className='blog-info-item flex align-center'>
<BiCommentDots className='text-mid-blue' />
<span className='blog-info-item-text font-rubik fw-5'>{comments?.length}1 comentário</span>
</div>
 </div>
 <h2 className='blog-title text-dark-blue'>{blog?.title}</h2>
<p className='p-first-letter-uppercase'>{blog?.body}.</p>


<div className='blog-author my-5'>
 <div className='blog-author-l'>
<img src = {author} alt="Person"style={{ borderRadius: '50%'}}/>
 </div>

 <div className='blog-author-r'>
<div className='fs-16 fw-3 author-name'>{user?.name}</div>
<div className='fs-16 fw-3 author-email'>Email: {user?.email}</div>
<div className='fs-16 fw-3 author-username'>Apelido: {user?.username}</div>
<div className='fs-16 fw-3 author-address'>Endereço: {user?.address?.street}, {user?.address?.city}</div>
<div className='fs-16 fw-3 author-website'>Website: {user?.website}</div>
<div className='fs-16 fw-3 author-company'>Empresa: {user?.company?.name}</div>
 </div>
 </div>

            <h2 className='font-rubik my-3 fw-6'>Comentários</h2>
            <div className='blog-comments-item grid align-center'>
            <div className='comment-img'>
                <img src = {avatar} alt = "Avatar"/>
            </div>
            { commentsList.map(comments => (<Comment comments = {comments} key = {comments?.id} />))}
            <div className='comment-info'>
            <span className='comment-info-name fw-7 text-darkBlue fs-18'>{comments?.name.charAt(0).toUpperCase() + comments?.name.slice(1)}</span>
            
            <p className='p-first-letter-uppercase my-1 fs-15 text-darkBlue'>{comments?.body}.</p>
            <div className="comment-email">
      <p className='my-1 text-darkBlue fs-15'>{comments?.email}</p>
      </div>
      </div>
        </div>
        </div>
</div>
  )
}

export default SingleBlog;
