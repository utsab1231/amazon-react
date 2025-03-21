import React from "react";

const About: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our website! We are dedicated to providing the best service
        possible. Our team is passionate about what we do and we strive to
        exceed your expectations.
      </p>
      <p style={styles.paragraph}>
        Our mission is to deliver high-quality products and services that bring
        value to our customers. We believe in innovation, integrity, and
        excellence in everything we do.
      </p>
      <p style={styles.paragraph}>
        Thank you for visiting our site. We hope you have a great experience!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
  },
  header: {
    fontSize: "2.5em",
    marginBottom: "20px",
    color: "#333",
  },
  paragraph: {
    fontSize: "1.2em",
    lineHeight: "1.6",
    color: "#666",
    marginBottom: "20px",
  },
};

export default About;
