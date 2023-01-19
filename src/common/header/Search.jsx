import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Search = ({ CartItem }) => {
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <h1>Primeshop</h1>
        <div className="icon f_flex ">
          <i className="fa fa-user icon-circle"></i>
         
          <div className="cart">
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping icon-circle"></i>{" "}
              <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;