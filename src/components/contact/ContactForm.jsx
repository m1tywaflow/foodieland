// import cook from "/src/assets/cook.jpg";
// const ContactForm = () => {
//   return <div></div>;
// };
// export default ContactForm;
import cook from "/src/assets/cook.jpg";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={cook}
            alt="Chef"
            className="rounded-3xl object-cover w-full max-w-sm"
          />
        </div>

        {/* Form Section */}
        <div className="w-full space-y-6">
          <h2 className="text-4xl font-bold text-black">Contact us</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your name..."
                className="p-3 border rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Your email address..."
                className="p-3 border rounded-md w-full"
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
              placeholder="Enter your messages..."
              className="p-3 border rounded-md w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
