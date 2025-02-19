'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const response = axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} href={`/post/${post.id}`}>
          <div className={'container'} key={post.id}>
            <h3>{post.title}</h3>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .container {
          border: 1px gray solid;
          padding: 1em;
          margin-bottom: 0.2em;
        }

        .container:hover {
          background-color: lightgray;
        }

        .container h3 {
          color: black;
          text-decoration: none;
        }

        div > a {
          text-decoration: none !important;
        }
      `}</style>
    </div>
  );
}
