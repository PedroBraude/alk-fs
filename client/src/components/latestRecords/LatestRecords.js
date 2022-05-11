import React from "react";
import axios from "axios";

import "./latestRecords.css";

export default function LatestRecords(props) {



  function handleDelete(e) {
    e.preventDefault();
    const identificador = e.target.id;
    axios
      .delete("/operaciones/delete", {
        data: { id: identificador }
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }


    
  return (
    <section id="records">
      <h2>Últimos Movimientos</h2>

      <div className="container records__container">
        {props.data.map(({ id, concept, amount, date, type }) => {
          return (
            <div>
              <article key={id} className="records__item">
                <ul className="records__item-title">
                  <li>Tipo</li>
                  <li>N°:</li>
                  <li>Concepto</li>
                  <li>Fecha</li>
                  <li>Monto</li>
                </ul>
                <ul className="records__item-li">
                  <li className={`records__item-li-concept ${type === "ingreso" ? 'records__ingreso' : 'records__egreso'}`}>{type}</li>
                  <li className="records__item-li-concept">{id}</li>
                  <li className="records__item-li-concept">{concept}</li>
                  <li className="records__item-li-date">{date}</li>
                  <li className="records__item-li-mount">$ {amount}</li>
                  <button
                    className="records__item-buttons btn btn-delete"
                    onClick={handleDelete}
                    id={id}
                  >
                    ELIMINAR
                  </button>
                </ul>
 
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
