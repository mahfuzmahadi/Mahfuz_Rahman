import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Mahfuzur Rahman </h1>
                  <p>I am available for freelance job and internship in my following languages. Connect with me via call or Mail .</p> <br />
                  <b>
                  <p>Address: House no-137, Ashkona, Airport, Dhaka 1230 </p>
                  <p>Phone: 01913644880 or 01704528992</p>
                  <p>Email: mahfuzurmahadi@gmail.com</p></b> <br />
                  <span>CONTACT WITH ME IN</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow' onClick={event => window.location.href='https://www.facebook.com/mahadimahfuz'}>
                    <FaFacebook/>
                    </button>
                    <button className='btn_shadow'>
                    <FaInstagram/>
                    </button>
                    <button className='btn_shadow' onClick={event => window.location.href='https://www.linkedin.com/in/mahfuzur-rahman-7524b1232/'}>
                    <FaLinkedin/>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section><br></br>
    </>
  )
}

export default Contact
