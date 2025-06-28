// const PrivacyPolicy = () => {
//   return <div>

//   </div>;
// };
// export default PrivacyPolicy;
const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy explains how we collect, use, and protect your
        personal information when you use our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect the following information when you use our website:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Your name and email address (if you submit a contact form)</li>
        <li>Usage data, such as pages visited and time spent on site</li>
        <li>Technical data, such as browser type and device information</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">We use your information to:</p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Respond to your messages or inquiries</li>
        <li>Improve the quality and functionality of our website</li>
        <li>Analyze user behavior to enhance the user experience</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies</h2>
      <p className="mb-4">
        We may use cookies to improve site performance and track user behavior.
        You can choose to disable cookies through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Third-Party Services
      </h2>
      <p className="mb-4">
        We may use third-party services (e.g. analytics or form submissions)
        that collect, monitor, and analyze data on our behalf. These services
        comply with privacy and data protection laws.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
      <p className="mb-4">
        We take reasonable precautions to protect your information but cannot
        guarantee complete security due to the nature of the internet.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
      <p className="mb-4">You may contact us at any time to:</p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Request access to the personal data we hold about you</li>
        <li>Request correction or deletion of your data</li>
        <li>Withdraw any consent you previously provided</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        7. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with the updated date at the top.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us
        at:
        <br />
        <a href="/contact" className="text-blue-600 underline">
          Contact
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
