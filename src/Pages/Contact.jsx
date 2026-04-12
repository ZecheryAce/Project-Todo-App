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

    function handleSubmit(e) {
      e.preventDefault();
      console.log(form);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
      });
    }

    return (
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="contactForm">Contact Form</h2>
        <label htmlFor="firstName">First Name:</label>
        <input
          name="firstName"
          value={form.firstName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          name="lastName"
          value={form.lastName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <label htmlFor="comments">Comments:</label>
        <textarea
          name="comments"
          value={form.comments}
          placeholder="Comments"
          onChange={handleChange}
        />
        <button type="submit" className="send">
          Send
        </button>
      </form>
    );
}

export default Contact;