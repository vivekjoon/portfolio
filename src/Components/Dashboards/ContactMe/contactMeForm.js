import React from "react";

const ContactMeForm = ({ flipCard, onFlip }) => {
  const getFormSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
  };

  const setFlipCard = () => {
    onFlip(true);
  };
  return (
    <form
      onSubmit={getFormSubmitHandler}
      onClick={setFlipCard}
      className={`form_wrapper ${flipCard ? "flipped" : ""}`}
    >
      <div className="front">
        <div className="heading">
          <h1>Send a message</h1>
        </div>
        <div className="">
          <input type="text" placeholder="Full name*" name="name" required />
        </div>
        <div className="">
          <input
            type="email"
            placeholder="Email address*"
            name="email"
            required
          />
        </div>
        <div className="">
          <input type="text" placeholder="Subject" name="subject" required />
        </div>
        <div className="">
          <div>
            <label for="message">Tell us more about your project*</label>
          </div>
          <textarea name="message" id="message" required />
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-[#0563bb] text-white px-[30px] py-[10px] rounded-[50px]"
          >
            Send message
          </button>
        </div>
      </div>
      <div className="back">
        <div className="content">
          <h1 className="click_me_text">Touch Base</h1>
        </div>
      </div>
    </form>
  );
};

export default ContactMeForm;
