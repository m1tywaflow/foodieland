import React from "react";
import { blogPosts, tastyRecipes } from "/src/data/blogData";
import { Link } from "react-router-dom";
function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-2">Blog & Article</h1>
      <p className="text-gray-500 mb-6 max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>

      <div className="flex items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search article, news or recipe..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main blog posts */}
        <div className="lg:col-span-2 space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row gap-6">
              <img
                src={post.image}
                alt={post.title}
                className="w-full md:w-60 h-40 object-cover rounded-xl"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2">{post.excerpt}</p>
                <div className="text-sm text-gray-400">
                  <span>{post.author}</span> • <span>{post.date}</span>
                </div>
              </div>
              <div>
                <Link to="/recipes">
                  <button className="w-[100px] h-[50px] text-white bg-black rounded-2xl hover:bg-orange-400 duration-200 transition cursor-pointer">
                    Go here
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar with tasty recipes */}
        <aside className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Tasty Recipes</h3>
          {tastyRecipes.map((recipe) => (
            <div key={recipe.id} className="flex gap-4 items-center">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div>
                <p className="text-sm font-medium">{recipe.title}</p>
                <span className="text-xs text-gray-400">{recipe.author}</span>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}

export default BlogPage;
