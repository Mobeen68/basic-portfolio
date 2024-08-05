import { useRef } from "react";
import "./style.css";
const About = ({ focusComponent, setFocusComponent }) => {
  const ref = useRef(null);
  if (focusComponent === "about") {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setFocusComponent(null);
  }
  return (
    <div className="about" ref={ref}>
      <div className="about__container">
        <p className="about__text">
          Minim ullamco dolore officia culpa aliquip ut cillum aliqua deserunt
          ut adipisicing. Non amet aliqua est quis nisi. Ullamco cillum id
          voluptate commodo laborum tempor excepteur pariatur labore duis. Aute
          aliquip proident nostrud officia. Qui id et incididunt est nulla
          nostrud eiusmod.Minim ullamco dolore officia culpa aliquip ut cillum
          aliqua deserunt ut adipisicing. Non amet aliqua est quis nisi. Ullamco
          cillum id voluptate commodo laborum tempor excepteur pariatur labore
          duis. Aute aliquip proident nostrud officia. Qui id et incididunt est
          nulla nostrud eiusmod.Minim ullamco dolore officia culpa aliquip ut
          cillum aliqua deserunt ut adipisicing. Non amet aliqua est quis nisi.
          Ullamco cillum id voluptate commodo laborum tempor excepteur pariatur
          labore duis. Aute aliquip proident nostrud officia. Qui id et
          incididunt est nulla nostrud eiusmod.
        </p>
        <div className="about__profilePic_container">
          <img
            src="https://plus.unsplash.com/premium_photo-1688821128515-f5f20dc60a63?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile Pic"
            className="about__profilePic"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
