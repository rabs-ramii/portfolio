import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact()
{
    
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vevub5a', 'template_yqxw4do', form.current, 'cEqS0hemFbHxSHFeC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        <>
            <center>
                <h3> Get In Touch With Me</h3><br/>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <label>Full Name : </label>
                <input type="text" name="user_name" placeholder="Enter your full-name" className="input" required="required" /><br/>
                <label>Mobile No : </label>
                <input type="text" name="user_mobile" placeholder="Enter Mobile-no" className="input" required="required" /><br/>
                <label>Email : </label>
                <input type="email" name="user_email" className="input-email" placeholder="Enter your email" required="required"/><br/><br/>
                <label>Message </label><br/>
                <textarea placeholder="your message" name="user_message" className="textarea" required="required"></textarea><br/><br/>
                <button type="submit" className="submit-btn" >Send Message</button>
                </form>
            </center>
        </>
    );
}
export default Contact;