import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {

  return (
    <div style={{display: 'flex',           
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',  
        height: '100vh',
      }}>
      <h1>Welcome to PicWatcher</h1>
      <Link to='images'>start watching</Link>
    </div>
  );
}