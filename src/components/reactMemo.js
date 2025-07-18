import React from 'react';

const UserProfile = ({ user }) => {
  console.log('UserProfile rendered');
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
};

// Memoized version with a custom comparison function
const MemoizedUserProfile = React.memo(UserProfile, (prevProps, nextProps) => {
  // Only re-render if the user's name or age has changed
  return prevProps.user.name === nextProps.user.name && prevProps.user.age === nextProps.user.age;
});

const App = () => {
  const [user, setUser] = React.useState({ name: 'Alice', age: 30 });

  const updateAge = () => {
    setUser(prevUser => ({ ...prevUser, age: prevUser.age + 1 }));
  };

  return (
    <div>
      <button onClick={updateAge}>Increase User Age</button>
      <MemoizedUserProfile user={user} />
    </div>
  );
};

export default App;