import React, { useState } from 'react'
import '../../styles/Contact.css'

export default function Contact() {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    return (
        <div className='contact'>
            <div className='title'>Contact</div>
            <div>
            <div className="sudh">
                Sudharshan
            </div>
            <div className="ph">
                <div>
                <i class="fas fa-mobile"></i>:
                </div>
                <div>
                    9791669887
                </div>
            </div>
            <div  className='loc'>
                <div>
                <i class="fas fa-map-marker-alt"></i>:
                </div>
                <div>
                2/100-36,Senkadu East,Kurumbapalyam,Sulur,Coimbatore.
                </div>
            </div>
            </div>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required />
                </div>
                <button type="submit">{status}</button>
            </form>
    
        </div>    );
}

