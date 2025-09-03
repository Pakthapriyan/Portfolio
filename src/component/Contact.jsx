import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_onxbr3m",     // Your EmailJS Service ID
        "template_8fpff1q",    // Your EmailJS Template ID
        form.current,
        "aC423kUvsEGLko_Z0"    // Your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="p-10 bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Contact Me</h2>

      <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2 text-cyan-300">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded-lg bg-black/60 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2 text-cyan-300">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded-lg bg-black/60 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium mb-2 text-cyan-300">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              className="w-full p-3 rounded-lg bg-black/60 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2 text-cyan-300">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-3 rounded-lg bg-black/60 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-600 hover:shadow-cyan-400/50 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Status message */}
        {status && (
          <p className="mt-4 text-center text-sm text-cyan-300">{status}</p>
        )}
      </div>
    </section>
  );
}
