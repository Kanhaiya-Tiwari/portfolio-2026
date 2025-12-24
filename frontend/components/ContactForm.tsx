'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div>
      <span className="text-terminalGreen text-lg font-bold">Send a Message:</span><br/>
      <form onSubmit={handleSubmit}>
        <span className="text-terminalGray text-base font-medium">Name:</span> <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-black text-terminalBlue border border-terminalGray"
        /><br/>
        <span className="text-terminalGray text-base font-medium">Email:</span> <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-black text-terminalBlue border border-terminalGray"
        /><br/>
        <span className="text-terminalGray text-base font-medium">Message:</span> <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="bg-black text-terminalBlue border border-terminalGray"
        /><br/>
        <button type="submit" className="text-terminalGreen px-4 py-2 rounded-lg border border-terminalGreen hover:bg-terminalGreen hover:text-black transition-colors duration-300 font-bold mt-4">Send</button>
      </form>
      {status && <div className="text-terminalYellow text-base mt-2 font-medium">{status}</div>}
    </div>
  );
}