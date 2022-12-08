import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import ContactCard from "./ContactCard";

const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [contacts, setContacts] = useState([]);
  const contactsCollectionRef = collection(db, "contacts");

  const addContact = async () => {
    await addDoc(contactsCollectionRef, { name, phone });
  };

  const updateContact = async (contactId, newName, newPhone) => {
    const contactDocRef = doc(db, "contacts", contactId);
    const newContact = { name: newName, phone: newPhone };
    await setDoc(contactDocRef, newContact, { merge: true });
  };

  const deleteContact = async (contactId) => {
    const contactDocRef = doc(db, "contacts", contactId);
    await deleteDoc(contactDocRef);
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const responseData = await getDocs(contactsCollectionRef);
      // console.log(responseData);

      setContacts(
        responseData.docs.map((contact) => ({
          ...contact.data(),
          id: contact.id,
        }))
      );
    };

    getAllContacts();
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <input
          type="text"
          placeholder="name..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="phone..."
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>
      {contacts.map((contact) => {
        return (
          <ContactCard
            contactName={contact.name}
            phone={contact.phone}
            contactId={contact.id}
            key={contact.id}
            updateContact={updateContact}
            deleteContact={deleteContact}
          />
        );
      })}
    </div>
  );
};

export default App;
