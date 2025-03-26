// Definición del estado inicial
export const initialStore = () => {
    return {
        contacts: [],
    }
};

// Reducer: Función que maneja las acciones sobre el estado
const storeReducer = (state, action) => {
    switch (action.type) {
        case "GET_CONTACTS":
            return { ...state, contacts: action.payload };
        case "ADD_CONTACT":
            return { ...state, contacts: [...state.contacts, action.payload] };
        case "UPDATE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id ? action.payload : contact
                ),
            };
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
            };
        default:
            return state;
    }
};

export default storeReducer;








/*const getContacts = async () => {
    try {
        const response = await fetch("https://playground.4geeks.com/contact/agendas/Angel");
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
}*/