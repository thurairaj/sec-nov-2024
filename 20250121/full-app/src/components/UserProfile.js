function UserProfile({ user }) {
  return (
    <div>
      <h1 className={user.isActive ? 'green' : 'red'}>{user.name}</h1>
      <p>{user.email}</p>

      {user.isActive && <p>Registered</p>}
      {!user.isActive && <p>Not Registered</p>}

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
