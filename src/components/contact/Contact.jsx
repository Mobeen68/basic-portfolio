import { useRef } from "react";
import "./style.css";
const Contact = ({ focusComponent, setFocusComponent }) => {
  const ref = useRef(null);
  if (focusComponent === "contact") {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setFocusComponent("");
  }

  return (
    <div className="contact" ref={ref}>
      <h1>Contact</h1>
      <div className="contact__container">
        <div className="contact__img__container">
          <img
            src="https://media.istockphoto.com/id/1290300704/vector/man-in-call-center-support-customer-support-answering-questions.jpg?s=1024x1024&w=is&k=20&c=MOG-rjzQLxRBYHraZJ4xgW4vTo-dxnHdFhpFjlEd6ZA="
            alt="contact img"
            className="contact__img"
          />
        </div>
        <div className="contact__form">
          <form action="">
            <input type="text" placeholder="Name" className="contact__input" />
            <input
              type="email"
              placeholder="Email"
              className="contact__input"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="contact__input"
            />
            <button className="contact__btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
