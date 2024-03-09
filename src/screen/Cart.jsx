import React from "react";
import { MdDelete } from "react-icons/md";
import { useCart, useDispatchCart } from "../components/ContextReducer.jsx";
export default function Cart() {
  let data = useCart();
  console.log(data);
  let dispatch = useDispatchCart();
  console.log("this is dispatch");

  if (data.length === 0) {
    console.log("in model");
    return (
      <div>
        <div className="m-5 w-full text-center size-3 text-white">
          The Cart is Empty
        </div>
      </div>
    );
  }

  const handleRemove = (index) => {
    console.log(index);
    dispatch({ type: "REMOVE", index: index });
  };

  async function handleCheckOut() {
    let userEmail = localStorage.getItem("userEmail");
    console.log(data, localStorage.getItem("userEmail"), new Date());
    let response = await fetch("http://localhost:3000/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("JSON RESPONSE:::::", response.status);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <div className="w-full" style={{ border: "2px solid red" }}>
      {console.log(data)}
      <div
        className="m-auto mt-5 table-auto w-full text-white"
        style={{ border: "2px solid red" }}
      >
        <table className="table hover:bg-sky-700 w-full">
          <thead className="size-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((food, index) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    type="button"
                    className=""
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  >
                    <MdDelete />
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="" style={{ border: "2px solid red" }}>
        <h1 className="text-white">Total Price: {totalPrice}/-</h1>
      </div>
      <div>
        <button
          className="text-white hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          onClick={handleCheckOut}
        >
          {" "}
          Check Out{" "}
        </button>
      </div>
    </div>
  );
}
