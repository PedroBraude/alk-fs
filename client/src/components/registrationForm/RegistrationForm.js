import React from 'react'
import axios from 'axios';
import './registrationForm.css'
import {useNavigate, Link} from 'react-router-dom'



const Registrationform = (props) => {
  const navigate =useNavigate()

  const submitHandler = e => {
    e.preventDefault();
    const concept = e.target.concept.value;
    const amount = e.target.amount.value;
    const date = e.target.date.value;
    const type = e.target.type.value;

    // if (concept === '' || amount === '' || date === '' || type === '') {
    //   swal(<h2 className="swal">Los campos no pueden estar vacios</h2>)
    //   return // Para que pare el programa si los campos están vacíos
    // } 

    axios 
    .post('/operaciones', { concept, amount,date,type }) //URL de end point, en formato de objeto los datos que la api espera
    .catch((error) => {console.log(error)})       
    navigate('/')
  }

  return (
    <section id="registration">
      <h2>Agregar Movimiento</h2>
      <div className="container registration__container">
        <form onSubmit={submitHandler}>
          <input type="text" name='concept' placeholder="Ingresá el concepto" required />
          <input type="number" name='amount' placeholder="Ingresá el monto" required />
          <input type="date" name='date' placeholder="Ingresá la fecha" required />
          <select className="registration__form-type" name="type" required>
            <option value=''>Elegí</option>
            <option value="ingreso">Ingreso</option>
            <option value="egreso">Egreso</option>
          </select>
          <div className="registration__container-btns">
            <Link to='/'className="registration__link">
            <button type="submit" className='btn-primary btn'>Regresar</button>
            </Link>
            <button type="submit" className='btn-primary btn'>Guardar</button>
          </div>
        </form>
      </div>
    </section>
  );

}

export default Registrationform;
