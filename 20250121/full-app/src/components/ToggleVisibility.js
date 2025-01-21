'use client';

import { useState } from 'react';
import UserProfile from '@/components/UserProfile';

function ToggleVisibility({ users }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <h2>What is the value of isVisibile? : {isVisible.toString()}</h2>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Unregistered Profile
      </button>
      {users.map(
        (user) =>
          (isVisible || user.isActive) && (
            <UserProfile key={user.id} user={user} city={'Kuala'} />
          ),
      )}
    </div>
  );
}

export default ToggleVisibility;
