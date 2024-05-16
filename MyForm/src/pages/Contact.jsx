import React, { useEffect, useState } from "react";

function Contact() {
  
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    city: "",
    message: "",
  });

  const [con, setCon] = useState([]);

  const [contactBook, setContactBook] = useState([]);

  const [message, setMessage] = useState({
    success: false,
    message: "",
  });


  useEffect(() => {
    setCon(JSON.parse(localStorage.getItem("contact")));
  }, [contact]);

  let handleSubmit = (event) => {
    event.preventDefault();

    
    setContactBook([...contactBook, contact])
    localStorage.setItem("contact", JSON.stringify(contactBook));

    setMessage({
      success: true,
      message: " your data has been saved.",
    });

    setContact({
      fullName: "",
      email: "",
      city: "",
      message: "",
    });
  };

  return (
    <div className="container">
      {message.success ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong> Message! </strong> {message.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : null}

      <form className="row g-3 w-50 py-5" onSubmit={handleSubmit}>
        <div className="col-md-12 ">
          <label htmlFor="fulName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            onChange={(event) =>
              setContact({ ...contact, fullName: event.target.value })
            }
            value={contact.fullName}
            className="form-control"
            id="fullName"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            onChange={(event) =>
              setContact({ ...contact, email: event.target.value })
            }
            value={contact.email}
            className="form-control"
            id="email"
          />
        </div>

        <div className="col-md-12">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            onChange={(event) =>
              setContact({ ...contact, city: event.target.value })
            }
            value={contact.city}
            className="form-control"
            id="city"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            onChange={(event) =>setContact({ ...contact, message: event.target.value }) }
            value={contact.message}
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

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
         {
          con.map((val)=>{
            return  <tr>
            <th scope="row">{val.fullName}</th>
            <td>{val.email}</td>
            <td>{val.city}</td>
            <td>{val.message}</td>
          </tr>
          })
         }
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
