import { useState } from "react";
import "./Contact.css";

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
        <label for="form">First Name</label>
            <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
            />
        <label for="form">Last Name</label>
            <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />
        <label for="form">Email</label>
            <input 
                name="email" 
                placeholder="Email" 
                onChange={handleChange} 
            />
        <label for="form">Comments</label>
        <textarea
            name="comments"
            placeholder="Comments"
            onChange={handleChange}
        />
        <button type="submit" className="send">
          Send
        </button>
      </div>
    );
}

export default Contact;