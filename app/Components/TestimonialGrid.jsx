"use client";
import React from "react";
import styles from "@/app/Components/styles.module.css"; // Adjust the path to the CSS file

const testimonials = [
  {
    text: "Ramanujan Academic Institute has truly transformed my approach to learning. The dedicated faculty, structured curriculum, and weekly tests helped me build a strong foundation. Thanks to their guidance, I excelled in my board exams!",
    author: "Ananya Sharma, Class 12 Student",
  },
  {
    text: "The faculty here are not just teachers; they are mentors who guide you every step of the way. The previous year question (PYQ) practice sessions were incredibly helpful in boosting my confidence for my competitive exams.",
    author: "Rohan Gupta, JEE Aspirant",
  },
  {
    text: "Thanks to the rigorous preparation and expert coaching at Ramanujan Academic Institute, I cleared NEET with flying colors. The personalized doubt-clearing sessions and test series made all the difference!",
    author: "Priya Verma, NEET Qualifier",
  },
  {
    text: "The supportive environment and expert guidance at Ramanujan Academic Institute prepared me exceptionally well for my future endeavors.",
    author: "Aditi, Class 10 Student", // Added to make 4 boxes
  },
];

const TestimonialBox = ({ text, author }) => {
  return (
    <div className={styles.testimonialbox}>
      <p className={styles.testimonialtext}>"{text}"</p>
      <p className={styles.testimonialauthor}>— {author}</p>
    </div>
  );
};

const TestimonialGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {testimonials.slice(0, 4).map((item, index) => ( // Limit to 4 testimonials
        <TestimonialBox key={index} text={item.text} author={item.author} />
      ))}
    </div>
  );
};

export default TestimonialGrid;