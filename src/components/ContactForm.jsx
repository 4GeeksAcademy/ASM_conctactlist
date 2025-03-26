import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";


function ContactForm({ addContact }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });

    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(formData);
        setFormData({ fullName: "", email: "", phone: "", address: "" });
    };
    return (
        <form className="mt-5" onSubmit={handleSubmit}>
            <h5>Add a new contact</h5>
            <div className="mb-3">
                <label className="form-label"> Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email </label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label"> Phone</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label"> Address</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-primary" type="submit" onClick = {addContact}  >Save Contact</button>
        </form>
    );
}

export default ContactForm