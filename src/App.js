
import react from "react";
import { useState } from "react";
import './App.css'

const App = () =>{
  const[fromvalue,setFromvalue] = useState('')
  const[tovalue,setTovalue] = useState('')
  const[amount,setAmount] = useState(0)
  const[convert,setConvert] = useState(0)

  const handlevaluefrom = (e) =>{
    e.preventDefault();
    setFromvalue(e.target.value)
    console.log({fromvalue})
}
const handlevalueto = (e) =>{
  e.preventDefault();
  setTovalue(e.target.value)
  console.log(e.target.value)
}
const handleamount = (e) =>{
  e.preventDefault();
  setAmount(e.target.value)
   const f = e.target.value  
  console.log(amount)
}

const validate =() =>{
if(fromvalue === "INR"  && tovalue === "EUR"){
    setConvert(amount*0.011)
}
if(fromvalue === "INR"  && tovalue === "AED"){
  setConvert(amount*0.044)
}
if(fromvalue === "INR"  && tovalue === "USD"){
  setConvert(amount*4)
}
if(fromvalue === "EUR"  && tovalue === "INR"){
  setConvert(amount*88.38)
}
if(fromvalue === "EUR"  && tovalue === "AED"){
  setConvert(amount*3.92)
}
if(fromvalue === "EUR"  && tovalue === "USD"){
  setConvert(amount*1.07)
}
if(fromvalue === "AED"  && tovalue === "INR"){
  setConvert(amount*22.54)
}
if(fromvalue === "AED"  && tovalue === "EUR"){
  setConvert(amount*0.25)
}
if(fromvalue === "AED"  && tovalue === "USD"){
  setConvert(amount*0.27)
}
if(fromvalue === "USD"  && tovalue === "INR"){
  setConvert(amount*82.78)
}
if(fromvalue === "USD"  && tovalue === "EUR"){
  setConvert(amount*0.94)
}
if(fromvalue === "USD"  && tovalue === "AED"){
  setConvert(amount*3.67)
}
}
return(
    <div className="whole">
      <div className="container">
        <header className="header">Currency Converter</header>
       <form >
<label className="amountlabel">Enter the amount</label>
<br/>
<br/>
    <input type="number"  
      onChange={handleamount}/>
      <br/>
      <br/>
<div className="labelfrom">From<span className="labelto">To</span></div>
<br/>
     <div className="box">
      <select className = "from "onChange= {handlevaluefrom}>
        <option value="Select the currency">Choose</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="AED">AED</option>
        <option value="USD">USD</option>
      </select><h2 className="arrow">=></h2>
      <select className = "to"onChange={handlevalueto}>
        <option value="Select to currency">Choose</option>
        <option value="INR">INR</option>
        <option value="EUR">EUR</option>
        <option value="AED">AED</option>
        <option value="USD">USD</option>
      </select>
      </div>
    </form>
    <h2 className="result">{amount}  {fromvalue}  =  {convert} {tovalue}</h2>
    <br/>
<button className="finalvalidate" onClick={validate}>Get Exchange Rate</button>
</div>
<div className="sub">
        <h1 >Currency Converter App</h1>
        <button>In HTML,CSS & Reactjs</button>
      </div>
    </div>    
  )
}

export default App;
