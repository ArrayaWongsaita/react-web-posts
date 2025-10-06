// GetPost.jsx
import { getPosts } from '../../apis/posts-api';

export default function GetPost() {
  const hdlGetPosts = async () => {
    try {
      const posts = await getPosts();
    } catch (error) {
      console.log(error);
      alert('get error');
    }
  };
  return (
    <div>
      <button onClick={hdlGetPosts}>GET</button>
    </div>
  );
}
