"use client"; // Required for Client Components in Next.js App Router
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img from "./Owner.png"; // Adjust path if needed (or use "/Components/Owner.png")
import { Button } from "react-bootstrap";

const AboutMe = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // 768px as the breakpoint
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: isDesktop ? "row" : "column", // Row for desktop, column for mobile
      alignItems: isDesktop ? "flex-start" : "center", // Left-align for desktop, center for mobile
      justifyContent: isDesktop ? "center" : "flex-start", // Center horizontally for desktop
      maxWidth: isDesktop ? "1200px" : "100%", // Wider on desktop
      margin: "0 auto", // Centers the container
      padding: isDesktop ? "2rem" : "1rem", // More padding on desktop
      gap: isDesktop ? "2rem" : "1.5rem", // Larger gap on desktop
    },
    profileContainer: {
      display: "flex",
      flexDirection: "column", // Always vertical for image, name, title
      alignItems: "center",
      textAlign: "center",
      width: isDesktop ? "auto" : "100%", // Auto width on desktop, full on mobile
      maxWidth: isDesktop ? "400px" : "300px", // Larger on desktop, smaller on mobile
    },
    imageWrapper: {
      borderRadius: "50%", // Circular shape
      overflow: "hidden", // Ensures image respects border radius
      width: "100%",
      maxWidth: isDesktop ? "400px" : "300px", // Scales with screen size
      aspectRatio: "7 / 5", // Maintains 700:500 ratio
    },
    image: {
      width: "100%", // Responsive image
      height: "auto", // Maintains aspect ratio
      objectFit: "cover", // Fills container nicely
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: isDesktop ? "flex-start" : "center", // Left-align for desktop, center for mobile
      textAlign: isDesktop ? "left" : "center", // Text alignment adjusts
      width: isDesktop ? "auto" : "100%", // Auto width on desktop, full on mobile
      maxWidth: isDesktop ? "600px" : "100%", // Wider on desktop
    },
    name: {
      fontWeight: "bold",
      fontSize: isDesktop ? "1.5rem" : "1.2rem", // Larger on desktop
      margin: isDesktop ? "1rem 0 0.5rem 0" : "0.75rem 0 0.25rem 0", // Adjust spacing
    },
    title: {
      fontWeight: "lighter",
      fontSize: isDesktop ? "1rem" : "0.875rem", // Larger on desktop
      margin: "0",
    },
    aboutTitle: {
      fontSize: isDesktop ? "1.75rem" : "1.5rem", // Larger on desktop
      fontWeight: "bold",
      margin: isDesktop ? "0 0 0.5rem 0" : "0 0 0.25rem 0",
    },
    aboutSubtitle: {
      fontWeight: "lighter",
      fontSize: isDesktop ? "1.25rem" : "1rem", // Larger on desktop
      margin: isDesktop ? "0 0 1rem 0" : "0 0 0.75rem 0",
    },
    aboutText: {
      fontWeight: "normal",
      fontSize: isDesktop ? "1rem" : "0.9rem", // Larger on desktop
      lineHeight: "1.5",
      margin: "0",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileContainer}>
        <div style={styles.imageWrapper}>
          <Image
            src={img}
            alt="Deepak Tyagi"
            width={700}
            height={500}
            style={styles.image}
          />
        </div>
        <p style={styles.name}>Deepak Tyagi</p>
        <p style={styles.title}>Founder & Director</p>
      </div>
      <div style={styles.textContainer}>
        <h2 style={styles.aboutTitle}>Ramanujan Academic Institute</h2>
        <h5 style={styles.aboutSubtitle}>Founded by Deepak Tyagi in 2015</h5>
        <p style={styles.aboutText}>
          Ramanujan Academic Institute, established in 2015 by Deepak Tyagi, is
          dedicated to providing quality education and shaping future leaders.
          With a MBA,B.Ed. and BCA.. degree, Mr. Tyagi has cleared multiple
          government exams and brings over 10 years of teaching experience in
          Mathematics and English. The institute is committed to delivering
          comprehensive learning solutions, fostering conceptual clarity, and
          empowering students to excel in competitive exams and academics
          alike. Through innovative teaching methods and personalized guidance,
          Ramanujan Academic Institute continues to inspire and nurture young
          minds toward success.
        </p>
        <br></br><Button href="/About" className="btn btn-dark">
            Read More
        </Button>

      </div>
    </div>
  );
};

export default AboutMe;