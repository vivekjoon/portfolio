import React, { useState } from "react";
import "./style.scss";
import ContactMeForm from "./contactMeForm";
import { ReactComponent as MailIcon } from "../../../Assets/NavIcons/mail.svg";

const ContactMe = () => {
  const [flipCard, setFlipCard] = useState(false);
  return (
    <section className="h-[100vh] relative contact_wrapper" id="contact_me">
      <div className="left">
        <h1>Let's chat.</h1>
        <h1>Tell me about your project.</h1>
        <p>Let's create something together</p>
        <div className="card">
          <MailIcon className="inline-block mail" />
          <div className="ml-[50px]">
            <p className="">Mail me at</p>
            <span>
              <a href="mailto:vivekjoon2215@gmail.com">
                vivekjoon2215@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="right">
        <ContactMeForm flipCard={flipCard} onFlip={setFlipCard} />
      </div>
    </section>
  );
};

export default ContactMe;
