"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 w-full"
          rows={4}
          placeholder="Your message"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
    </section>
  );
}
