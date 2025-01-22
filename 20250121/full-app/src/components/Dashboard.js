'use client';

import ToggleVisibility from '@/components/ToggleVisibility';
import { useLanguage } from '@/use/LanguageContext';

function Dashboard({ users }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      <h1>User Dashboard</h1>
      {language !== 'Malay' && (
        <button onClick={() => toggleLanguage()}>Change to Malay</button>
      )}

      {language === 'Malay' && (
        <button onClick={() => toggleLanguage()}>Tukar kepada English</button>
      )}

      <ToggleVisibility users={users}></ToggleVisibility>
    </div>
  );
}

export default Dashboard;
