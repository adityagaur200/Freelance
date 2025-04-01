import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const whatsappNumber = "+919758788286"; // Replace with your actual WhatsApp number

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2>Book a Demo</h2>
        <p>Experience our teaching methods firsthand. Contact us via WhatsApp to schedule a free demo session.</p>

        <a
          href={`https://wa.me/${whatsappNumber}?text=Hi, I would like to book a demo session.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success mt-3"
        >
          📞 Contact on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Contact;
