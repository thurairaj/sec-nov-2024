import Dashboard from '@/components/Dashboard';
import { LanguageProvider } from '@/use/LanguageContext';

export default function Home() {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', isActive: false },
    { id: 2, name: 'Bob', email: 'bob@example.com', isActive: true },
  ];

  return (
    <LanguageProvider>
      <div>
        <Dashboard users={users} />
      </div>
    </LanguageProvider>
  );
}
