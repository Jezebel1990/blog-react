import React, {useEffect, useState} from "react";
import "./Comment.scss";
import axios from '../../api/axios';

import { COMMENTS_URL  } from '../../utils/constants';

const Comment = ({comment}) => {
 const [postUser, setPostUser] = useState({})

 useEffect(() => {
  const fetchPostUser = async(id) => {
    const response = await axios.get(`${COMMENTS_URL}/${id}`);
    setPostUser(response.data);
  }
   fetchPostUser(comment?.id);
 }, []);

  return (
    <div className="blog-comments-item grid align-center" key = {comment?.id}>
  
      <div className='comment-info'>
      <span className='comment-info-name fw-7 text-darkBlue fs-18'>{comment?.name}</span>
         <p className='comment-info-body my-1 fs-15 text-darkBlue'>{comment?.body}</p>.
        </div>
        <div className="-info-email">
      <p className='my-1 text-darkBlue fs-15'>{comment?.email}</p>
      </div>
    </div>
  )
}

export default Comment;
