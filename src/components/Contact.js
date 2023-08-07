/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import React from "react";
import "../stylesheets/contact.css";
import ContactMessage from "./ContactMessage";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import PropTypes from "prop-types";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const form = useRef();
  const [getOpen, setOpen] = useState(false);
  const [getMessage, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(!loading);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    setLoading(!loading);
    e.preventDefault();
    // Check if the form is valid
    if (form.current.checkValidity()) {
      emailjs
        .sendForm(
          "service_fskcodx",
          "template_ls53hhs",
          form.current,
          "mZiRAS4YSDlB93BS2"
        )
        .then(
          (result) => {
            console.log(result.text);
            setOpen(true);
            const message =
              "Thank you for your kind message. I sincerely appreciate your thoughtful communication. I acknowledge that I have received your message, and I want to assure you that I will promptly review its content. Should the need arise, I will certainly respond to you with a timely reply. Your patience and understanding are greatly appreciated";
            setMessage(message);
            setState(initialState);
            form.current.reset();
            setLoading(false);
          },
          (error) => {
            setOpen(true);
            const message = "There is an error with the message, please resend";
            setMessage(message);
            console.log(error.text);
            setLoading(false);
          }
        );
      // Rest of the email sending logic
    } else {
      // Handle form validation errors
      setOpen(true);
      const message = "Please fill in all required fields";
      setMessage(message);
    }
  };
  return (
    <div>
      <div id="contact">
        <div className="contactContainer">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" ref={form} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <LoadingButton
                  type="submit"
                  size="small"
                  endIcon={<SendIcon />}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                  style={{
                    marginLeft: "3.6rem",
                    width: "150px",
                  }}
                >
                  <span>Send</span>
                </LoadingButton>
              </form>
            </div>
            <div>
              <ContactMessage
                opener={getOpen}
                message={getMessage}
                openHandler={setOpen}
              />
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address:
                </span>{" "}
                Asajon Way, Epe-Lekki Express Road, Sangotedo, Lagos.
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone:
                </span>{" "}
                +2348145489444
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email:
                </span>{" "}
                abdulwasiushittu1416@gmail.com
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Github:
                </span>{" "}
                <a href="https://github.com/Abdulwasiu628">
                  github.com/Abdulwasiu628
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> linkedin:
                </span>{" "}
                <a href="https://www.linkedin.com/in/shittu-wasiu/">
                  linkedin.com/in/shittu-wasiu/
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2023 Felicity. </p>
        </div>
      </div>
    </div>
  );
};
Contact.propTypes = {
  data : PropTypes.object

};
