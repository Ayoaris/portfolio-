import React from "react";
import { GetintouchContainer } from "./getintouchstyles";

function InTouch() {
  return (
    <GetintouchContainer>
      <div className="main-body">
        <h3 className="title">
          04. <span>What's Next</span>
        </h3>
        <h2 className="header">Get In Touch</h2>
        <p>Got a question or proposal, or just want to say hello ? Go ahead.</p>
        <form>
          <div>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div>
            <textarea placeholder="Enter your message"></textarea>
          </div>
          <button className="Btn" type="submit">
            Send Message
          </button>
              </form>
              <div>
                  <p className="footer">Design & Built by Samuel Ayodeji Soyebo</p>
              </div>
      </div>
    </GetintouchContainer>
  );
}

export default InTouch;
