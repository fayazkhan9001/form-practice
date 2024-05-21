import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



function RegUpdate() {
    let {id} = useParams();
    let navigate = useNavigate();
  
    let [register, setRegister] = useState({
        fullName: "",
        email: "",
        password: "",
        number: "",
      });

    let handleUpdate = (e)=>{
        e.preventDefault();

        let abc = JSON.parse(localStorage.getItem('registeredPerson'));
        let filteredArr = abc.filter((c)=>c.id != id);
        let newRegisterArr = [...filteredArr, register];
        localStorage.setItem('registeredPerson', JSON.stringify(newRegisterArr))
        navigate('/register')
    }

    useEffect(()=>{
        let getRegPerson = JSON.parse(localStorage.getItem('registeredPerson'))
        let findArr = getRegPerson.find((c)=>c.id == id)
        setRegister(findArr)
    }, [])

  return (
    <div className='container'>
           <form className="row g-3 py-5 w-50" onSubmit={handleUpdate}>
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
            update
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegUpdate