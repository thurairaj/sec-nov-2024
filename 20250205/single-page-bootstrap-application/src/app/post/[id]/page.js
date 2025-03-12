import Post from '@/components/Post';

export default function PostPage({ params }) {
  return (
    <div>
      <h1>Blog Post Id: {params.id}</h1>
      <Post postId={params.id}></Post>
      <style jsx>{``}</style>
    </div>
  );
}
