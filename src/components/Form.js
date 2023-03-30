import './FormStyles.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_93vaeyl',
        'template_jr1yimn',
        form.current,
        'H7ngG0tPVHqLrvt0d'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form className="form"ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="name"></input>
        <label>Email</label>
        <input type="email" name="email"></input>
        <label>Subject</label>
        <input type="text" name="subject"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message"/>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
