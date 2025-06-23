import React from "react";
import chef from "/src/assets/chefImg.jpg";
import elipse from "/src/assets/elipse.jpg";
import women from "/src/assets/women.jpg";
import InBox from "/src/components/InBox"

const Guide = () => {
  return (
    <div className="flex items-center justify-center pt-20 text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Full Guide to Becoming a Professional Chef
        </h1>
        <div className="flex mb-4 pt-13 justify-center">
          <div className="gap-10 flex">
            <img src={elipse} alt="author" className="w-14 h-14 rounded-full" />
            <p className="relative top-4 font-bold">John Smith</p>
            <div>
              <p className="font-light relative top-4">15 March 2022</p>
            </div>
          </div>
        </div>
        <p className="text-x font-light pt-10">
          Your journey to becoming a master chef starts here! Whether you're
          just learning how to hold a knife or you're ready to dive into
          advanced culinary techniques, this guide will walk you through every
          step. From mastering essential kitchen tools and ingredients to
          understanding the art of plating and flavor pairing — we’ve got it all
          covered. Get ready to explore recipes, pro tips, and the mindset
          needed to thrive in a professional kitchen.
        </p>
        <div className="pt-10">
          <img src={chef} alt="chef" />
        </div>
        <div className="pt-24">
          <div>
            <h1 className="text-3xl font-bold">
              How did you start out in the food industry?
            </h1>
            <p className="font-light pt-9">
              I started out in the food industry with a deep passion for cooking
              that began in my grandmother’s kitchen. Watching her create meals
              from scratch taught me the importance of patience, precision, and
              love for ingredients. My first official step was working as a
              dishwasher at a small local restaurant — not glamorous, but it
              gave me a behind-the-scenes view of how a kitchen truly runs. From
              there, I gradually moved up to prep cook, then line cook,
              constantly learning from more experienced chefs. Attending
              culinary school later helped refine my skills, but it was those
              early, hands-on experiences that truly shaped my understanding of
              the food world.
            </p>
          </div>
          <div className="pt-20">
            <h1 className="text-3xl font-bold">
              What do you like most about your job?
            </h1>
            <p className="font-light pt-9">
              What I love most about my job is the ability to create something
              meaningful every single day. Cooking is more than just preparing
              food — it’s about evoking emotion, telling a story through
              flavors, and bringing people together. There’s a unique joy in
              seeing someone’s face light up after tasting a dish you poured
              your heart into. I also love the constant learning — the food
              industry never stands still. New techniques, ingredients, and
              cultures continuously inspire me to grow and push my own limits as
              a chef.
            </p>
          </div>
          <div className="pt-20">
            <h1 className="text-3xl font-bold">
              Do you cook at home on your days off?
            </h1>
            <img className="pl-30" src={women} alt="women-Img" />
            <p className="font-light pt-9">
              Yes, I do — but it’s a very different kind of cooking. On my days
              off, I keep things simple and comforting. It’s less about perfect
              plating and more about enjoying the process. I love experimenting
              with new ingredients or making dishes from my childhood. Cooking
              at home gives me a chance to slow down, cook without pressure, and
              reconnect with why I fell in love with food in the first place.
              Sometimes, it's just a good bowl of pasta, a one-pot stew, or
              baking bread for fun.
            </p>
          </div>
          <div className="pt-20">
            <h1 className="text-3xl font-bold">
              What would your advice be to young people looking to get their
              foot in the door?
            </h1>
            <p className="font-light pt-9">
              My biggest advice? Be humble, be hungry, and be ready to work
              hard. The food industry is demanding, but it rewards passion and
              persistence. Don’t be afraid to start at the bottom — washing
              dishes, prepping vegetables, whatever it takes. That’s where you
              learn the flow of the kitchen and earn the respect of your team.
              Ask questions, watch everything, and always stay curious. Also,
              never underestimate the value of showing up on time, having a good
              attitude, and being dependable — those traits can take you further
              than talent alone. Finally, remember why you’re here: love for
              food and the people you serve.
            </p>
          </div>
          <div className="pt-40">
            <h1 className="text-5xl italic">
              “Passion will get you started, but discipline keeps you going.”
            </h1>
          </div>
          <div className="pt-40">
            <h1 className="text-3xl font-bold">
              What is the biggest misconception that people have about being a
              professional chef?
            </h1>
            <p className="font-light pt-9">
              One of the biggest misconceptions is that being a professional
              chef is all about glamour, creativity, and plating beautiful
              dishes — like what people see on cooking shows or Instagram. While
              creativity is definitely part of it, the reality is that it’s also
              physically and mentally demanding. Long hours, high pressure, hot
              kitchens, and constant multitasking are daily challenges. It’s not
              just about cooking — it’s about leadership, consistency, managing
              a team, and staying calm when things go wrong. Many people
              underestimate the discipline, endurance, and sacrifice it takes to
              succeed in this field.
            </p>
          </div>
        </div>
        <div><InBox/></div>
      </div>
    </div>
  );
};

export default Guide;
