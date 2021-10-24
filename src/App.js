import logo from './logo.svg';
import './App.css';
import React from 'react';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const projectID = '7df9c183-ea63-4419-9a8d-b8dc07bed742'

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />


  return (
    <ChatEngine 
      height='100vh'
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed = {
        (chatAppProps) => <ChatFeed {...chatAppProps} />
      }
    />
  );
}

export default App;
