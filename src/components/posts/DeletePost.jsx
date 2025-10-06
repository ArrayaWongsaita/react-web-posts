/* eslint-disable react/prop-types */

// src/components/post/DeletePost.jsx
import { useRevalidator } from 'react-router';
import { deletePostApi } from '../../apis/posts-api';

export default function DeletePost({ postId }) {
  const revalidatePost = useRevalidator();
  const hdlDeletePosts = async () => {
    try {
      await deletePostApi(postId);
      await revalidatePost.revalidate();
    } catch (error) {
      console.log(error);
      alert('delete post error');
    }
  };
  return (
    <div>
      <button className="bg-red-400 p-2 rounded-xl" onClick={hdlDeletePosts}>
        Delete Post
      </button>
    </div>
  );
}
