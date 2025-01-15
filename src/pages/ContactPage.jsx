import React from 'react';
import '../styles/Contact.css';
// import './Contact.css';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     formData.append("access_key", "e03e8ac6-f85d-4463-bffd-bdd1e8cf4a73");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const result = await response.json();
//     if (result.success) {
//       console.log("Form submitted successfully");
//       setName('');
//       setEmail('');
//       setMessage('');
//     }
//   };

//   return (
//     <div className="contact-form">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

const ContactPage = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e03e8ac6-f85d-4463-bffd-bdd1e8cf4a73");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return(
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2></h2>
        <div className="input-box">
          <label className="name">Name</label>
          <input type="text" className="field00" id="name" name="name" placeholder='Enter your name' required></input>
        </div>
        <div className="input-box">
          <label className="email">Email</label>
          <input type="text" className="field01" id="email" name="email" placeholder='Enter your email' required></input>
        </div>
        <div className="input-box0">
          <label className='label'></label>
          <textarea className="field mess" name="message" placeholder='Enter your message' required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
};

export default ContactPage;


// // header, link React/dom/css/footer/
// // import React from "react";
// import React, { useState } from 'react';
// // import { Header } from "../components/Header.jsx";
// // import { Navbar } from "../components/Navbar.jsx";
// // import { Footer } from "../components/Footer.jsx";
// // import { postDb, getDb, deleteDb } from './database';
// import "../components/UI/Contact.css";

//     const ContactPage = () => {
//       const [name, setName] = useState('');
//       const [email, setEmail] = useState('');
//       const [message, setMessage] = useState('');
//     };
//       const handleSubmit = (event) => {
//         event.preventDefault();
//         // Add your form submission logic here
//       };
    
//       const handleDelete = () => {
//         // Add your delete logic here
//         setName('');
//         setEmail('');
//         setMessage('');
//       };
//     import React from "react";

//     function App() {
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
    
//         formData.append("access_key", "e03e8ac6-f85d-4463-bffd-bdd1e8cf4a73""e03e8ac6-f85d-4463-bffd-bdd1e8cf4a73");
    
//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);
    
//         const res = await fetch('https://api.web3forms.com/submit', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: json
//         }).then((res) => res.json());
    
//         if (res.success) {
//         console.log("Success", res);
//         }
//     };
    
//       return (
//         <div>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               ></textarea>
//             </div>
//             <button type="submit">Submit</button>
//           </form>
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       );
//     };
    
//     export default ContactPage;
