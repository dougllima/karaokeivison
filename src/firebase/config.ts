import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'SUA_CHAVE',
  authDomain: 'SEU_PROJETO.firebaseapp.com',
  projectId: 'SEU_PROJETO',
  storageBucket: 'SEU_PROJETO.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID',
};

export const firebaseApp = initializeApp(firebaseConfig);
