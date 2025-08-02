import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from './features/register/RegisterForm';
import AuthForm from './features/login/AuthForm';
import HomePage from './features/home/HomePage';
import TopUpPage from './features/topup/TopUpPage';
import TransactionPage from "./features/transaction/TransactionPage";
import PaymentPage from "./features/payment/PaymentPage";
import ProfilePage from "./features/profile/ProfilePage";
import UpdateProfilePage from "./features/profile/UpdateProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterForm/>} />
        <Route path="/login" element={<AuthForm/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/topup" element={<TopUpPage/>}/>
        <Route path="/transaction" element={<TransactionPage/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/profile/update" element={<UpdateProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
