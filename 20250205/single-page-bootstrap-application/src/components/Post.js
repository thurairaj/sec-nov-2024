'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Post({ postId }) {
  const [post, setPost] = useState({ title: '', description: '', userId: '' });
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => {
        setPost({
          title: res.data.title,
          description: res.data.description,
          userId: res.data.userId,
        });
      });
  }, []);
  return (
    <div>
      {!post.title && (
        <div>
          <h4>Loading...</h4>
        </div>
      )}
      {post.title && (
        <div>
          <h3>Title: {post.title}</h3>
          <p>Descriptions: {post.description}</p>
          <span>Author: {post.userId}</span>
        </div>
      )}
    </div>
  );
}
