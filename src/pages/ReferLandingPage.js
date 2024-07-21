import React, { useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import HeroImage from "../assets/hero-image.png";
import HeroImage1 from "../assets/hero-1.png";
import HeroImage2 from "../assets/hero-2.png";
import section2Image from "../assets/section2.png";
import contactIcon from "../assets/contact-icon.png";
import Footer from "../components/Footer";
import ReferralForm from "../components/ReferralForm"; // Import the ReferralForm component

export default function ReferLandingPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Navbar />
      <main>
        <section id="hero-section">
          <div className="box">
            <img
              src={HeroImage1}
              alt="hero-section-images"
              className="hero-particle1"
            />
            <div className="box-left">
              <h1>Let's Learn & Earn</h1>
              <p className="subtitle">
                Get a chance to win up-to{" "}
                <span className="subtitle-span">Rs.15,000</span>
              </p>
              <button className="primary" onClick={handleOpen}>
                Refer Now
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="Referral Form"
                aria-describedby="Referral Form"
              >
                <Box sx={modalStyle}>
                  <ReferralForm onClose={handleClose} />
                </Box>
              </Modal>
            </div>
            <img
              src={HeroImage2}
              alt="hero-section-images"
              className="hero-particle2"
            />
            <div className="box-right">
              <img src={HeroImage} alt="hero-image" />
            </div>
          </div>
        </section>
        <section id="section-2">
          <h4>
            How Do I <span>Refer</span>
          </h4>
          <img src={section2Image} alt="section-2-image" />
          <button className="primary" onClick={handleOpen}>
            Refer Now
          </button>
        </section>
        <div id="section-contact">
          <div className="group">
            <img
              src={contactIcon}
              alt="contact-icon"
              className="contact-icon"
            />
            <div>
              <h4 style={{ color: "white" }}>
                Want to delve deeper into the program?
              </h4>
              <p>
                Share your details to receive expert insights from our program
                team!
              </p>
            </div>
          </div>
          <button className="secondary">Get in touch</button>
        </div>
      </main>
      <Footer />
    </>
  );
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end'
};
