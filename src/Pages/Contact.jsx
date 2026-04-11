import { useState } from "react";

function Contact() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: ""
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <h2>Contact Form</h2>
            <input 
                name="firstName" 
                placeholder="First Name"
                onChange={handleChange}
            />
            <input 
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />
            <input 
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <textarea 
                name="comments" 
                placeholder="Comments"
                onChange={handleChange}
            />
        </div>
    );
}

export default Contact;