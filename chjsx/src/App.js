import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Address from './component/profile/Address';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
