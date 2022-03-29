import React, { useState } from 'react';
import Btn from '../../components/btn.component';
import Input from "../../components/input.component";
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config'

const SignIn = () => {

  const [EnterLogin, setEnterLogin] = useState('');
  const [EnterPassword, setEnterPassword] = useState('');
  const navigate = useNavigate();

  const Login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, EnterLogin, EnterPassword);
      setEnterLogin('');
      setEnterPassword('')
      navigate('/main', { replace: true })
      console.log(user);
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="login_form">
      <div className="login_message">Please login with your credentials</div>
      <Input type='text' placeholder="Login" onChange={(e) => setEnterLogin(e.target.value)}/>
      <Input type='password' placeholder="Password" onChange={(e) => setEnterPassword(e.target.value)}/>
      <Btn onClick={Login}>Sign In</Btn>
    </div>
  )
}

export default SignIn;
