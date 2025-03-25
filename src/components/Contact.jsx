import React from "react";
import { Link } from "react-router-dom"



function ContactCard({ contact, deleteContact }) {
    const handleDelete = () => {
        {deleteContact(contact.id)}
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <h5 className="card-title">{contact.full_name}</h5>
                    <p className="card-text"> {contact.email}</p>
                    <p className="card-text"> {contact.phone}</p>
                    <p className="card-text"> {contact.address}</p>

                    <Link to={`/addcontact/${contact.id}`}>
                        <button className="btn btn-primary me-2">Edit</button>
                    </Link>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        );
    }
}

export default ContactCard;