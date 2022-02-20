import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Route } from "react-router-dom";
import Homepage from './Pages/HomePage';
import Chatpage from './Pages/ChatPage';
function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
