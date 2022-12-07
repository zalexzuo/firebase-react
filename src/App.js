import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const contactsCollectionRef = collection(db, "contacts");

  useEffect(() => {
    const getAllContacts = async () => {
      const responseData = await getDocs(contactsCollectionRef);
      console.log(responseData);
      console.log(
        responseData.docs.map((contact) => ({
          ...contact.data(),
          id: contact.id,
        }))
      );
    };

    getAllContacts();
  }, []);

  return <div className="App">App</div>;
};

export default App;
