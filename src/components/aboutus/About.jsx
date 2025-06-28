// import firstsec from "/src/assets/firstsec.jpg"
// import secondsec from "/src/assets/secondsec.jpg"
// import thirdsec from "/src/assets/thirdsec.jpg"
// const About = () => {
//   return <div></div>;
// };
// export default About;

import React from "react";
import secondsec from "/src/assets/secondsec.jpg";
import elipse from "/src/assets/elipse.jpg";
import thirdsec from "/src/assets/thirdsec.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Текстовая часть */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📌</span>
            <p className="text-lg font-semibold text-gray-700">About Us</p>
          </div>

          <h1 className="text-4xl font-extrabold mb-4 text-gray-900 leading-tight">
            We’re passionate about <br /> sharing great food
          </h1>

          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. We
            believe food brings people together — and we’re here to inspire home
            cooks with simple, tasty recipes.
          </p>

          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow text-sm">
              🍽️ Cooking Experience — More than 10 Years
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow text-sm">
              🌍 Global Recipes — From 25+ Countries
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <img src={elipse} alt="author" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold text-gray-800">Jane Doe</p>
              <p className="text-sm text-gray-500">10 February 2025</p>
            </div>
          </div>
        </div>

        {/* Фото */}
        <div>
          <img
            src={secondsec}
            alt="Team cooking"
            className="rounded-2xl shadow-xl w-full"
          />
        </div>
      </div>

      {/* История */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            {/* Текстовая часть */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Foodieland started in 2015 with one simple mission: to make home
                cooking enjoyable and accessible for everyone. What began as a
                blog written from a tiny apartment kitchen has grown into a
                vibrant food platform followed by millions.
              </p>
              <p className="text-gray-600 text-lg">
                We believe that food is more than nourishment — it's connection,
                culture, and creativity. Whether you're a seasoned cook or a
                total beginner, we’re here to guide, inspire, and share the joy
                of cooking.
              </p>
              <Link to="/blog">
                <button className="mt-6 bg-black text-white px-5 py-2 rounded-full hover:bg-orange-400 duration-200 transition cursor-pointer">
                  Read More on Our Blog
                </button>
              </Link>
            </div>

            {/* Фото */}
            <div className="md:w-1/2">
              <img
                src={thirdsec}
                alt="Cooking story"
                className="rounded-2xl shadow-lg w-[300px]"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Meet the Team Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Meet Our Team
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Our small but mighty team is passionate about making cooking easier
            and more joyful. Together, we bring recipes from kitchens around the
            world to your table.
          </p>

          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {[
              {
                name: "Alice Carter",
                role: "Head Chef",
                img: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                name: "Mark Lin",
                role: "Recipe Developer",
                img: "https://randomuser.me/api/portraits/men/34.jpg",
              },
              {
                name: "Sofia Nunez",
                role: "Food Photographer",
                img: "https://randomuser.me/api/portraits/women/12.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-md transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">What We Do</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We blend creativity, flavor, and visual storytelling to inspire
            cooking at every level. Here's what we’re known for:
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-left">
            {[
              {
                icon: "📷",
                title: "Food Photography",
                desc: "We create mouth-watering visuals that bring recipes to life.",
              },
              {
                icon: "✍️",
                title: "Recipe Development",
                desc: "Tried-and-true recipes tailored for home cooks of all skill levels.",
              },
              {
                icon: "🎥",
                title: "Video Content",
                desc: "Short, clear videos that walk you through each recipe step-by-step.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">
            What Our Readers Say
          </h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-left">
            {[
              {
                quote:
                  "I’ve never enjoyed cooking until I found Foodieland. Every recipe just works!",
                name: "Lena K.",
              },
              {
                quote:
                  "I love the way they explain steps. The photography is gorgeous and helpful.",
                name: "Daniel M.",
              },
              {
                quote:
                  "I made their chocolate lava cake — twice in one week! My family is obsessed.",
                name: "Rachel T.",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-700 italic mb-4">
                  “{testimonial.quote}”
                </p>
                <p className="text-gray-900 font-semibold">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue-600 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Connect</h2>
          <p className="text-lg md:text-xl mb-6">
            Have questions, feedback, or a collaboration idea? We’d love to hear
            from you!
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-400 duration-200 transition cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
