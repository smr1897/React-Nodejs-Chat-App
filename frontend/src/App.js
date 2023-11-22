//import logo from './logo.svg';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div class = "App">
      <Route path = "/" component = {HomePage} exact/>
      <Route path = "/chats" component = {ChatPage} exact/>
    </div>
  );
}

export default App;
