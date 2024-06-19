import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/SignUpPage';
import SignUpPage from './pages/SignUpPage';
import SingInPage from './pages/SignInPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element = {<MainPage/>}></Route>
            <Route path="/sign-up" element = {<SignUpPage/>}></Route>
            <Route path="/sign-in" element = {<SingInPage/>}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
