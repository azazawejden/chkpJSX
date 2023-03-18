import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';

function ProfilePhoto() {
  return (
    <img
      src="https://placehold.it/150x150"
      alt="Profile"
      style={{ borderRadius: '50%', marginTop: '1rem' }}
    />
  );
}

export default ProfilePhoto;

// FullName.js


function FullName() {
  return <h1>John Doe</h1>;
}

export default FullName;
// Address.js


function Address() {
  return (
    <div>
      <p>123 Main St</p>
      <p>Anytown, USA 12345</p>
    </div>
  );
}

export default Address;


// App.js


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
