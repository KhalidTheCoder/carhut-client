import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

const LatestBlogPosts = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://carhut-server-kuq5.vercel.app/blogs");
        const data = await res.json();

        // Sort by date descending and take latest 3
        const latestBlogs = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 3);

        setBlogs(latestBlogs);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="max-w-7xl px-4 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:px-2">
        <h2 className="text-xl md:text-3xl font-bold">Latest Blog Posts</h2>
        <Link>
          <div className="flex gap-1.5 font-semibold justify-center items-center">
            <p>View All</p>
            <MdArrowOutward />
          </div>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {blogs.map((blog) => (
          <div key={blog._id} className="rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
                {blog.category}
              </div>
            </div>

            <div className="py-6">
              <p className="text-sm text-gray-500 mb-2">
                Admin ·{" "}
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogPosts;
