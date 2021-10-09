import React from "react";
import style from "../../styles/ContactSection.module.css";
export const ContactUsForm = () => {
  return (
    <div>
      <h1 className={`${style.contactUs}`}>Contact Us</h1>
      <form>
        <div className={`${style.inputFieldContainer}`}>
          <input
            className={`${style.inputField} ${style.name}`}
            placeholder="First Name"
          />
          <input
            className={`${style.inputField} ${style.name}`}
            placeholder="Last Name"
          />
        </div>
        <br />
        <br />
        <div className={`${style.inputFieldContainer}`}>
          <input
            className={`${style.inputField} ${style.email} `}
            placeholder="Email"
          />
        </div>
        <br />
        <br />
        <div className={`${style.inputFieldContainer}`}>
          <textarea
            className={`${style.textAreaField} ${style.description} `}
            placeholder="Enquiry"
          />
        </div>
        <br />
        <br />
        <div className={`${style.inputFieldContainer}`}>
          <button className={`${style.submitButton} white`}>
            Send <b>{` >`}</b>
          </button>
        </div>
        <br />
        <br />
        <br />
      </form>
    </div>
  );
};
