'use client';
import { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <section
  id="contact"
  className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white"
>
  <div className="container mx-auto px-6 max-w-xl">
    <h2 className="text-4xl font-extrabold mb-12 text-center">
      Get In <span className="text-blue-500">Touch</span>
    </h2>

    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10"
    >
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          placeholder="Write your message..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium text-white shadow-md transition-all duration-300 ${
          isSubmitting
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
        }`}
      >
        {isSuccess ? (
          <>
            <FiCheckCircle className="text-green-300 text-xl animate-bounce" />
            Message Sent!
          </>
        ) : (
          <>
            <FiSend className="text-white text-xl animate-pulse" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </>
        )}
      </button>
    </form>
  </div>
</section>

  );
}