import React from 'react';
import SignUp from './pages/signUp/signup.page.jsx';
import SignIn from './pages/signIn/signin.page.jsx';
import Main from './pages/main/main.page.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App () {
  return ( 
    <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>  
          <Routes>
            <Route path='/' element={<SignUp/>} />
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/main' element={<Main/>}/>
          </Routes>
        </BrowserRouter>
    </div>
   );
}

export default App ;

