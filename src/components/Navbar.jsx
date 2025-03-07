import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container border-b-2 border-primary flex justify-between items-center py-3">
      <a href="/" className="flex items-center gap-5 text-primary">
        <img src="/logo.svg" alt="logo" />
        <div>
          <span className="block text-3xl font-semibold">Red Clothes</span>
          <span className="text-sm">Магазин одежды для практики</span>
        </div>
      </a>
      <div className="flex gap-5 items-center text-primary text-2xl">
        <Link to="/cart">
          <i className="fa me-2 fa-shopping-cart"></i>
          <span>30 595 ₽</span>
        </Link>
        <Link to={"/wishlist"}>
          <i className="fa-regular fa-heart"></i>
        </Link>

        {user ? (
          <div className="flex items-center gap-2">
            <span>{user.username}</span>
            <button
              onClick={() => {
                localStorage.removeItem("user");
                window.location.reload();
              }}
              className="flex gap-1 items-center text-sm text-white rounded-2xl px-2 py-1 bg-red-700 "
            >
              Chiqish
              <i class="fa-solid fa-arrow-right text-white-500"></i>
            </button>
          </div>
        ) : (
          <div className="border-l-4 pl-4 flex gap-2">
            <Link to="/login">
              <i className="fa-regular fa-user"></i> Login
            </Link>
            <span>/</span>
            <Link className="" to="/register">
              <i className="fa-regular fa-user-plus "></i> Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
