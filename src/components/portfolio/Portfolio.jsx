import { useRef } from "react";
import "./style.css";

const Portfolio = ({ focusComponent, setFocusComponent }) => {
  const ref = useRef(null);
  if (focusComponent === "projects") {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setFocusComponent(null);
  }

  return (
    <div className="portfolio" ref={ref}>
      <h2 className="portfolio__title">Projects</h2>

      <div className="portfolio__container">
        <div className="portfolio__projects">
          <div className="portfolio__project">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="project 1"
              className="portfolio__projectImg"
            />
            <p className="portfolio__projectName">Project 1</p>
            <p className="portfolio__projectDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="portfolio__project">
            <img
              src="https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="project 1"
              className="portfolio__projectImg"
            />
            <p className="portfolio__projectName">Project 2</p>
            <p className="portfolio__projectDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="portfolio__project">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="project 1"
              className="portfolio__projectImg"
            />
            <p className="portfolio__projectName">Project 3</p>
            <p className="portfolio__projectDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
