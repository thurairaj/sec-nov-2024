import Dashboard from '@/components/Dashboard';
import FetchPosts from '@/components/FetchPosts';

export default function Home() {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', isActive: false },
    { id: 2, name: 'Bob', email: 'bob@example.com', isActive: true },
  ];

  return (
    <div>
      <Dashboard users={users} />
      <FetchPosts></FetchPosts>
    </div>
  );
}
