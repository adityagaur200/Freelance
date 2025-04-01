"use client"; // Required for Client Components in Next.js App Router
import React from "react";
import style from "@/app/Components/style.module.css"; // Adjust path to your CSS file

const stats = [
  {
    label: "Students",
    value: "2500+",
  },
  {
    label: "Results",
    value: "95%+",
  },
  {
    label: "Weekly Exams",
    value: "2", // No value needed, just the label
  },
  
];

const StatBox = ({ label, value }) => {
  return (
    <div className={style.statBox}>
      <p className={style.statValue}>{value}</p>
      <p className={style.statLabel}>{label}</p>
    </div>
  );
};

const StatsGrid = () => {
  return (
    <div className={style.gridContainer}>
      {stats.map((item, index) => (
        <StatBox key={index} label={item.label} value={item.value} />
      ))}
    </div>
  );
};

export default StatsGrid;