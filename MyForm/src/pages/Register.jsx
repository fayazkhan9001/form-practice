import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let regPrsArr = [];

function Register() {


  let [getReg, setGetReg] = useState([]);
  let [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    number: "",
  });

  useEffect(()=>{
    setGetReg(JSON.parse(localStorage.getItem('registeredPerson')))
    
  }, [register])


  let handleSubmit = (e) => {
    e.preventDefault();
    let newCon = {
        ...register,
        id : Date.now()
    }
    regPrsArr.push(newCon);
    localStorage.setItem("registeredPerson", JSON.stringify(regPrsArr));



    setRegister({
      fullName: "",
      email: "",
      password: "",
      number: "",
    });
  };

  let handleDelete = (id)=>{
  let registerArr = JSON.parse(localStorage.getItem('registeredPerson'));
  let filteredArr =  registerArr.filter((c)=>c.id != id);
  localStorage.setItem('registeredPerson', JSON.stringify(filteredArr))

  }

  return (
    <div className="container">
      <form className="row g-3 py-5 w-50" onSubmit={handleSubmit}>
        <div className="col-md-12">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            onChange={(e) =>
              setRegister({ ...register, fullName: e.target.value })
            }
            value={register.fullName}
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
            onChange={(e) =>
              setRegister({ ...register, email: e.target.value })
            }
            value={register.email}
            className="form-control"
            id="email"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            onChange={(e) =>
              setRegister({ ...register, password: e.target.value })
            }
            value={register.password}
            className="form-control"
            id="password"
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="number" className="form-label">
            Number
          </label>
          <input
            type="text"
            onChange={(e) =>
              setRegister({ ...register, number: e.target.value })
            }
            value={register.number}
            className="form-control"
            id="number"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Number</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

            {   getReg.length<1 ? <tr><td><h1>No Data Found</h1></td></tr>  :
                getReg?.map((val, idx)=>{
                    return  <tr key={idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{val?.fullName}</td>
                    <td>{val?.email}</td>
                    <td>{val?.password}</td>
                    <td>{val?.number}</td>
                    <td>
                        <Link to={`/regupdate/${val?.id}`} className="btn btn-warning me-2"><i className="bi bi-pencil-square"></i></Link>
                        <button className="btn btn-danger me-2" onClick={(id)=>handleDelete(val?.id)}><i className="bi bi-trash"></i></button>
                        <a href={`Tel:${val?.id}`} className="btn btn-primary"><i className="bi bi-telephone-forward-fill"></i></a>
                    </td>
                  </tr>
                })
            }

        </tbody>
      </table>
    </div>
  );
}

export default Register;
