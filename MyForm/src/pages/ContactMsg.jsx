import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContactMsg() {
    let navigate = useNavigate();
    let {id} = useParams();
    const [contact, setContact] = useState({
        email: "",
        password: "",
        message: "",
      });

    useEffect(()=>{
        let con = JSON.parse(localStorage.getItem('contact'));
        let conFind = con.find((c)=>c.id == id);
        setContact(conFind);
    }, []);

    let handleUpdateCon = (e)=>{
        e.preventDefault();

       let con = JSON.parse(localStorage.getItem('contact'));
       let filteredArr = con.filter((c)=>c.id != id);
       let newContactArr = [...filteredArr, contact];
       localStorage.setItem('contact', JSON.stringify(newContactArr));

       navigate('/contact');
    }

  return (
    <div>
      <div className="container">
        <form className="w-50 py-5" onSubmit={handleUpdateCon}>
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
            update message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMsg;
