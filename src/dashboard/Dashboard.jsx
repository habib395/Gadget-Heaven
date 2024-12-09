import React, { useEffect, useState } from "react";
import { getAllFavorites, removeFavorite } from "../utils";
import Cart from "./Cart";
import Wishes from "./Wishes";
// import Dashboard from "./Dashboard";
import { Helmet } from "react-helmet";
import { getAllWishes, removeWishes } from "../wish";

const Dashboard = () => {
  const [computer, setComputer] = useState([]);
  const [wishes, setWishes] = useState()

  useEffect(() => {
    const favorites = getAllFavorites();
    setComputer(favorites);
  }, []);

  useEffect(() => {
    const wishes = getAllWishes();
    setWishes(wishes);
  }, []);

  // no-1
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "Available",
  });
  const handleIsActiveStatus = (status) => {
    if (status == "Available") {
      setIsActive({
        cart: true,
        status: "Available",
      });
    } else {
      setIsActive({
        cart: false,
        status: "selected",
      });
    }
  };
  const playerRemoved = (id) => {
    const removedPlayer = computer.find((player) => player.product_id === id);
    const updatePlayer = computer.filter((player) => player.product_id !== id);
    setComputer(updatePlayer);
  };

  const handleRemoved = (id) => {
    removeFavorite(id);
    const favorites = getAllFavorites();
    setComputer(favorites);
  };
  
  const handleRemovedWish = (id) => {
    removeWishes(id);
    const favorites = getAllWishes();
    setWishes(favorites);
  };


  return (
    <div>
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      <div>
        <div className="bg-[#9538E2] py-10 text-center">
          <div className="w-full mx-auto">
            <div className="flex flex-col w-full justify-center items-center text-white">
              <h2 className="text-xl w-full mx-auto md:text-2xl lg:text-5xl font-semibold mb-4">
                Dashboard
              </h2>
            </div>
            <p className="text-sm md:text-base w-1/2 mx-auto text-center font-thin text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <div className="flex gap-10 items-center justify-center mt-4">
            <button
              onClick={() => handleIsActiveStatus("Available")}
              className={`${
                isActive.cart
                  ? " btn active  rounded-full text-base text-[#9538E2]"
                  : " btn btn-outline"
              }`}
            >
              {" "}
              Cart{" "}
            </button>
            <button
              onClick={() => handleIsActiveStatus("Selected")}
              className={`${
                isActive.cart
                  ? " btn btn-outline"
                  : " btn active bg-white rounded-full font-bold text-[#9538E2]"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>

        {isActive.cart ? (
          <Cart computer={computer} handleRemoved={handleRemoved}></Cart>
        ) : (
          <Wishes wishes={wishes} handleRemovedWish={handleRemovedWish}></Wishes>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
