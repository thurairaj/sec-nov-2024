'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPosts } from '@/api/GetPosts';
import Pagination from '@/components/Pagination';

export default function Posts() {
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);

  const perPage = 10;

  const [posts, setPosts] = useState([]);
  const currentPosts = posts.slice(
    current * perPage,
    current * perPage + perPage,
  );

  /// BASE_URL/post/123

  const handlePage = (currentPage) => {
    setCurrent(currentPage);
  };

  useEffect(() => {
    const d = getPosts().then((response) => {
      setPosts(response);
      setTotal(Math.ceil(response.length / perPage));
    });

    return () => {};
  }, []);

  return (
    <div className={'container'}>
      {currentPosts.map((post) => (
        <Link
          className={
            'd-block text-decoration-none p-2 mb-1 border border-black'
          }
          key={post.id}
          href={`/post/${post.id}`}>
          <div key={post.id}>
            <h3 className={''}>
              {post.id}.{post.title}
            </h3>
          </div>
        </Link>
      ))}

      <Pagination total={total} current={current} onPageChange={handlePage} />
    </div>
  );
}
