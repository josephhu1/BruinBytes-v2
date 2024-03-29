import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Review from './pages/Review';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { AuthProvider } from './components/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import SpinTheWheel from './pages/SpinTheWheel';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/reviews/:id" element={<Review />} />
          <Route path="/reviews/:name" element={<Review />} />
          <Route path="/SpinTheWheel" element={<SpinTheWheel />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}


export default App;
