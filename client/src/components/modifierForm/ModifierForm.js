import React from 'react'
import axios from 'axios';
import './modifierForm.css'
import {useNavigate, Link} from 'react-router-dom'



const ModifierForm = (props) => {  

  const navigate =useNavigate()

  const submitHandler = e => {
    e.preventDefault();
    const concept = e.target.concept.value;
    const amount = e.target.amount.value;
    const date = e.target.date.value;
    const id = e.target.id.value;


    axios 
    .put('/operaciones/update', { concept, amount,date,id }) 
    .then(res => {
        console.log('success')
    })
    .catch((error) => {console.log(error)})
    navigate('/')
  }

  return (
    <section id="modifier">
      <h2>Modificar Operacion N°:</h2>
      <div className="container modifier__container">
        <form onSubmit={submitHandler}>
          <select name='id' className="modifier__selectID">
            {props.data.map(e => <option key={e.id}> {e.id}</option> )}
          </select>
          <input type="text" name='concept' placeholder="Ingresá el concepto" required />
          <input type="number" name='amount' placeholder="Ingresá el monto" required />
          <input type="date"name='date' placeholder="Ingresá la fecha" required />
          <div className="modifier__container-btns">
            <Link to='/' className="modifier__link">
            <button type="submit" className='btn-primary btn'>Regresar</button>
            </Link>
            <button type="submit" className='btn-primary btn'>Guardar</button>
          </div>
        </form>
      </div>
    </section>
  );

}

export default ModifierForm;

