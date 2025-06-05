import React from "react";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="mx-auto mt-4 p-4 container">
        <h1 className="mb-4 font-bold text-3xl">Our Posts</h1>
        <p className="text-gray-700">
          This page will display a list of all posts.
        </p>
        <ul className="mt-4 pl-5 text-gray-600 list-disc">
          <li>Post 1: An Introduction to React</li>
          <li>Post 2: Understanding State Management</li>
          <li>Post 3: Styling with Tailwind CSS</li>
        </ul>
      </main>
    </div>
  );
};

export default PostsPage;
