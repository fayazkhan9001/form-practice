import React, { useState } from "react";



function Contact() {


  let [name, setName] = useState('');
  let [email, setEmail] = useState("");
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");
  
  
  let handleSubmit = (event)=>{
    event.preventDefault();
    console.log(
      {
        name,
        email,
        city,
        message
      }
    )
  }
  


  return (
    <div>
      <form className="row g-3 w-50 py-5" onSubmit={handleSubmit}>
        <div className="col-md-12 ">
          <label htmlFor="fulName" className="form-label">
            Full Name
          </label>
          <input type="text" onChange={(event)=>setName(event.target.value)} className="form-control" id="fullName" />
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="text" onChange={(event)=>setEmail(event.target.value)} className="form-control" id="email" />
        </div>

        <div className="col-md-12">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input type="text" onChange={(event)=>setCity(event.target.value)} className="form-control" id="city" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            onChange={(event)=>setMessage(event.target.value)}
            className="form-control"
            id="message"
            rows="3"
          ></textarea>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
