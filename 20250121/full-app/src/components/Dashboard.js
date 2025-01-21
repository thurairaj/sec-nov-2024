import ToggleVisibility from '@/components/ToggleVisibility';

function Dashboard({ users }) {
  return (
    <div>
      <h1>User Dashboard</h1>
      <ToggleVisibility users={users}></ToggleVisibility>
    </div>
  );
}

export default Dashboard;
