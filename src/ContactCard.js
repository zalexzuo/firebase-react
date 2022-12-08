import React, { useState } from "react";
import styles from "./ContactCard.module.css";

const ContactCard = ({
  contactName,
  phone,
  contactId,
  updateContact,
  deleteContact,
}) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.contactCard}>
        <h3>Name: {contactName}</h3>
        <p>Phone: {phone}</p>
        <input
          type="text"
          placeholder="New Name"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="New Phone"
          value={newPhone}
          onChange={(e) => {
            setNewPhone(e.target.value);
          }}
        />
        <div className={styles.btnContaier}>
          <button
            onClick={() => {
              updateContact(contactId, newName, newPhone);
            }}
          >
            EDIT
          </button>
          <button
            onClick={() => {
              deleteContact(contactId);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
