import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let contacts = [];

function Contact() {
  const [contact, setContact] = useState({
    email: "",
    password: "",
    message: "",
  });
  const [con, setCon] = useState([]);

  useEffect(() => {
    setCon(JSON.parse(localStorage.getItem("contact")));
  }, [contact]);

  let handleSubmit = (e) => {
    e.preventDefault();

    let newContact = {
      ...contact,
      id: Date.now(),
    };

    contacts.push(newContact);
    localStorage.setItem("contact", JSON.stringify(contacts));

    setContact({
      email: "",
      password: "",
      message: "",
    });
  };

  let handleDelete = (id) => {
    let contactArr = JSON.parse(localStorage.getItem("contact"));
    let filteredArr = contactArr.filter((c) => c.id != id);
    localStorage.setItem("contact", JSON.stringify(filteredArr));
  };

  return (
    <div className="container">
      <form className="w-50 py-5" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="email" className=" col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) =>
                setContact({ ...contact, email: e.target.value })
              }
              value={contact.email}
              className="form-control"
              id="email"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              onChange={(e) =>
                setContact({ ...contact, password: e.target.value })
              }
              value={contact.password}
              className="form-control"
              id="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message :
            </label>
            <textarea
              className="form-control"
              onChange={(e) =>
                setContact({ ...contact, message: e.target.value })
              }
              value={contact.message}
              id="message"
              rows="3"
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          send message
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Message</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {con.length < 1 ? (
            <tr>
              <td>
                <h1>Data Not Found</h1>
              </td>
            </tr>
          ) : (
            con.map((val, idx) => (
              <tr key={idx}>
                <th scope="row">{idx}</th>
                <td>{val.email}</td>
                <td>{val.password}</td>
                <td>{val.message}</td>
                <td>
                  <Link to={`/contactMsg/${val.id}`} className="btn btn-warning me-2">
                    <i className="bi bi-pencil-square"></i>
                  </Link>
               
                  <button
                    className="btn btn-danger me-2"
                    onClick={(id) => handleDelete(val.id)}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
              
                  <a href={`Tel:${val.id}`} className="btn btn-primary">
                    <i className="bi bi-telephone-fill"></i>
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Contact;
