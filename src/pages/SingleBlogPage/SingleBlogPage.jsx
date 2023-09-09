import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../components/Title/Title';
import { useCommentContext } from '../../context/commentContext';
import { useBlogsContext } from '../../context/blogsContext';
import SingleBlog from '../../components/SingleBlog/SingleBlog';
import banner_image from "../../assets/images/banner_image.gif";
import "./SingleBlogPage.scss";
import { useUserContext } from '../../context/userContext';

const SingleBlogPage = () => {
  const { fetchSingleBlog, singleBlog } = useBlogsContext();
  const {fetchSingleUser, singleUser} = useUserContext();
  const { fetchCommentsByPost, commentsByPost } = useCommentContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleBlog(id);
    if (singleBlog.id) fetchSingleUser(singleBlog.id);
    if (singleBlog.id) fetchCommentsByPost(singleBlog.id);
  }, [singleBlog.id, singleBlog.id, id]);

  return (
    <div className='main-holder bg-lightGrey'>
      <header className='header' style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image}) center/cover no-repeat` 
      }}>
        <div className='container'>

        <div style={{ height: '100px' }}></div>
          <div className='header-content text-center flex align-center justify-center flex-column text-white'>
            <Title title="Detalhes do Blog"  color={`#fff`}  />
          </div>
        </div>
      </header>
      <section className='section py-7'>
        <div className='container'>
          <div className='section-content bg-white'>
            <SingleBlog blog={singleBlog} user={singleUser} comments={commentsByPost} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleBlogPage;
