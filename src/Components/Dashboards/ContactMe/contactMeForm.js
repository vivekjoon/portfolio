import React from "react";

const ContactMeForm = () => {
  const getFormSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <form onSubmit={getFormSubmitHandler} className="form_wrapper">
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
        <div>Tell us more about your project*</div>
        <textarea name="message" required />
      </div>
      <div className="">
        <button
          type="submit"
          className="bg-[#0563bb] text-white px-[30px] py-[10px] rounded-[50px] top-[20px] right-[190px] z-10"
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactMeForm;
