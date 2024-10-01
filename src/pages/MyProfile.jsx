import React from 'react';
import { useAuth } from '../contexts/AuthProvider';

const MyProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <>
      <h1>My Profile</h1>
      <div>
        <h2>Name: {user.displayName || 'No name provided'}</h2>
        <h2>Email: {user.email || 'No email available'}</h2>
        <h2>Profile Picture:</h2>
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt='Profile'
            style={{ width: '100px', borderRadius: '50%' }}
          />
        ) : (
          <p>No profile picture available</p>
        )}
      </div>
    </>
  );
};

export default MyProfile;
