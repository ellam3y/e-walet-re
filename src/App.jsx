import { useRef } from "react";
import { useState } from "react";

export default function App() {
  const [balance, setBalance] = useState(100000);
  let topupAmount = useRef();
  let withdrawAmount = useRef();

  return (
    <div className="container">
      <h1 className="display-1 text-center">E-Walet</h1>
      <div className="row">
        <div className="col">
          <h2 className="text-center">Balance</h2>
          <h3 className="text-center">Rp {+balance}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="text-center">Top-up</h2>
          <form>
            <div className="form-group">
              <label htmlFor="topupAmount">Amount</label>
              <input
                ref={topupAmount}
                type="number"
                className="form-control"
                id="topupAmount"
                placeholder="Enter amount"
              />
            </div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setBalance(balance + +topupAmount.current.value);
                topupAmount.current.value = "";
              }}
              className="btn btn-primary"
            >
              Top-up
            </button>
          </form>
        </div>
        <div className="col">
          <h2 className="text-center">Withdraw</h2>
          <form>
            <div className="form-group">
              <label htmlFor="withdrawAmount">Amount</label>
              <input
                ref={withdrawAmount}
                type="number"
                className="form-control"
                id="withdrawAmount"
                placeholder="Enter amount"
              />
            </div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setBalance(balance - withdrawAmount.current.value);
                withdrawAmount.current.value = "";
              }}
              className="btn btn-primary"
            >
              Withdraw
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
