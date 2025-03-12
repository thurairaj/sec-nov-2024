import TodoContextProvider from '@/context/TodoContext';
import TodoList from '@/components/TodoList';

export default function Home() {
  return (
    <TodoContextProvider>
      <TodoList></TodoList>
    </TodoContextProvider>
  );
}
