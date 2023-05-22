import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Main from './page/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/main' element={<Main/>} />
        <Route path='/login' element={<LoginForm/>} />
      </Routes>
    </div>
  );
}

export default App;
