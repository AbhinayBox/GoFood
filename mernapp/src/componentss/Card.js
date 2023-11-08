import React from "react";

export default function Card() {
  return (
    <>
      <div>
        <div
          className="card bg-dark mt-3 border-white "
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="https://source.unsplash.com/random/300x150/?fish,food" className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title text-white">Card title</h5>
            <p className="card-text text-white">This is important text</p>
            <div className="container w-100 ">
            <select calssName="'m-2 h-100 w-100 bg-success rounded'">
            <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>


              <select className="m-2 h-100 w-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>

              <div className="text-white d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
