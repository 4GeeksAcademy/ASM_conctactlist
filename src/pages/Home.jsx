import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactList from "../components/ContactList";


export const Home = () => {
    const { store, dispatch } = useGlobalReducer();
    

    const getContacts = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/contact/agendas/Angel");
            const data = await response.json();
            dispatch({ type: "GET_CONTACTS", payload: data.contacts });
        } catch (error) {
            console.error("Error getting contacts:", error);
        }
    };

    useEffect(() => {
        getContacts();
    }, []);

    const deleteContact = (contactId) => {
        dispatch({ type: "DELETE_CONTACT", payload: contactId });
    };

    return (
        <div className="container mt-4">
            <h2>Contact List</h2>
            <ContactList />
        </div>
    );
};
