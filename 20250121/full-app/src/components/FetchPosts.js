'use client';

import { useEffect, useState } from 'react';

function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isVisible, setVisible] = useState(true);

  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData().then(() => console.log('Fetch posts successfully'));
  }, []);

  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>Refresh!</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => <p key={post.id}>{post.title}</p>)
      )}
    </div>
  );
}

export default FetchPosts;

/**
 *  State variable -> html tags -> re-rendering -> FetchPost() , Component function runs again
 */
