import RegisterForm from './features/register/RegisterForm';
import AuthForm from './features/login/AuthForm';
import HomePage from './features/home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/login" element={<AuthForm/>} />
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
