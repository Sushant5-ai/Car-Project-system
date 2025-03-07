import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
