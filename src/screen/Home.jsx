import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
// import Carsousel from "../components/carsousel";

export default function Home() {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    let response = await fetch("http://localhost:3000/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setFoodCategory(response[0]);
    setFoodItems(response[1]);
    // console.log(response[0], response[1]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carsousel search={search} setsearch={setSearch} />
      <div className="w-full" style={{ border: "2px solid red" }}>
        {foodCategory != [] ? (
          foodCategory.map((data) => {
            return (
              <>
                {" "}
                <div key={data._id} className="justify-center">
                  {data.CategoryName}
                </div>
                ;
                <hr />
                <div
                  className="flex w-full justify-center flex-wrap"
                  style={{ border: "2px solid red" }}
                >
                  {foodItems != [] ? (
                    foodItems
                      .filter(
                        (item) =>
                          item.CategoryName == data.CategoryName &&
                          item.name
                            .toLowerCase()
                            .includes(search.toLocaleLowerCase())
                      )
                      .map((filtered_item) => {
                        return (
                          <div key={filtered_item._id}>
                            <Card
                              foodItems={filtered_item}
                              options={filtered_item.options[0]}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>no such item</div>
                  )}{" "}
                </div>
                ;
              </>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function Carsousel({ search, setsearch }) {
  return (
    <div className="h-72 relative w-full">
      <div
        className="w-full h-72 bg-no-repeat bg-cover brightness-50 "
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/700x900?burger')",
        }}
      ></div>
      <div className="z-10  w-full  absolute bottom-0  h-16 ">
        <div className="flex justify-center">
          <div className="flex border border-purple-200 rounded">
            <input
              type="search"
              className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            {/* <button className="px-4 text-white bg-purple-600 border-l rounded ">
              Search
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
