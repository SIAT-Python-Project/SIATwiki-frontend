import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/PersonPage';
import LoginPage from './pages/SignUpPage';
import SignUpPage from './pages/SignUpPage';
import SingInPage from './pages/SignInPage';
import UpdateInfo from './pages/UpdateInfo';
import PersonPage from './pages/PersonPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/person/:id" element = {<PersonPage/>}></Route>
            <Route path="/api/sign-up" element = {<SignUpPage/>}></Route>
            <Route path="/api/login" element = {<SingInPage/>}></Route>
          <Route path='/info/update/:infoId' element={<UpdateInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
