import React, { useState } from 'react';
import axios from 'axios';

const ElasticEmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAttachmentChange = (event) => {
    setAttachment(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('attachment', attachment);

    let ebody = `
    <h1>First Name: ${name} </h1>
    <br>
    <h1>Last Name: </h1>
    `;
    formData.append('ebody', ebody);

    // axios.post('https://api.elasticemail.com/v2/email/send', formData, {
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //   },
    //   params: {
    //     apiKey: '26F171BBB23596183170D4041466CEBE745F30D7B100BE40EB4BDD8DDFB6D23A5A90BAA1CF2341BF984A3B238B085339',
    //     subject: 'New message from ElasticEmailForm',
    //     from: 'emailsenderforimc@gmail.com',
    //     fromName: 'Your Name',
    //     to: 'emailsenderforimc@gmail.com',
    //     bodyText: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    //   }
    // }).then(response => {
    //   setLoading(false);
    //   console.log(response);
    // }).catch(error => {
    //   setLoading(false);
    //   setError(error.message);
  
    Email.send({
        SecureToken : "003d8736-caa9-40fd-be7c-b60a4a8a3feb", //add your token here
        To : 'emailsenderforimc@gmail.com', 
        From : "emailsenderforimc@gmail.com",
        Subject : "This is the subject",
        Body : formData,
    }).then(
        message => alert(message),
        setLoading(false)
    //   console.log(response);
      );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={message} onChange={handleMessageChange}></textarea>
      </div>
      <div>
        <label htmlFor="attachment">Attachment:</label>
        <input type="file" id="attachment" name="attachment" onChange={handleAttachmentChange} />
      </div>
      <button type="submit" disabled={loading}>Send</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default ElasticEmailForm;
