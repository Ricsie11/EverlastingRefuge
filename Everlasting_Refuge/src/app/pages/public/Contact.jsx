import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Reach out to Everlasting Refuge Church. We’d love to hear from you!
      </p>

      <div className="space-y-2">
        <p>Email: info@everlastingrefuge.org</p>
        <p>Phone: +234 800 000 0000</p>
        <p>Location: 123 Church Street, Lagos, Nigeria</p>
      </div>

      {/* Optional contact form */}
      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-2 rounded"
          rows={4}
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;