import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card({ foodItems, options }) {
  let dispatch = useDispatchCart();
  let data = useCart();
  let priceref = useRef();
  let opt = options;
  let priceOpt = Object.keys(opt);

  const [qut, setqut] = useState(1);
  const [size, setsize] = useState("half");

  const handleClick = async () => {
    await dispatch({
      type: "ADD",
      id: foodItems._id,
      name: foodItems.name,
      price: finalPrice,
      qty: qut,
      size: size,
    });
    console.log(data);
  };

  useEffect(() => {
    setsize(priceref.current.value);
  }, []);

  let finalPrice = qut * parseInt(options[size]);

  return (
    <div
      className=" p-2 rounded-lg shadow-xl md:max-w-lg "
      style={{ border: "2px solid red" }}
    >
      <img
        className="object-cover w-full h-48"
        src={foodItems.img}
        alt="image"
      />
      <div className="pl-2">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
          {foodItems.name}
        </h4>
        <p className="mb-2 leading-normal">
          react tailwind css horizontal card with image It is a long established
          fact that a reader will be distracted by the readable content.
        </p>
        <select
          className="px-4 py-2 ml-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
          onChange={(e) => setqut(e.target.value)}
        >
          {Array.from({ length: 6 }, (x, i) => (
            <option value={i + 1} key={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <select
          className="px-4 py-2 ml-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
          ref={priceref}
          onChange={(e) => setsize(e.target.value)}
        >
          {priceOpt.map((data) => {
            return (
              <option key={data} value={data}>
                {data}
              </option>
            );
          })}
        </select>
        <button className="px-4 py-2 ml-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
          {finalPrice}/-
        </button>
        <hr></hr>
        <button
          className="px-4 py-2 ml-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
