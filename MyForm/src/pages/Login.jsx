import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let contacts = [];

function Login() {
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    contact:"",
    id : Data.now()
  });
  //state for get data from local storage
  const [localCon, setLocalCon] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("contacts")) != null) {
      setLocalCon(JSON.parse(localStorage.getItem("contacts")));
    }
  }, [contact]);

  const [message, setMessage] = useState({
    success: false,
    message: "",
  });

  const notify = () => toast("Wow so easy!");

  let handleSubmit = (event) => {
    event.preventDefault();



    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    setMessage({
      success: true,
      message: "your data has been saved.",
    });

    // remove saved value from input field
    setContact({
      fullName: "",
      email: "",
      contact: ""
    });

    notify(); // react tostify
  };

 const handleDelete = (id)=>{
  let newContactArr = JSON.parse(localStorage.getItem("contacts"));
  let filterdArr = newContactArr.filter((c)=>c.id != id);
  localStorage.setItem("contacts", JSON.stringify(filterdArr))
  
 }

  return (
    <div className="container">
      {message.success ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Message!</strong> {message.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : null}

      <form className="row g-3 w-50 py-4" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="inputFullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            onChange={(e) =>
              setContact({ ...contact, fullName: e.target.value })
            }
            value={contact.fullName}
            className="form-control"
            id="inputFullName"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="text"
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            value={contact.email}
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            type="text"
            onChange={(e) => setContact({ ...contact, contact: e.target.value })}
            value={contact.contact}
            className="form-control"
            id="contact"
          />
        </div>
        

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {localCon.length < 1 ? (
            <tr>
              <td>
                <h5>No Data Found</h5>
              </td>
            </tr>
          ) : (
            localCon.map((val, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{val.fullName}</td>
                <td>{val.email}</td>
                <td>{val.contact}</td>

                <td>
                  <Link to={`/edit/${val.id}`} className="btn btn-warning me-2">
                    {" "}
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                  <button
                    className="btn btn-danger me-2"
                    onClick={(id)=>handleDelete(val.id)}
                  >
                    {" "}
                    <i className="bi bi-trash3"></i>
                  </button>
                  <a href={`Tel:${val.contact}`} className="btn btn-primary">
                    <i className="bi bi-telephone-fill"></i>
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Login;
