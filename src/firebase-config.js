import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBrb2ld_h_KOMZsrxqwcAPKejS_0Lv6zz4",
  authDomain: "dairlysolutionstest.firebaseapp.com",
  databaseURL: "https://dairlysolutionstest-default-rtdb.firebaseio.com",
  projectId: "dairlysolutionstest",
  storageBucket: "dairlysolutionstest.appspot.com",
  messagingSenderId: "838682140815",
  appId: "1:838682140815:web:accf1c6c054a1f49ff50fa"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)