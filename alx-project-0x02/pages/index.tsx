import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import React from "react";

const Landingpage = () => {
  return (
    <div>
      <Header />
      <div>
        <h1 className="text-amber-600">Welcome to my Next.js App</h1>
        <p>Hello World! This is my first Next.js page</p>
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

export default Landingpage;
