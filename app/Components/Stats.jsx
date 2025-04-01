import React from "react";
import StatsGrid from "./StatsGrid"; // Adjust path to your component

const Stats = () => {
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
        Our Achievements
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        <StatsGrid />
      </div>
    </>
  );
};

export default Stats;