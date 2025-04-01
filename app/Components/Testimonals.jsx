import React from "react";
import TestimonialGrid from "../Components/TestimonialGrid"; // Updated import

const Testimonials = () => {
  return (
    <>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem 0",
          fontSize: "1.75rem",
        }}
      >
        What Our Students Say
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        <TestimonialGrid />
      </div>
    </>
  );
};

export default Testimonials;