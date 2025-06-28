// import cook from "/src/assets/cook.jpg";

// const ContactForm = () => {
//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-6">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Image Section */}
//         <div className="flex justify-center">
//           <img
//             src={cook}
//             alt="Chef"
//             className="rounded-3xl object-cover w-full max-w-sm"
//           />
//         </div>

//         {/* Form Section */}
//         <div className="w-full space-y-6">
//           <h2 className="text-4xl font-bold text-black">Contact us</h2>
//           <p className="text-gray-600 text-lg leading-relaxed">
//             Have a question, suggestion, or just want to say hello? We’d love to
//             hear from you! Whether you're looking to collaborate, need support
//             with a recipe, or want to give feedback on our site — just fill out
//             the form below and we’ll get back to you as soon as possible.
//           </p>
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Enter your name..."
//                 className="p-3 border rounded-md w-full"
//               />
//               <input
//                 type="email"
//                 placeholder="Your email address..."
//                 className="p-3 border rounded-md w-full"
//               />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Enter subject..."
//                 className="p-3 border rounded-md w-full"
//               />
//               <select className="p-3 border rounded-md w-full">
//                 <option>Advertising</option>
//                 <option>Support</option>
//                 <option>Feedback</option>
//                 <option>Other</option>
//               </select>
//             </div>
//             <textarea
//               rows="5"
//               placeholder="Enter your message..."
//               className="p-3 border rounded-md w-full"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>

//     </div>

//   );
// };

// export default ContactForm;
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import cook from "/src/assets/cook.jpg";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно отправить данные на сервер
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Image and Contact Info */}
        <div className="space-y-6">
          <img
            src={cook}
            alt="Chef"
            className="rounded-3xl object-cover w-full max-w-sm mx-auto shadow-lg"
          />
          <div className="text-gray-700 text-base space-y-2 px-4">
            <p>
              <strong>Email:</strong> support@cookhub.com
            </p>
            <p>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p>
              <strong>Address:</strong> 123 Kitchen Street, Food City, CA
            </p>
          </div>
          <div className="flex gap-4 text-2xl justify-center text-gray-600">
            <a
              href="*"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="*"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="*"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full space-y-6 animate-fadeIn">
          <h2 className="text-4xl font-bold text-black">Contact us</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Have a question, suggestion, or just want to say hello? We’d love to
            hear from you! Whether you're looking to collaborate, need support
            with a recipe, or want to give feedback on our site — just fill out
            the form below and we’ll get back to you as soon as possible.
          </p>

          {submitted ? (
            <div className="p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
              ✅ Thank you! Your message has been submitted.
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="p-3 border rounded-md w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email address..."
                  className="p-3 border rounded-md w-full"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter subject..."
                  className="p-3 border rounded-md w-full"
                />
                <select className="p-3 border rounded-md w-full">
                  <option>Advertising</option>
                  <option>Support</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea
                rows="5"
                placeholder="Enter your message..."
                className="p-3 border rounded-md w-full"
                required
              ></textarea>
              <div className="flex items-start gap-2">
                <input type="checkbox" required className="mt-1 w-4 h-4" />
                <label className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="/privacy-policy" className="underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
              >
                Submit
              </button>
            </form>
          )}

          {/* FAQ Section */}
          <div className="mt-6 text-sm text-gray-500 border-t pt-4">
            <p>
              <strong>Q:</strong> How long does it take to get a response?
            </p>
            <p>
              <strong>A:</strong> We usually respond within 24–48 hours.
            </p>
            <p className="mt-2">
              <strong>Q:</strong> Can I collaborate with you?
            </p>
            <p>
              <strong>A:</strong> Absolutely! Just select "Advertising" or
              "Other" in the form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
