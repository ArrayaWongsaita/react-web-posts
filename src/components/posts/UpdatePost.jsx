/* eslint-disable react/prop-types */
import { useRevalidator } from 'react-router';
import { updatePostApi } from '../../apis/posts-api';

// src/components/posts/UpdatePost.jsx
export default function UpdatePost({ postId, defaultValue }) {
  const revalidatePost = useRevalidator();
  const hdlUpdatePost = async () => {
    const newData = {
      ...defaultValue,
      id: postId,
      title: 'updated Post',
    };

    try {
      await updatePostApi(newData);
      await revalidatePost.revalidate();
    } catch (error) {
      console.log(error);
      alert('update data error');
    }
  };
  return (
    <div>
      <button className="bg-green-300 p-2 rounded-xl" onClick={hdlUpdatePost}>
        update post
      </button>
    </div>
  );
}
