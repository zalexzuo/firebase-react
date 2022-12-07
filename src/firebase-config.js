import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCife5ZcHKkl_kH6e-xUyvqDBt_leLeuRg",
  authDomain: "fir-react2022.firebaseapp.com",
  projectId: "fir-react2022",
  storageBucket: "fir-react2022.appspot.com",
  messagingSenderId: "655995147626",
  appId: "1:655995147626:web:a0254bb650ea6013dc4113",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
