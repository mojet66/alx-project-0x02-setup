import React from "react";
import Button from "../components/common/Button"; // Adjust the path if necessary

const AboutPage: React.FC = () => {
  const handleButtonClick = (buttonName: string) => {
    alert(`You clicked the ${buttonName} button!`);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>About Us</h1>
      <p>
        This is the About page. Here, we demonstrate our versatile Button
        component.
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <h2>Button Examples:</h2>

        {/* Small, rounded-sm Button */}
        <Button
          size="small"
          shape="rounded-sm"
          onClick={() => handleButtonClick("Small Squared")}
        >
          Small Button
        </Button>

        {/* Medium, rounded-md Button */}
        <Button
          size="medium"
          shape="rounded-md"
          onClick={() => handleButtonClick("Medium Rounded")}
        >
          Medium Button
        </Button>

        {/* Large, rounded-full Button */}
        <Button
          size="large"
          shape="rounded-full"
          onClick={() => handleButtonClick("Large Circular")}
        >
          Large Button
        </Button>

        {/* Example of a disabled button */}
        <Button size="medium" shape="rounded-md" disabled={true}>
          Disabled Button
        </Button>

        {/* Example with custom class */}
        <Button
          size="medium"
          shape="rounded-md"
          className="my-custom-button-style" // You'd define this in your global CSS
          onClick={() => handleButtonClick("Custom Styled")}
        >
          Custom Styled
        </Button>
      </div>

      <style jsx>{`
        /* This is an example of how you might define custom styles if not using a framework */
        .my-custom-button-style {
          background-color: #ff5733; /* A different color */
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        }
        .my-custom-button-style:hover {
          background-color: #e64a2d;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
