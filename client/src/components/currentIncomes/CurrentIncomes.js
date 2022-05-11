import React, {useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./currentIncomes.css";

export default function CurrentIncomes(props) {
  
  //Proxy



  const getData = () => {
    axios
      .get("/operaciones?type=ingreso")
      .then((response) =>
        props.setIncome(
          response.data.reduce((acc, curr) => acc + curr.amount, 0)
        )
      )
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, [props.data]); // ver loop

  return (
    <section>
      <Link to="/new">
        <div className="container incomes__container">
          <div className="incomes">
            <h3>Ingresos</h3>
            <div className="incomes__content">
              <article className="incomes__details">
                <div className="incomes__details-h4">
                  <h4>${props.income}</h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
