import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";
import fourth from "../assets/fourth.jpg";
import fifth from "../assets/fifth.jpg";
import ads from "../assets/ads.jpg";
import seventh from "../assets/seventh.jpg";
import eight from "../assets/eight.jpg";
import ninth from "../assets/ninth.jpg";
import group1 from "../assets/group1.jpg";
import group2 from "../assets/group2.jpg";
import group3 from "../assets/group3.jpg";
import group4 from "../assets/group4.jpg";
import group5 from "../assets/group5.jpg";
import group6 from "../assets/group6.jpg";
import group7 from "../assets/group7.jpg";
import group8 from "../assets/group8.jpg";
import group9 from "../assets/porkchive.jpg";
import group10 from "../assets/blog5.jpg";
import group11 from "../assets/blog4.jpg"
const recipesData = [
  {
    id: 1,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    category: "Snack",
    image: first,
    videoUrl: "https://www.youtube.com/embed/tuDbSVyClzI",
    description:
      "A rich and flavorful wagyu cheeseburger with crispy lettuce, tomatoes, and cheddar cheese.",
    ingredients: {
      main: [
        "200g wagyu beef",
        "2 burger buns",
        "2 slices of cheddar cheese",
        "Lettuce",
        "Tomato slices",
        "Red onion rings",
      ],
      sauce: ["2 tbsp mayonnaise", "1 tbsp ketchup", "1 tsp mustard"],
    },
    instructions: [
      "Form patties from wagyu beef and season with salt and pepper.",
      "Grill the patties for 4-5 minutes each side.",
      "Toast the buns and add sauce.",
      "Add lettuce, tomato, patty, cheese and onion.",
      "Serve immediately.",
    ],
    nutrition: {
      calories: "512 kcal",
      fat: "32 g",
      protein: "27 g",
      carbs: "35 g",
      cholesterol: "90 mg",
    },
  },
  {
    id: 2,
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    time: "30 Minutes",
    category: "Fish",
    image: second,
    videoUrl: "https://www.youtube.com/embed/BE52KjzT9Rc",
    description:
      "Crispy roasted salmon fillet with a tangy lime-ginger glaze. A healthy and tasty option.",
    ingredients: {
      main: ["2 salmon fillets", "1 lime (sliced)", "Salt and pepper to taste"],
      sauce: [
        "1 tbsp grated ginger",
        "2 tbsp soy sauce",
        "1 tbsp honey",
        "1 tbsp lime juice",
      ],
    },
    instructions: [
      "Preheat oven to 200°C (400°F).",
      "Season salmon and top with lime slices.",
      "Bake for 12-15 minutes.",
      "Mix sauce ingredients and simmer in pan until slightly thickened.",
      "Pour sauce over salmon and serve.",
    ],
    nutrition: {
      calories: "310 kcal",
      fat: "18 g",
      protein: "28 g",
      carbs: "7 g",
      cholesterol: "75 mg",
    },
  },
  {
    id: 3,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    time: "30 Minutes",
    category: "Breakfast",
    image: third,
    videoUrl: "https://www.youtube.com/embed/ium5RFwnM3U",
    description:
      "Healthy oatmeal pancakes topped with fresh strawberries and sweet honey syrup.",
    ingredients: {
      main: [
        "1 cup oats",
        "1 egg",
        "1/2 cup milk",
        "1 tsp baking powder",
        "Strawberries (sliced)",
      ],
      sauce: ["2 tbsp honey", "1 tbsp lemon juice"],
    },
    instructions: [
      "Blend oats into flour, mix with egg, milk, and baking powder.",
      "Cook pancakes on a non-stick pan until golden.",
      "Top with strawberries.",
      "Drizzle with warm honey-lemon syrup.",
    ],
    nutrition: {
      calories: "280 kcal",
      fat: "7 g",
      protein: "9 g",
      carbs: "45 g",
      cholesterol: "55 mg",
    },
  },
  {
    id: 4,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    time: "30 Minutes",
    category: "Salad",
    image: fourth,
    videoUrl: "https://www.youtube.com/embed/M7s6kyxm54E",
    description:
      "A crisp salad featuring mixed greens, fresh vegetables, and a light homemade mayonnaise dressing.",
    ingredients: {
      main: [
        "2 cups mixed greens",
        "1 cucumber (sliced)",
        "1 cup cherry tomatoes",
        "1/2 red onion (thinly sliced)",
        "1/4 cup shredded carrots",
      ],
      sauce: [
        "3 tbsp mayonnaise",
        "1 tbsp lemon juice",
        "1 tsp Dijon mustard",
        "Salt and pepper to taste",
      ],
    },
    instructions: [
      "Combine greens, cucumber, tomatoes, onion, and carrots in a large bowl.",
      "Mix mayonnaise, lemon juice, mustard, salt, and pepper to make dressing.",
      "Pour dressing over salad and toss gently.",
      "Serve immediately or chilled.",
    ],
    nutrition: {
      calories: "210 kcal",
      fat: "18 g",
      protein: "2 g",
      carbs: "10 g",
      cholesterol: "10 mg",
    },
  },
  {
    id: 5,
    title: "Chicken Meatballs with Cream Cheese",
    time: "30 Minutes",
    category: "Meat",
    image: fifth,
    videoUrl: "https://www.youtube.com/embed/il7HON8COkE",
    description:
      "Tender chicken meatballs stuffed with creamy cheese, served with a savory sauce.",
    ingredients: {
      main: [
        "400g ground chicken",
        "100g cream cheese",
        "1/2 cup breadcrumbs",
        "1 egg",
        "2 cloves garlic (minced)",
        "Salt and pepper to taste",
      ],
      sauce: [
        "1/2 cup tomato sauce",
        "1 tbsp olive oil",
        "1 tsp dried oregano",
      ],
    },
    instructions: [
      "Preheat oven to 190°C (375°F).",
      "Mix ground chicken, breadcrumbs, egg, garlic, salt, and pepper.",
      "Form small balls, stuff each with cream cheese inside.",
      "Place meatballs on baking tray and bake for 20-25 minutes.",
      "Heat tomato sauce with olive oil and oregano, pour over meatballs.",
      "Serve hot.",
    ],
    nutrition: {
      calories: "380 kcal",
      fat: "22 g",
      protein: "30 g",
      carbs: "10 g",
      cholesterol: "95 mg",
    },
  },
  {
    id: 6,
    title: "Don't forget to eat healthy food",
    time: "",
    category: "Ad",
    image: ads,
    description:
      "A gentle reminder to keep balanced nutrition in mind for a healthier lifestyle.",
    ingredients: {},
    instructions: [],
    nutrition: {},
  },
  {
    id: 7,
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    time: "25 Minutes",
    category: "Lunch",
    image: ninth,
    videoUrl: "https://www.youtube.com/embed/SA5As1Q3tkQ",
    description:
      "Rich and indulgent pasta with tender chicken, crispy bacon, and a creamy garlic parmesan sauce — perfect for a hearty meal.",
    ingredients: {
      main: [
        "200g pasta (penne or fettuccine)",
        "2 chicken breasts, diced",
        "4 slices of bacon, chopped",
        "2 cloves garlic, minced",
        "1 cup heavy cream",
        "1/2 cup grated Parmesan cheese",
        "1 tbsp olive oil",
        "Salt and black pepper to taste",
        "Fresh parsley for garnish",
      ],
      sauce: [],
    },
    instructions: [
      "Cook pasta according to package instructions; drain and set aside.",
      "In a large skillet, cook bacon over medium heat until crispy. Remove and set aside.",
      "In the same skillet, add olive oil and sauté garlic for 1 minute.",
      "Add diced chicken, season with salt and pepper, and cook until golden and cooked through.",
      "Pour in heavy cream and bring to a simmer. Stir in Parmesan cheese.",
      "Return bacon to the pan, then add the cooked pasta and toss to coat evenly in the sauce.",
      "Garnish with fresh parsley and serve warm.",
    ],
    nutrition: {
      calories: "620 kcal",
      fat: "36 g",
      protein: "38 g",
      carbs: "40 g",
      cholesterol: "115 mg",
    },
  },

  {
    id: 8,
    title: "The Best Easy One Pot Chicken and Rice",
    time: "15 Minutes",
    category: "Breakfast",
    image: eight,
    videoUrl: "https://www.youtube.com/embed/ybDYma_bG-A",
    description:
      "A simple and delicious one-pot meal combining tender chicken and flavorful rice for a quick and easy dinner.",
    ingredients: {
      main: [
        "1 lb chicken thighs, boneless and skinless",
        "1 cup long grain white rice",
        "2 cups chicken broth",
        "1 onion, diced",
        "2 cloves garlic, minced",
        "1 cup frozen peas and carrots",
        "2 tbsp olive oil",
        "Salt and pepper to taste",
        "1 tsp paprika",
        "1/2 tsp dried thyme",
      ],
      sauce: [],
    },
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Add diced onion and garlic, sauté until translucent.",
      "Add chicken thighs and cook until browned on both sides.",
      "Stir in rice, chicken broth, paprika, thyme, salt, and pepper.",
      "Bring to a boil, then reduce heat, cover, and simmer for 20 minutes.",
      "Add frozen peas and carrots, cook for another 5 minutes.",
      "Fluff rice with a fork and serve hot.",
    ],
    nutrition: {
      calories: "450 kcal",
      fat: "15 g",
      protein: "35 g",
      carbs: "40 g",
      cholesterol: "90 mg",
    },
  },

  {
    id: 9,
    title: "Chocolate Cake with Cream Topping",
    time: "1 Hour",
    category: "Dessert",
    image: seventh,
    videoUrl: "https://www.youtube.com/embed/z2G6p-CDOeQ",
    description:
      "Rich and moist chocolate cake layered with fluffy cream topping, perfect for celebrations.",
    ingredients: {
      main: [
        "200g all-purpose flour",
        "200g sugar",
        "100g cocoa powder",
        "1 tsp baking powder",
        "1/2 tsp baking soda",
        "2 eggs",
        "120ml milk",
        "120ml vegetable oil",
        "1 tsp vanilla extract",
      ],
      sauce: [
        "200ml heavy cream",
        "2 tbsp powdered sugar",
        "1 tsp vanilla extract",
      ],
    },
    instructions: [
      "Preheat oven to 175°C (350°F).",
      "Mix dry ingredients: flour, sugar, cocoa, baking powder, baking soda.",
      "Add eggs, milk, oil, and vanilla, mix until smooth.",
      "Pour batter into greased cake pan and bake 30-35 minutes.",
      "Whip heavy cream with powdered sugar and vanilla until stiff peaks form.",
      "Once cake cools, spread cream topping evenly.",
      "Serve chilled or at room temperature.",
    ],
    nutrition: {
      calories: "450 kcal",
      fat: "25 g",
      protein: "6 g",
      carbs: "55 g",
      cholesterol: "80 mg",
    },
  },
];
export const NewrecipesData = [
  {
    id: 101,
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    time: "30 Minutes",
    category: "Healthy",
    image: group1,
    videoUrl: "https://www.youtube.com/embed/SA5As1Q3tkQ",
    description:
      "A refreshing tropical fruit salad boosted with nutrient-rich superfoods like chia seeds and goji berries.",
    ingredients: {
      main: [
        "1 cup pineapple chunks",
        "1 cup mango cubes",
        "1 cup papaya cubes",
        "1 banana (sliced)",
        "1/4 cup blueberries",
        "2 tbsp chia seeds",
        "2 tbsp goji berries",
        "1 tbsp honey",
        "1 tbsp lime juice",
      ],
      sauce: [],
    },
    instructions: [
      "Combine all chopped fruits in a large bowl.",
      "Sprinkle chia seeds and goji berries over the fruit.",
      "Mix honey and lime juice, drizzle over the salad.",
      "Toss gently and chill before serving.",
    ],
    nutrition: {
      calories: "220 kcal",
      fat: "3 g",
      protein: "3 g",
      carbs: "50 g",
      cholesterol: "0 mg",
    },
  },
  {
    id: 102,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    category: "Western",
    image: group2,
    videoUrl: "https://www.youtube.com/embed/SA5As1Q3tkQ",
    description:
      "A premium wagyu beef burger with melted cheese, fresh vegetables, and a special sauce.",
    ingredients: {
      main: [
        "200g wagyu beef patty",
        "2 burger buns",
        "2 slices cheddar cheese",
        "Lettuce",
        "Tomato slices",
        "Pickles",
      ],
      sauce: ["2 tbsp mayonnaise", "1 tbsp ketchup", "1 tsp mustard"],
    },
    instructions: [
      "Season beef patty with salt and pepper, grill 4-5 minutes each side.",
      "Toast buns lightly.",
      "Spread sauce on buns, layer lettuce, tomato, patty, cheese, and pickles.",
      "Serve immediately.",
    ],
    nutrition: {
      calories: "520 kcal",
      fat: "33 g",
      protein: "28 g",
      carbs: "35 g",
      cholesterol: "90 mg",
    },
  },
  {
    id: 103,
    title: "Healthy Japanese Fried Rice with Asparagus",
    time: "30 Minutes",
    category: "Healthy",
    image: group3,
    videoUrl: "https://www.youtube.com/embed/SA5As1Q3tkQ",
    description:
      "A light and flavorful Japanese-style fried rice with fresh asparagus and a hint of soy sauce.",
    ingredients: {
      main: [
        "2 cups cooked rice",
        "1 cup chopped asparagus",
        "1/2 cup diced carrots",
        "2 eggs",
        "2 tbsp soy sauce",
        "2 tbsp green onions",
        "1 tbsp sesame oil",
      ],
      sauce: [],
    },
    instructions: [
      "Heat sesame oil in a pan, scramble eggs and set aside.",
      "Sauté asparagus and carrots until tender.",
      "Add rice and soy sauce, stir-fry together.",
      "Add eggs back in and mix well.",
      "Garnish with green onions and serve.",
    ],
    nutrition: {
      calories: "350 kcal",
      fat: "12 g",
      protein: "14 g",
      carbs: "45 g",
      cholesterol: "110 mg",
    },
  },
  {
    id: 104,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    time: "30 Minutes",
    category: "Eastern",
    image: group4,
    videoUrl: "https://www.youtube.com/embed/SA5As1Q3tkQ",
    description:
      "A flavorful vegetarian taco filling made from minced cauliflower and crunchy walnuts seasoned with spices.",
    ingredients: {
      main: [
        "1 medium cauliflower (riced)",
        "1 cup chopped walnuts",
        "1 onion (diced)",
        "2 cloves garlic (minced)",
        "1 tsp cumin",
        "1 tsp smoked paprika",
        "Salt and pepper to taste",
        "2 tbsp olive oil",
      ],
      sauce: [],
    },
    instructions: [
      "Heat olive oil in pan, sauté onion and garlic until translucent.",
      "Add cauliflower rice and cook 5 minutes.",
      "Add walnuts, cumin, paprika, salt, and pepper; cook another 5 minutes.",
      "Use as taco filling or salad topping.",
    ],
    nutrition: {
      calories: "280 kcal",
      fat: "20 g",
      protein: "8 g",
      carbs: "15 g",
      cholesterol: "0 mg",
    },
  },
  {
    id: 105,
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    time: "30 Minutes",
    category: "Healthy",
    image: group5,
    videoUrl: "https://www.youtube.com/embed/SA5As1Q3tkQ",
    description:
      "A colorful salad with grilled chicken, fresh veggies, and a sweet and tangy almond honey mustard dressing.",
    ingredients: {
      main: [
        "200g grilled chicken breast (sliced)",
        "1 cup mixed greens",
        "1/2 red bell pepper (sliced)",
        "1/2 yellow bell pepper (sliced)",
        "1/2 cup shredded carrots",
        "1/4 cup sliced almonds",
      ],
      sauce: [
        "2 tbsp honey",
        "1 tbsp Dijon mustard",
        "1 tbsp apple cider vinegar",
        "2 tbsp olive oil",
        "Salt and pepper to taste",
      ],
    },
    instructions: [
      "Mix honey, mustard, vinegar, olive oil, salt, and pepper for dressing.",
      "Combine greens, bell peppers, carrots, and almonds in bowl.",
      "Top with grilled chicken and drizzle dressing over salad.",
      "Toss gently and serve.",
    ],
    nutrition: {
      calories: "370 kcal",
      fat: "18 g",
      protein: "35 g",
      carbs: "15 g",
      cholesterol: "70 mg",
    },
  },
  {
    id: 106,
    title: "Barbeque Spicy Sandwiches with Chips",
    time: "30 Minutes",
    category: "Snack",
    image: group6,
    videoUrl: "https://www.youtube.com/embed/SA5As1Q3tkQ",
    description:
      "Spicy barbeque sandwiches filled with smoky pulled meat and melted cheese, served with crunchy chips.",
    ingredients: {
      main: [
        "2 sandwich buns",
        "150g pulled pork or chicken",
        "2 slices cheddar cheese",
        "1/4 cup barbeque sauce",
        "1 jalapeno (sliced)",
        "Lettuce",
      ],
      sauce: [],
    },
    instructions: [
      "Mix pulled meat with barbeque sauce and jalapeno slices.",
      "Fill buns with meat mixture, cheese, and lettuce.",
      "Toast sandwiches until cheese melts.",
      "Serve with potato chips on the side.",
    ],
    nutrition: {
      calories: "580 kcal",
      fat: "35 g",
      protein: "30 g",
      carbs: "40 g",
      cholesterol: "90 mg",
    },
  },
  {
    id: 107,
    title: "Firecracker Vegan Lettuce Wraps - Spicy!",
    time: "30 Minutes",
    category: "Seafood",
    image: group7,
    videoUrl: "https://www.youtube.com/embed/SA5As1Q3tkQ",
    description:
      "Spicy vegan lettuce wraps filled with a zesty mix of vegetables and tofu, perfect as a light appetizer.",
    ingredients: {
      main: [
        "1 block firm tofu (crumbled)",
        "1 cup shredded carrots",
        "1/2 cup chopped bell peppers",
        "2 cloves garlic (minced)",
        "1 tbsp soy sauce",
        "1 tsp sriracha",
        "Lettuce leaves (for wrapping)",
      ],
      sauce: [],
    },
    instructions: [
      "Sauté garlic, tofu, carrots, and bell peppers in a pan.",
      "Add soy sauce and sriracha; cook until flavors combine.",
      "Spoon mixture into lettuce leaves and serve immediately.",
    ],
    nutrition: {
      calories: "260 kcal",
      fat: "14 g",
      protein: "18 g",
      carbs: "12 g",
      cholesterol: "0 mg",
    },
  },
  {
    id: 108,
    title: "Chicken Ramen Soup with Mushroom",
    time: "30 Minutes",
    category: "Japanese",
    image: group8,
    videoUrl: "https://www.youtube.com/embed/SA5As1Q3tkQ",
    description:
      "A comforting bowl of chicken ramen soup with tender mushrooms and savory broth.",
    ingredients: {
      main: [
        "150g cooked chicken breast (sliced)",
        "100g ramen noodles",
        "1 cup sliced mushrooms",
        "2 cups chicken broth",
        "1 tbsp soy sauce",
        "2 green onions (sliced)",
        "1 boiled egg (halved)",
      ],
      sauce: [],
    },
    instructions: [
      "Cook ramen noodles according to package instructions.",
      "In a pot, bring chicken broth to boil, add mushrooms and soy sauce.",
      "Add noodles and chicken, heat through.",
      "Serve topped with green onions and boiled egg halves.",
    ],
    nutrition: {
      calories: "400 kcal",
      fat: "12 g",
      protein: "35 g",
      carbs: "40 g",
      cholesterol: "185 mg",
    },
  },
  {
    id: 109,
    title: "Pork and Chive Chinese Dumplings",
    time: "50 Minutes",
    category: "Chinese",
    image: group9,
    videoUrl: "https://www.youtube.com/embed/hCebnUNHSvs",
    description:
      "Traditional Chinese dumplings filled with juicy pork and fresh chives, perfect for steaming or pan-frying.",
    ingredients: {
      main: [
        "300g ground pork",
        "1 cup finely chopped Chinese chives",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "1 tsp grated ginger",
        "1 garlic clove (minced)",
        "1/2 tsp salt",
        "30 dumpling wrappers",
      ],
      sauce: [
        "2 tbsp soy sauce",
        "1 tbsp rice vinegar",
        "1 tsp chili oil (optional)",
      ],
    },
    instructions: [
      "In a bowl, mix ground pork, chopped chives, soy sauce, sesame oil, ginger, garlic, and salt.",
      "Place 1 tsp of filling in the center of each dumpling wrapper. Moisten edges and fold to seal.",
      "Steam for 10 minutes or pan-fry with water until golden and cooked through.",
      "Serve hot with dipping sauce made from soy sauce, vinegar, and chili oil.",
    ],
    nutrition: {
      calories: "460 kcal",
      fat: "22 g",
      protein: "28 g",
      carbs: "35 g",
      cholesterol: "70 mg",
    },
  },
  {
    id: 110,
    title: "Plantain and Pinto Stew with Aji Verde",
    time: "1 Hour 10 Minutes",
    category: "Latin American",
    image: group10,
    videoUrl: "https://www.youtube.com/embed/example_plantain_stew_video",
    description:
      "A hearty and flavorful stew combining sweet plantains and creamy pinto beans, served with a spicy and tangy Aji Verde sauce.",
    ingredients: {
      main: [
        "2 ripe plantains (peeled and sliced)",
        "1 cup dried pinto beans (soaked overnight)",
        "1 onion (chopped)",
        "3 garlic cloves (minced)",
        "1 bell pepper (chopped)",
        "2 tomatoes (diced)",
        "4 cups vegetable broth",
        "2 tbsp olive oil",
        "1 tsp ground cumin",
        "1/2 tsp smoked paprika",
        "Salt and pepper to taste",
      ],
      sauce: [
        "1 cup fresh cilantro leaves",
        "1 jalapeño (seeded)",
        "2 garlic cloves",
        "1/4 cup olive oil",
        "2 tbsp lime juice",
        "Salt to taste",
      ],
    },
    instructions: [
      "Cook soaked pinto beans in vegetable broth until tender (about 45 minutes).",
      "In a large pot, heat olive oil and sauté onion, garlic, and bell pepper until soft.",
      "Add diced tomatoes, cumin, paprika, salt, and pepper; cook for 5 minutes.",
      "Add cooked beans along with cooking liquid and sliced plantains to the pot.",
      "Simmer stew for 15-20 minutes until plantains are soft and flavors meld.",
      "Meanwhile, prepare Aji Verde sauce by blending cilantro, jalapeño, garlic, olive oil, lime juice, and salt until smooth.",
      "Serve stew hot, drizzled with Aji Verde sauce.",
    ],
    nutrition: {
      calories: "480 kcal",
      fat: "12 g",
      protein: "18 g",
      carbs: "75 g",
      cholesterol: "0 mg",
    },
  },
  {
    id: 111,
    title: "Simple & Delicious Vegetarian Lasagna",
    time: "1 Hour 20 Minutes",
    category: "Italian",
    image: group11,
    videoUrl: "https://www.youtube.com/embed/example_vegetarian_lasagna_video",
    description:
      "A comforting vegetarian lasagna layered with rich tomato sauce, creamy ricotta, fresh vegetables, and melted mozzarella cheese.",
    ingredients: {
      main: [
        "9 lasagna noodles",
        "2 cups ricotta cheese",
        "2 cups shredded mozzarella cheese",
        "1 cup grated Parmesan cheese",
        "2 cups marinara sauce",
        "1 zucchini (sliced)",
        "1 cup sliced mushrooms",
        "1 red bell pepper (chopped)",
        "2 cups fresh spinach",
        "2 garlic cloves (minced)",
        "2 tbsp olive oil",
        "Salt and pepper to taste",
      ],
    },
    instructions: [
      "Preheat oven to 375°F (190°C). Cook lasagna noodles according to package instructions. Drain and set aside.",
      "In a skillet, heat olive oil and sauté garlic, zucchini, mushrooms, and bell pepper until tender. Add spinach and cook until wilted. Season with salt and pepper.",
      "Spread a thin layer of marinara sauce in a baking dish.",
      "Layer 3 lasagna noodles over the sauce. Spread 1/3 of the ricotta cheese over noodles, then add half of the sautéed vegetables, and sprinkle with 1/3 of the mozzarella cheese. Repeat layers once more.",
      "Top with remaining noodles, marinara sauce, mozzarella, and Parmesan cheese.",
      "Cover with foil and bake for 30 minutes. Remove foil and bake for another 15 minutes until cheese is bubbly and golden.",
      "Let lasagna rest for 10 minutes before serving.",
    ],
    nutrition: {
      calories: "520 kcal",
      fat: "20 g",
      protein: "28 g",
      carbs: "50 g",
      cholesterol: "65 mg",
    },
  },
];

export default recipesData;
