import React, { useState } from "react";
import Heading from "../Heading";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite, getAllFavorites } from "../utils";
import { Helmet } from "react-helmet";
import { addWishes, getAllWishes } from "../wish";

const BookDetail = () => {
  const { product_id } = useParams();
  const data = useLoaderData();

  const item = data.find((item) => item.product_id === product_id);

  const {
    product_id: currentId,
    product_title,
    product_image,
    category,
    price,
    description,
    Specification,
    brand,
    rating,
  } = item;

  const [ isWishDisabled, setIsWIshDisabled] = useState(() =>{
    const wishes = getAllWishes()
    return !!wishes.find((wish)=> wish.product_id === currentId)
  })

  // handle favorite button clicked
  const handleFavorite = (item) => {
    addFavorite(item);
  };
  const handleWish = (item) => {
    addWishes(item);
    setIsWIshDisabled(true)
  };

  return (
    <div>
      <Helmet>
        <title>Details | Gadget Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] py-32 rounded-lg w-11/12 mx-auto text-center">
        <Heading
          title="Product Details"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        ></Heading>
      </div>
      <div className="p-2 mx-auto pt-4 w-5/6">
        <div className="hero mx-auto rounded-lg">
          <div className="bg-transparent rounded-lg">
            <div className="border -mt-32 card card-side bg-base-100 w-[800px] h-[500px] pb-10  ">
              <figure>
                <img
                  className="p-5  object- h-full"
                  src={product_image}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <h3 className="text-xl">Price: ${price}</h3>
                <div className="badge badge-outline bg-[#309C08]/10">
                  In stock
                </div>
                <p>{description}</p>
                <h2 className="text-lg font-semibold">Signification</h2>
                <p>1 {Specification[0]}</p>
                <p>2 {Specification[1]}</p>
                <p>3 {Specification[2]}</p>
                <p>4 {Specification[3]}</p>
                <div className="flex gap-3">
                  <h2 className="text-lg font-semibold">Raring</h2>
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div className="badge badge-outline bg-gray-200">
                    {rating}
                  </div>
                </div>
                <div className="navbar-end flex gap-4 ml-10">
                  <button
                    onClick={() => handleFavorite(item)}
                    className="btn rounded-full text-lg text-white bg-[#9538E2]"
                  >
                    Add to Card
                    <HiOutlineShoppingCart />
                  </button>
                  <button
                    onClick={() => handleWish(item)}
                    className={`btn rounded-full ${ isWishDisabled ? "bg-gray-300 cursor-not-allowed" : ""}`}
                    disabled={isWishDisabled}
                  >
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
