import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "../lib/slices/cartSlice";
import savat from "../assets/basket.svg";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();

  const totalPrice =
    cartItems.length > 0
      ? cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
      : 0;

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  console.log(cartItems); 

  return (
    <div className="container mx-auto p-5">
      <span className="text-3xl font-bold mb-5 inline-block">
        Savatcha
        <img className="inline-block ml-4" src={savat} alt="Basket Icon" />
      </span>

      {cartItems.length === 0 ? (
        <p className="text-3xl text-fuchsia-500 font-black">Savatcha bo'sh!</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="hover:scale-[1.02] cursor-pointer duration-300 hover:border-primary border-2 border-transparent p-2 rounded-md shadow-2xl flex flex-col items-center"              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="bg-transparent w-40 h-40 object-contain mb-3"
                />
                <h3 className="text-lg font-semibold text-center text-blue-500">
                  {item.title}
                </h3>
                <p className="text-primary text-2xl font-black">
                  {item.price} ₽
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="cursor-pointer hover:bg-red-700 duration-300 mt-3 px-4 py-2 bg-red-500 text-white rounded-lg"
                  >
                    O'chirish
                  </button>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="cursor-pointer hover:bg-green-700 duration-300 mt-3 px-4 py-2 bg-green-500 text-white rounded-lg"
                  >
                    Qo'shish
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 text-2xl font-semibold text-cyan-800">
            Jami: {totalPrice.toLocaleString()} ₽
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
