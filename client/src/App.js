import React,{useState, useEffect} from "react";
import axios from 'axios';



import CurrentBalance from './components/currentBalance/CurrentBalance';
import LatestRecords from './components/latestRecords/LatestRecords';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import ModifierForm from './components/modifierForm/ModifierForm';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import Nav from './components/nav/Nav';
import CurrentIncomes from './components/currentIncomes/CurrentIncomes';
import CurrentExpenditures from './components/currentExpenditures/CurrentExpenditures';
import {Routes, Route} from 'react-router-dom';



function App() {

  const [data, setData] = useState([]);
  const [expenditure, setExpenditure] = useState(0);
  const [income, setIncome] = useState(0);

  const getData = () => {
    axios
    .get("/operaciones")
    .then(response => setData(response.data))
    .catch(error =>console.log(error))     
  }
  
  useEffect(() => {
    getData()
  },[data]); // ver loop

  return (
    <div>

        {/* <Nav /> */}
      <Routes>
      <Route path="*" element={<Header/>}></Route>        
        <Route path="/new" element={<RegistrationForm setData={setData}/>}></Route> 
        <Route path="/modify" element={<ModifierForm data={data}/>}></Route> 
      </Routes>      
      <CurrentBalance income={income} expenditure={expenditure} data={data}/>
      <CurrentIncomes income={income} setIncome={setIncome} data={data}/>
      <CurrentExpenditures expenditure={expenditure} setExpenditure={setExpenditure} data={data}/>
      <LatestRecords data={data}/>
      <Footer/>

    </div>
  );
}

export default App;

