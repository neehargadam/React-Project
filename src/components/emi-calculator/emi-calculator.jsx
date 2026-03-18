import { useState } from "react";

function EMICalculator() {
    const [amount,setAmount]=useState(100000); 
    const[years,setYears]=useState(1);
    const[rate,setRate]=useState(10.45);


    function handleAmountChange(e)
    {
        setAmount(e.target.value);
    }
    function handleYearsChange(e)    {
        setYears(e.target.value);
    }
    function handleRateChange(e)    {
        setRate(e.target.value);
    }

  return (
    <div className="container-fluid">
      <div className="p-4 border border-2 mt-4">
        <h4 className="text-center">Personal Loan EMI Calculator</h4>
        <div className="row my-4">
          <div className="col">
            Amount you need &#8377; <input type="text" size="10" value={amount} onChange={handleAmountChange}/>
          </div>
          <div className="col">
            for <input type="text" size="2" value={years} onChange={handleYearsChange}/> years
          </div>
          <div className="col">
            interest rate <input type="text" size="2" value={rate} onChange={handleRateChange}/> %
          </div>
        </div>
        <div className="my-4 row">
          <div className="col">
            <input type="range" className="form-range" min="100000" max="1000000" value={amount} onChange={handleAmountChange}/>
            <div>
              <span>&#8377; 1,00,000/-</span>
              <span className="float-end">&#8377; 10,00,000/-</span>
            </div>
          </div>
          <div className="col">
            <input type="range" className="form-range" min="1" max="5" value={years} onChange={handleYearsChange}/>
            <div>
              <span>1 Year</span>
              <span className="float-end">5 Years</span>
            </div>
          </div>
          <div className="col">
            <input type="range" className="form-range" step="0.01" min="10.45"  max="18.45" value={rate} onChange={handleRateChange} />
            <div>
              <span>10.45%</span>
              <span className="float-end">18.45</span>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-end">
            <button className="btn btn-primary">Calculate</button>
          </div>
        </div>
        <div className={`row mt-5 `}>
        <div className="col">
            <div className="text-center fs-4">
              Your EMI amount is <span className="fw-bold"></span> for next
              months.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EMICalculator;
