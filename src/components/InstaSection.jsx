import React, { useState } from "react";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";
import post4 from "../assets/post4.jpg";

const InstaSection = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  return (
    <div className="pt-30 max-w-2/3 mx-auto rounded-4xl pb-100">
      <div className="text-center">
        <h1 className="text-5xl">Check out @foodieland on Instagram</h1>
        <p className="pt-4 font-light text-lg">
          You can see posts with our dishes that we have posted on our Instagram
        </p>
      </div>
      <div className="flex gap-10 justify-center pt-20 flex-wrap">
        {[post1, post2, post3, post4].map((img, i) => (
          <img
            key={i}
            src={img}
            alt="food"
            loading="lazy"
            onClick={() => openModal(img)}
            className="cursor-pointer max-w-[250px] rounded-xl hover:scale-105 transition-transform"
          />
        ))}
      </div>
      <div className="text-center pt-14">
        <button className="bg-black w-40 h-10 rounded-2xl  text-white hover:bg-orange-400 transition duration-200">
          Visit Our Instagram
        </button>
      </div>
      {modalImage && (
        <div
          className="fixed inset-0  bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="zoomed"
            className="w-[20%] max-w-6xl max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default InstaSection;
