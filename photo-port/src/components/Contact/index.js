import React, { useState } from 'react';


function ContactForm() {
    //  hook will manage form data and initialize value of the state
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    // function will sync the internal state of the component formState with the user input from the DOM
    function handleChange(e) {
        // uses setFormState() to update the formState value for the name property
        // spread operator (...) to retain the other key-value pairs in this object
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
      
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                <button type="submit">Submit</button>
          </form>
        </section>
    )
}
    
export default ContactForm;