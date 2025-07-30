import React, { useState } from "react";
import "./BlogSection.css";
// import { FaArrowLeft, FiChevronRight } from "react-icons/fa";
import BlogImg1 from "../../assets/images/BlogImg1.png";
import BlogImg2 from "../../assets/images/BlogImg2.png";
import BlogImg3 from "../../assets/images/BlogImg3.png";
import BlogImg4 from "../../assets/images/BlogImg4.jpg";
import BlogImg5 from "../../assets/images/BlogImg5.png";
import BlogImg6 from "../../assets/images/BlogImg6.jpg";
import BlogImg7 from "../../assets/images/BlogImg7.png";

const BlogSlider = () => {
  const blogData = [
    {
      image: BlogImg1,
      title: "Legacy System Modernization",
      description: "Top 6 Legacy System Modernization Trends in 2025",
    },
    {
      image: BlogImg2,
      title: "Digital Transformation",
      description: "11 Most Mind-Blowing Examples of Digital Transformation",
    },
    {
      image: BlogImg3,
      title: "Digital Transformation",
      description: "The Future of Digital Transformation: 7 Trends to Watch in 2025",
    },
    {
      image: BlogImg4,
      title: "Artificial Intelligence",
      description: "How Artificial Intelligence (AI) delivers real ROI for your business?",
    },
    {
      image: BlogImg5,
      title: "Artificial Intelligence",
      description: "Questions Not to Ask AI",
    },
    {
      image: BlogImg6,
      title: "Generative AI",
      description: "GenAI is making phishing attacks more dangerous",
    },
    {
      image: BlogImg7,
      title: "Artificial Intelligence",
      description: "8 Economical Approaches To Implement AI Strategy",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 3 < blogData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleBlogs = blogData.slice(startIndex);


  return (
    <div className="blog-slider-wrapper">
      <div className="blog-header">
        <h2 className="blog-heading">Insights & Knowledge From The Digital Domain</h2>
        <div className="header-right">
          <div className="all-blogs">Read Our Blogs</div>
         <button className="arrow-btn" onClick={handlePrev}>
  <i className="ri-arrow-left-s-line" style={{ fontSize: "24px" }}></i>
</button>

<button className="arrow-btn" onClick={handleNext}>
  <i className="ri-arrow-right-s-line" style={{ fontSize: "24px" }}></i>
</button>

        </div>
      </div>
      <div className="blog-slider">
        {visibleBlogs.map((item, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-image-wrapper">
              <img src={item.image} alt={item.title} className="blog-image" />
            </div>
            <div className="blog-description">
              <p className="blog-title">{item.title}</p>
              <p className="blog-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSlider;