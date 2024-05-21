import React , { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditContact() {
 
  let {id} = useParams();
  let navigate = useNavigate();

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
  });

  useEffect(()=>{
    let con = JSON.parse(localStorage.getItem('contacts'));
    let conArr = con.find((c)=>c.id == id)
    setContact(conArr)
  }, [])

   let handleUpadtae = (e)=>{
      e.preventDefault();

      let conUpdate = JSON.parse(localStorage.getItem('contacts'));
      let filteredArr = conUpdate.filter((c)=>c.id != id);
      
      let updatedArr = [...filteredArr, contact];
      localStorage.setItem('contacts', JSON.stringify(updatedArr));

      navigate('/login')
   }

 




  return (
    <div className='container'>
          <form className="row g-3 w-50 py-4" onSubmit={handleUpadtae}>
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
             Update Contact
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditContact