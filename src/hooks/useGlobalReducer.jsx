// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store"  // Import the reducer and the initial state.

// Create a context to hold the global state of the application
// We will call this global state the "store" to avoid confusion while using local states
const StoreContext = createContext()

// Define a provider component that encapsulates the store and warps it in a context provider to 
// broadcast the information throught all the app pages and components.

export function StoreProvider({ children }) {
    // Initialize reducer with the initial state.
    const [store, dispatch] = useReducer(storeReducer, initialStore())
    // Provide the store and dispatch method to all child components.

    const getContacts = async () => {
        try {
            const response = await fetch("https://playground.4geeks.com/contact/");
            const data = await response.json();
            dispatch({ type: "GET_CONTACTS", payload: data });
        } catch (error) {
            console.error("Error getting contacts:", error);
        }
    };

    // un simple metodo get con el 
    const addContact = async (contactData) => {
        try {
            const response = await fetch("https://playground.4geeks.com/contact/", {
                method: "POST",
                body: JSON.stringify(contactData),
            });
            const newContact = await response.json();
            dispatch({ type: "ADD_CONTACT", payload: newContact });
        } catch (error) {
            console.error("Error adding contact:", error);
        }
    };

    const updateContact = async (id, contactData) => {
        try {
            await fetch(`https://playground.4geeks.com/contact/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactData),
            });
            dispatch({ type: "UPDATE_CONTACT", payload: { id, ...contactData } });
        } catch (error) {
            console.error("Error updating contact:", error);
        }
    }

    const deleteContact = async (id) => {
        try {
            await fetch(`https://playground.4geeks.com/contact/${id}`, { method: "DELETE" });
            dispatch({ type: "DELETE_CONTACT", payload: id });
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    }


    return <StoreContext.Provider value={{ store, dispatch, getContacts, addContact, updateContact, deleteContact }}>
        {children}
    </StoreContext.Provider>
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    return useContext(StoreContext)
    }