import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sc42 from "../Components/Sc42.png";
import Sc52 from "../Components/Sc52.png";
import marsterCard from "../Components/masterCard.png";
import american from "./../Components/American.png";
import meastro from "../Components/maestro.png";
import visa from "../Components/visa.png";
import klrana from "../Components/klrana.png";
import Paypal from "../Components/paypal.png";
import "./Home.css";
const Home = () => {
  const router = useNavigate();
  function routeLogin() {
    router("/login");
  }
  function routeRegister() {
    router("/register");
  }
  function routeCart() {
    router("/cart");
  }
  const [product, setProduct] = useState();
  const [cartProducts, setCartProducts] = useState(0);

  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);

        if (response) {
          setProduct(response.data);
        } else {
          console.log("Response Not Found");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fechData();
    cartItems();
  }, [cartProducts]);

  const cartItems = () => {
    let isLogin = JSON.parse(localStorage.getItem("currentUser"));
    let userInfo = JSON.parse(localStorage.getItem("userData"));

    try {
      for (let i = 0; i < userInfo.length; i++) {
        if (isLogin["current-user-email"] === userInfo[i].email) {
              setCartProducts(userInfo[i].cart.length);
              break;
        }
      }
    } catch (error) {
        setCartProducts(0)
    }
    
  };

  // console.log(product);
  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    alert("logout Successful");
    window.location.reload();
  };

  let isLogin = JSON.parse(localStorage.getItem("currentUser"));

  const addToCart = (e) => {
    let isLogin = JSON.parse(localStorage.getItem("currentUser"));

    if (!isLogin) return alert("Login to add Cart");

    // console.log(isLogin["current-user-email"]);

    let userInfo = JSON.parse(localStorage.getItem("userData"));

    for (let i = 0; i < userInfo.length; i++) {
      if (isLogin["current-user-email"] === userInfo[i].email) {
        if (userInfo[i].cart === undefined) {
          userInfo[i].cart = [e];
        } else {
          userInfo[i].cart.push(e);
        }
        localStorage.setItem("userData", JSON.stringify(userInfo));
      }
    }

    // console.log(userInfo);
    window.location.reload();
    alert(" product Added to Cart");
  };

  return (
    <div id="Hmain-div">
      <div id="TopFirst">
        <div id="Top1">
          <div id="Top1-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
          </div>
          <div id="Top1-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,152V48H152V88H96a8,8,0,0,0-8,8v56Zm56-36.69L140.69,152H104Zm48,25.38L115.31,104H152ZM208,208H104V168h56a8,8,0,0,0,8-8V104h40Z"></path>
            </svg>
            <h2>CORAL</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,152V48H152V88H96a8,8,0,0,0-8,8v56Zm56-36.69L140.69,152H104Zm48,25.38L115.31,104H152ZM208,208H104V168h56a8,8,0,0,0,8-8V104h40Z"></path>
            </svg>
          </div>
          <div id="Top1-3">
            {isLogin ? (
              <button onClick={logout}>LogOut</button>
            ) : (
              <button onClick={routeLogin}>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                  </svg>
                </p>
                Login
              </button>
            )}
            <button onClick={routeRegister}>Register </button>
            <button onClick={routeCart}>
              <p>{cartProducts}</p>
              <p>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,0,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32ZM32,200,46.33,80H80v24a8,8,0,0,0,16,0V80h64v24a8,8,0,0,0,16,0V80h33.75l14.17,120Z"></path>
                </svg>
              </p>
            </button>
          </div>
        </div>
      </div>
      <div id="Top2">
        <div id="Section-Div">
          <p>Jewelry & Accessories</p>
          <p>Clothing & Shoes</p>
          <p>Home & Living</p>
          <p>Wedding & Party</p>
          <p>Toys & Entertainment</p>
          <p>Art & Collectibles</p>
          <p>Craft Supplies & Tools</p>
        </div>
        <div id="Collection-div">
          <div id="Collection1">
            <p>Collections</p>
            <p>
              You Can Explore Ans Shop Many Differnt Collection <br />
              From Various Barands Here.
            </p>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,0,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32ZM32,200,46.33,80H80v24a8,8,0,0,0,16,0V80h64v24a8,8,0,0,0,16,0V80h33.75l14.17,120Z"></path>
              </svg>
              <p>Shop Now</p>
            </button>
          </div>
          <div id="Collection2">
            <img src={Sc42} alt="" />
          </div>
        </div>
      </div>
      <div id="New-Products">
        <h1>New Products</h1>
        <div>
          <div id="New-1">
            <p>
              <b>All Product</b>
            </p>
            <p>T-shirts</p>
            <p>Hoodies </p>
            <p>Jackets</p>
          </div>
          <div id="New-2">
            <button>Filter</button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#f8f7f7"
              viewBox="0 0 256 256"
            >
              <path d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm108.34,72.28A15.92,15.92,0,0,0,144,139.17v55.49L112,216V139.17a15.92,15.92,0,0,0-4.32-10.94L40,56H216Z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div id="all-Products">
        {product ? (
          product.map((e, i) => (
            <div key={i}>
              <img src={e.image} alt="productImage"></img>
              <p>{e.category}</p>
              {/* <p>{e.description}</p> */}
              <p>${e.price}</p>
              <button onClick={() => addToCart(e)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <div>Loading</div>
        )}
      </div>
      <div id="Zara">
        <img src={Sc52} alt="" />
      </div>
      <div id="Footer">
        <div id="Footer1">
          <div id="Foo-1">
            <div id="logo-list">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,152V48H152V88H96a8,8,0,0,0-8,8v56Zm56-36.69L140.69,152H104Zm48,25.38L115.31,104H152ZM208,208H104V168h56a8,8,0,0,0,8-8V104h40Z"></path>
              </svg>
              <p>CORAL</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,152V48H152V88H96a8,8,0,0,0-8,8v56Zm56-36.69L140.69,152H104Zm48,25.38L115.31,104H152ZM208,208H104V168h56a8,8,0,0,0,8-8V104h40Z"></path>
              </svg>
            </div>
            <p>
              Lorem Ipsum Dolor Sit Amet , Consectetur Adipiscing <br />
              Elit, Sed Do Eiusmod Tempor incididunt ut Labore Et <br />
              Dolore Magna Aliqua
            </p>
            <div id="logo-list2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#1b1819"
                viewBox="0 0 256 256"
              >
                <path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm87.65,96.18Q211.83,120,208,120a168.58,168.58,0,0,0-43.94,5.84A166.52,166.52,0,0,0,150.61,96a168.32,168.32,0,0,0,38.2-31.55A87.78,87.78,0,0,1,215.65,120.18ZM176.28,54.46A151.75,151.75,0,0,1,142,82.52a169.22,169.22,0,0,0-38.63-39,88,88,0,0,1,73,10.94ZM85.65,50.88a153.13,153.13,0,0,1,42,39.18A151.82,151.82,0,0,1,64,104a154.19,154.19,0,0,1-20.28-1.35A88.39,88.39,0,0,1,85.65,50.88ZM40,128a87.73,87.73,0,0,1,.53-9.64A168.85,168.85,0,0,0,64,120a167.84,167.84,0,0,0,72.52-16.4,150.82,150.82,0,0,1,12.31,27.13,167.11,167.11,0,0,0-24.59,11.6,169.22,169.22,0,0,0-55.07,51.06A87.8,87.8,0,0,1,40,128Zm42,75a152.91,152.91,0,0,1,50.24-46.79,148.81,148.81,0,0,1,20.95-10,152.48,152.48,0,0,1,3.73,33.47,152.93,152.93,0,0,1-3.49,32.56A87.92,87.92,0,0,1,82,203Zm89.06,1.73a170,170,0,0,0,1.86-25,168.69,168.69,0,0,0-4.45-38.47A152.31,152.31,0,0,1,208,136q3.8,0,7.61.19A88.13,88.13,0,0,1,171.06,204.72Z"></path>
              </svg>
            </div>
          </div>
          <div id="Foo-2">
            <h4>CATLOG</h4>
            <p>Necklaces</p>
            <p>Hoodies</p>
            <p>Jewelry Box</p>
            <p>T-Shirt</p>
            <p>Jacket</p>
          </div>
          <div id="Foo-2">
            <h4>ABOUT US</h4>
            <p>Our Producers</p>
            <p>Sitemap</p>
            <p>FAQ</p>
            <p>About Us</p>
            <p>Terms & Conditions</p>
          </div>
          <div id="Foo-2">
            <h4>CUSTOMER SERVICES</h4>
            <p>Contact Us</p>
            <p>Track Your Order</p>
            <p>Product Care & Repair</p>
            <p>Book An Appointment</p>
            <p>Shipping & Returns</p>
          </div>
        </div>
        <div id="Footer2">
          <div id="Footer2-1">@ 2022 coral,Inc</div>
          <div id="Footer2-2">
            <img src={marsterCard} alt="" />
            <img src={visa} alt="" />
            <img src={american} alt="" />
            <img src={Paypal} alt="" />
            <img src={meastro} alt="" />
            <img src={klrana} alt="" />
          </div>
          <div id="Footer2-1">scroll to top</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
