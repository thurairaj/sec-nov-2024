import { useLanguage } from '@/use/LanguageContext';

function UserProfile({ user }) {
  const { language } = useLanguage();
  return (
    <div>
      <h1 className={user.isActive ? 'green' : 'red'}>{user.name}</h1>
      <p>{user.email}</p>

      {user.isActive && (
        <p>{language === 'malay' ? 'Didaftarkan' : 'Registered'}</p>
      )}
      {!user.isActive && (
        <p>{language === 'malay' ? 'Tidak didaftarkan' : 'Registered'}</p>
      )}

      <style jsx>{`
        .green {
          color: green;
        }

        .red {
          color: red;
        }

        .bigger {
          font-size: 4em;
        }
      `}</style>
    </div>
  );
}

export default UserProfile;
