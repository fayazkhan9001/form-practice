import React, { useEffect, useState } from "react";

function Login() {
  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
  });
  //state for get data from local storage
  const [localCon, setLocalCon] = useState([]);

  useEffect(()=>{
   setLocalCon( JSON.parse(localStorage.getItem('contact')));
  }, [contact]);
  
  const [message, setMessage] = useState({
    success: false,
    message: "",
  });
  let handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("contact", JSON.stringify(contact));

    setMessage({
      success: true,
      message: "your data has been saved.",
    });

    // remove saved value from input field
    setContact({
      fullName: "",
      email: "",
      password: "",
      address: "",
    });
  };

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
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="text"
            onChange={(e) =>
              setContact({ ...contact, password: e.target.value })
            }
            value={contact.password}
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            onChange={(e) =>
              setContact({ ...contact, address: e.target.value })
            }
            value={contact.address}
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
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
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{localCon.fullName}</th>
      <td>{localCon.email}</td>
      <td>{localCon.password}</td>
      <td>{localCon.address}</td>
    </tr>
   
  </tbody>
</table>
    </div>
  );
}

export default Login;
