import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist, removeWishlist } from "../lib/slices/productsSlice";
import { addToCart, removeFromCart } from "../lib/slices/cartSlice";

const ProductCard = ({ p }) => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.products || {});
  const { cartItems } = useSelector((state) => state.cart || { cartItems: [] });

  const addWishlistHandler = (product) => {
    const item = wishlist.find((w) => w.id === product.id);
    if (item) {
      dispatch(removeWishlist(product.id));
    } else {
      dispatch(addWishlist(product));
    }
  };

  const hasWishlist = (id) => wishlist.some((w) => w.id === id);

  const addCartHandler = (product) => {
    console.log("Cart Items Before:", cartItems);
    const item = cartItems.find((c) => c.id === product.id);
    if (item) {
      dispatch(removeFromCart(product.id)); 
    } else {
      dispatch(addToCart(product)); 
    }
    console.log("Cart Items After:", cartItems);
  };

  const hasInCart = (id) => cartItems.some((c) => c.id === id);

  return (
    <div className="hover:translate-y-[-10px] duration-300 mx-auto hover:shadow-xl transition-all hover:border-primary border border-transparent shadow relative rounded-2xl w-full max-w-[350px]">
      <div className=" aspect-square mx-auto max-h-[300px] p-4 rounded-xl overflow-hidden">
        <img
          src={p.image}
          className="w-full h-full object-contain"
          alt={p.title}
        />
        <button
          className="absolute top-3 cursor-pointer left-3"
          onClick={() => addWishlistHandler(p)}
        >
          <i
            className={`${
              hasWishlist(p.id) ? "fa text-red-500" : "fa-regular"
            } fa-heart`}
          ></i>
        </button>
      </div>
      <div className="px-5 pb-16">
        <h3 className="text-primary font-semibold text-lg line-clamp-2">
          {p.title}
        </h3>
        <p>{p.category}</p>
        <div className="flex absolute bottom-0 left-0 right-0 px-5 pb-5 justify-between items-center">
          <span className="text-3xl text-primary font-semibold">
            {p.price} ₽
          </span>
          <div className="relative flex items-center gap-2">
            <button
              onClick={() => addCartHandler(p)}
              className={`w-10 aspect-square rounded-full flex items-center justify-center text-3xl cursor-pointer ${
                hasInCart(p.id) ? "bg-green-500 text-white" : "border-primary"
              }`}
            >
              <i
                className={hasInCart(p.id) ? "fa fa-times" : "fa fa-cart-plus"}
              ></i>
            </button>
            <div
              className={`p-2 hidden bg-slate-100 border border-primary z-50 absolute top-[calc(100%+5px)] justify-center items-center w-[170px] left-1/2 -translate-x-1/2 rounded text-sm ${
                hasInCart(p.id) ? "block" : ""
              }`}
            >
              <span>Добавить в корзину</span>
              <div className="absolute top-0 -translate-y-full h-[13px] left-1/2 -translate-x-1/2">
                <i className="fa fa-caret-up text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
