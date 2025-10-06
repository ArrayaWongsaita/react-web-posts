// src/pages/PostPage.jsx
import CreatePost from '../components/posts/CreatePost';
import GetPost from '../components/posts/GetPost';

export default function PostsPage() {
  return (
    <div>
      <CreatePost />
      <GetPost />
    </div>
  );
}
