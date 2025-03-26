import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts, deleteContact }) {
    return (
        <div>
            {contacts.length > 0 ? (
                contacts.map(contact) => (
                    <ContactCard />                                          />
                ))
            ) : (
                <p>No contacts found.</p>
            )}
        </div>
    );
}

export default ContactList;
