"use client"; // Ensure it's a client component if using Next.js App Router

import React from "react";
import Image from "next/image";
import img from "./ramanujan.png"
import "bootstrap/dist/css/bootstrap.min.css"; // Move this to _app.js or layout.js for global styling

const Page = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row align-items-center">
        {/* Left Section - Text Content */}
        <div className="col-md-6">
          <h2 className="text-center">Ramanujan Academic Institute</h2>
          <p>
            Ramanujan Academic Institute is a highly ambitious and innovative educational initiative that has been transforming students' lives for the past ten years. Dedicated to uplifting economically disadvantaged sections of society, we focus on shaping young minds to tackle dynamic challenges while nurturing their personalities.
          </p>
          <p>
            With a strong commitment to academic excellence, we have consistently delivered outstanding results in board exams. Our teaching methodology is rooted in proven, research-based, and experimental learning techniques, ensuring students grasp concepts effectively and develop critical thinking skills.
          </p>
          <p>
            At Ramanujan Academic Institute, our mission is to provide quality education and empower students to excel in board exams and competitive tests like NEET and JEE. Through rigorous training, personalized guidance, and a student-centric approach, we prepare learners to achieve their highest potential and succeed in their academic and professional journeys.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="col-md-6 d-flex justify-content-center">
          <Image 
            src={img} 
            alt="Ramanujan Logo" 
            width={500} 
            height={500} 
            className="rounded shadow img-fluid"
            priority
          />
        </div>
      </div>

      {/* Mission Section */}
      <section className="mt-5">
        <h2 className="text-center">Our Mission</h2>
        <p className="text-center">
          Our mission is to provide quality education that fosters academic excellence, critical thinking, and personal growth. We are committed to:
        </p>
        <p className="text-center">
          Empowering students with strong foundations in Mathematics, Science, and English
          Cultivating problem-solving skills and creativity through innovative teaching methods.
          Preparing students for academic success and competitive exams with confidence and competence
          Promoting holistic development by nurturing intellectual curiosity and lifelong learning.
        </p>
        <p className="text-center">Our goal is to inspire and equip students with the knowledge and skills they need to thrive in an ever-evolving world.</p>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-4">
        <h2 className="text-center">Why Choose Us</h2>
        <ul className="list-group w-50 mx-auto">
          <li > Quality Education</li>
          <li > Experienced Faculty</li>
          <li > Personalized Learning</li>
          <li > Competitive Exam Preparation</li>
          <li > Daily PYQs</li>
          <li > Focus on Building Foundation</li>
          <li > Holistic Development</li>
        </ul>
      </section>
    </div>
  );
};

export default Page;
