import React, {useEffect } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

import './currentExpenditures.css'

export default function CurrentExpenditures(props) {



  const getData = () => {
    axios
      .get("/operaciones?type=egreso")
      .then(response => props.setExpenditure(response.data.reduce((acc, curr) => acc + curr.amount, 0)))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [props.data]); 
  
  return (
    <section>
      <Link to="/new" >
        <div className="container expenditures__container">
          <div className="expenditures">
            <h3>Gastos</h3>
            <div className="expenditures__content">
              <article className="expenditures__details">
                <div className="expenditures__details-h4">
                  <h4>${props.expenditure}</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
