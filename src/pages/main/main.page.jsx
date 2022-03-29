import { FirebaseError } from "firebase/app";
import React, { useState } from "react";
import { auth } from '../../firebase-config';
import { onAuthStateChanged, signOut } from "firebase/auth";
import MyButton from '../../components/btn.component';
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const SignOut = async () => {
    await signOut(auth);
    navigate('/login', { replace: true })

  }
  return (
    <div className="mainMsg">
      <div>Current user is: {user?.email}</div>
      <MyButton onClick={SignOut}>Sign out</MyButton>
    </div>
  )
}

export default Main;