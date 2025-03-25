import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactList from "../components/ContactList";

export const Home = () => {
    const { store, getContacts, dispatch } = useGlobalReducer();

    useEffect(() => {
        getContacts();
    }, []);

    const deleteContact = (contactId) => {
        dispatch({ type: "delete_contact", payload: contactId });
    };

    return (
        <div className="container mt-4">
            <h2>Contact List</h2>
            <ContactList 
                contacts={store.contacts} 
                deleteContact={deleteContact} 
            />
        </div>
    );
};
