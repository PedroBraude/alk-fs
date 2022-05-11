import React,{useState,useEffect} from "react";

import './currentBalance.css'

export default function CurrentBalance(props) {

  const [currentBalance, setCurrentBalance] = useState(0);

  const getData = () => {
    setCurrentBalance(props.income - props.expenditure)
}
useEffect(() => {
  getData()
// eslint-disable-next-line
},[props.income, props.expenditure]); // ver loop


  return (
    <section>
      <div className="container balance__container">
        <div className="balance">
          <h3>Balance</h3>
          <div className="balance__content">
            <article className="balance__details">
              <div className="balance__details-h4">
                <h4>${currentBalance}</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
