import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUp from './Pages/SignUp/SignUp';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
     

      
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path='/SignUp'element={<SignUp/>}/>

        </Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
