import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here (e.g., send to backend or API)
  };

  return (
    <section
      className="w-full max-w-2xl mx-auto px-6 py-12 rounded-xl shadow-md"
      style={{ backgroundColor: "#282828", color: "#e4e4e4" }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="mt-1 block w-full border border-gray-600 bg-[#3f3f3f] text-white rounded-md shadow-sm p-2 focus:ring-[#915f6e] focus:border-[#915f6e]"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full border border-gray-600 bg-[#3f3f3f] text-white rounded-md shadow-sm p-2 focus:ring-[#915f6e] focus:border-[#915f6e]"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white">
            Phone (optional)
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="mt-1 block w-full border border-gray-600 bg-[#3f3f3f] text-white rounded-md shadow-sm p-2 focus:ring-[#915f6e] focus:border-[#915f6e]"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            className="mt-1 block w-full border border-gray-600 bg-[#3f3f3f] text-white rounded-md shadow-sm p-2 focus:ring-[#915f6e] focus:border-[#915f6e]"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#915f6e] text-white py-2 px-4 rounded hover:bg-[#7c4d5d] transition font-medium"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
