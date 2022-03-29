import React,  { useState } from "react";
import '../styles/styles.page.css';
import { Link, useNavigate } from 'react-router-dom';
import MyButton from '../../components/btn.component';
import Input from "../../components/input.component";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config'


function SignUp() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

    const Regist = async () => {
      try {
        const user = await createUserWithEmailAndPassword(auth, login, password);
        setLogin('');
        setPassword('')
        navigate('/login', { replace: true })
        console.log(user);
      } catch (err) {
        alert(err.message)
      }
    }

  return ( 
    <div className="registaration_form">
      <Input value={login} type='text' placeholder="Login" onChange={(e) => setLogin(e.target.value)}/>
      <Input value={password} type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      <MyButton onClick={Regist}>Sign Up</MyButton>
      <div  className="goToLogin">Already exist? Go to <Link to='/login'><p>login-page</p></Link></div>
    </div>
   );
}

export default SignUp;