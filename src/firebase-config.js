import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  /* put your firebase sdk here */
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
