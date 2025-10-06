import { useRevalidator } from 'react-router';
import { createPost } from '../../apis/posts-api';

// src/components/posts/CreatePost.jsx
export default function CreatePost() {
  const revalidatePost = useRevalidator();

  const hdlCreatePost = async () => {
    const mockData = {
      title: 'hello',
      content: 'my content',
      imgUrl: 'https://picsum.photos/200',
    };

    try {
      await createPost(mockData); // apiCreatePost  CreatePostApi
      await revalidatePost.revalidate(); // <--
    } catch (error) {
      console.log(error);
      alert('create post error');
    }
  };
  return (
    <div>
      <button className="bg-blue-400 rounded-xl" onClick={hdlCreatePost}>
        Create post
      </button>
    </div>
  );
}
