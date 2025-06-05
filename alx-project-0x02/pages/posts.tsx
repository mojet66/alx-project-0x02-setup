import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps, JsonPlaceholderPost } from "@/interfaces"; // Import PostProps and JsonPlaceholderPost interface for clarity

// const PostsPage: React.FC = () => {
//   return (
//     <div>
//       <Header />
//       <main className="mx-auto mt-4 p-4 container">
//         <h1 className="mb-4 font-bold text-3xl">Our Posts</h1>
//         <p className="text-gray-700">
//           This page will display a list of all posts.
//         </p>
//         <ul className="mt-4 pl-5 text-gray-600 list-disc">
//           <li>Post 1: An Introduction to React</li>
//           <li>Post 2: Understanding State Management</li>
//           <li>Post 3: Styling with Tailwind CSS</li>
//         </ul>
//       </main>
//     </div>
//   );
// };

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: JsonPlaceholderPost[] = await response.json();

        // Map the API response to your PostProps interface
        const formattedPosts: PostProps[] = data.map((post) => ({
          id: post.id,
          title: post.title,
          content: post.body, // Mapping 'body' to 'content'
          userId: post.userId,
        }));
        setPosts(formattedPosts);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <Header />
      <main className="mx-auto mt-4 p-4 container">
        <h1 className="mb-6 font-bold text-gray-800 text-3xl">Latest Posts</h1>

        {loading && (
          <p className="text-blue-600 text-lg text-center">Loading posts...</p>
        )}
        {error && (
          <p className="text-red-600 text-lg text-center">Error: {error}</p>
        )}

        {!loading && !error && posts.length === 0 && (
          <p className="text-gray-500 text-lg text-center">
            No posts available.
          </p>
        )}

        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard
              key={post.id} // Important for list rendering in React
              id={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PostsPage;
