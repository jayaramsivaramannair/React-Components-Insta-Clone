import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost} = props;

  const activateComment = (identify) => { //Activates the comment box only when the comment icon is clicked!
    if(post.id === identify) {
      document.getElementById(post.id).disabled = false;
      document.getElementById(post.id).placeholder = "Enter name then Cmt."
    }
  }

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(post.id)} numberOfLikes = {post.likes} activateComment = {() => activateComment(post.id)}/>
      {/* Comments also wants its props! */}
      <Comments comments = {post.comments}/>
      <input type ="text" placeholder ="activate comment box" id ={post.id} disabled/> <button>Submit</button>
    </div>
  );
};

export default Post;
