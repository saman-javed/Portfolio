import React, { useRef } from "react";
import "./FeaturedPodcasts.css";
import GoogleImg from "../../assets/images/Podcast-_-Google.png";
import IBMImg from "../../assets/images/Podcast-_-IBM.png";
import intelImg from "../../assets/images/Podcast-_-Intel.png";
import MicrosoftImg from "../../assets/images/Firefly_20240226151925-removebg-preview.png";
import SonyImg from "../../assets/images/Adela_Jamal-removebg-preview.png";
import ciscoImg from "../../assets/images/Screenshot_2024-02-26_at_1.21.41_PM-removebg-preview.png";

const podcasts = [
  {
    logo: "intel",
    name: "Steve Orrin",
    role: "CTO",
    title: "Decoding Business Success in the AI Era",
    image: intelImg,
  },
  {
    logo: "Google",
    name: "Jonathan Donaldson",
    role: "CTO",
    title: "The Rise of Multi-Cloud Strategies",
    image: GoogleImg,
  },
  {
    logo: "IBM",
    name: "Hillery Hunter",
    role: "CTO",
    title: "Enhancing Cybersecurity in Cloud Computing",
    image: IBMImg,
  },
  {
    logo: "CISCO",
    name: "Waris Sagheer",
    role: "CTO",
    title: "Breaking Barries With 5G Technology",
    image: ciscoImg,
  },
  {
    logo: "Microsoft",
    name: "Gabriele Masili",
    role: "CTO",
    title: "Customer Experience And Success Division",
    image: MicrosoftImg,
  },
  {
    logo: (
      <>
        SONY<br />PICTURES
      </>
    ),
    name: "Adela Jamal",
    role: "CTO",
    title: "Tech, Diversity, and Female Empowerment",
    image: SonyImg,
  },
];

export default function FeaturedPodcasts() {
  const listRef = useRef(null);

  const handleNext = () => {
    listRef.current.scrollLeft += 300; // adjust scroll distance
  };

  const handlePrev = () => {
    listRef.current.scrollLeft -= 300;
  };

  return (
    <div className="podcast-wrapper">
      <div className="podcast-header">
        <h2 className="podcast-heading">Featured Podcasts</h2>
        <div className="header-right">
          <div className="all-podcasts">All Podcasts</div>
          <button className="arrow-btn" onClick={handlePrev}>
            <i className="ri-arrow-left-s-line" style={{ fontSize: "24px" }}></i>
          </button>
          <button className="arrow-btn" onClick={handleNext}>
            <i className="ri-arrow-right-s-line" style={{ fontSize: "24px" }}></i>
          </button>
        </div>
      </div>

      <div className="podcast-list" ref={listRef}>
        {podcasts.map((item, index) => (
          <div className="podcast-card" key={index}>
            <img src={item.image} alt={item.name} className="podcast-img" />
            <div className="card-overlay">
              <div className="logo-top">{item.logo}</div>
              <div className="card-content">
                <div>
                  <div className="podcast-content">
                    <p className="podcast-role">{item.role}</p>
                    <p className="podcast-name">{item.name}</p>
                  </div>
                  <p className="podcast-title">{item.title}</p>
                </div>
                <button className="play-button">▶</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
