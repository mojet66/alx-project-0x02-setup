import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import React from "react";
import { v4 as uuidv4 } from "uuid"; // For generating unique IDs for posts
import PostModal from "../components/common/PostModal";
import { Post } from "../interfaces"; // Import the Post interface

const Homepage = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>This is the heading to my homepage</h1>
      </div>
      <div>
        <Card
          title="First Card"
          content="This is the content of the first card. It contains some interesting information."
        />
        <Card
          title="Second Card"
          content="Here's some crucial content for the second card. Pay close attention to this!"
        />

        <Card
          title="Third Card: Fun Facts"
          content="Did you know that the average person walks the equivalent of three times around the world in a lifetime?"
        />

        <Card
          title="Fourth Card: Project Update"
          content="The project is progressing well and is on track for its scheduled release."
        />
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: uuidv4(),
      title: "First Card",
      content:
        "This is the content for the first card. It contains some interesting information.",
    },
    {
      id: uuidv4(),
      title: "Second Card: Important Notice",
      content:
        "Here's some crucial content for the second card. Pay close attention to this!",
    },
    {
      id: uuidv4(),
      title: "Third Card: Fun Facts",
      content:
        "Did you know that the average person walks the equivalent of three times around the world in a lifetime?",
    },
    {
      id: uuidv4(),
      title: "Fourth Card: Project Update",
      content:
        "The project is progressing well and is on track for its scheduled release.",
    },
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddPost = (newPostData: Omit<Post, "id">) => {
    const newPost: Post = {
      ...newPostData,
      id: uuidv4(), // Generate a unique ID for the new post
    };
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <div>
      <h1>Welcome to the Home Page!</h1>

      <button
        onClick={handleOpenModal}
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Add New Post
      </button>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {posts.map((post) => (
          <Card key={post.id} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Homepage;
