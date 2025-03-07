
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
     

      
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path='/SignUp'element={<SignUp/>}/>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
