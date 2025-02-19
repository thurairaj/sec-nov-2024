import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={'/post/create'}>Create New Post</Link>
        </li>
        <li>
          <Link href={'/post/list'}>Show Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
