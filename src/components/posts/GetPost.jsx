// src/components/posts/GetPost.jsx

import { useLoaderData } from 'react-router';
import PostItem from './PostItem';

export default function GetPost() {
  const posts = useLoaderData();

  return (
    <div className=" mx-2 grid grid-cols-3 gap-4">
      {/* show data */}
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
