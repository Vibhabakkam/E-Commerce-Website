import { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"

const Cart = () => {
  const [cartItems, setCartItems] = useState();
  const [cartPrice, setCartPrice] = useState(null);

 const router = useNavigate();

  useEffect(() => {
    try {
      let allUsers = JSON.parse(localStorage.getItem("userData"));
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));

      if(!currentUser)  {
        router("/login");
        alert("Login to access Cart") 
      }
      
      for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email === currentUser["current-user-email"]) {
          setCartItems(allUsers[i]["cart"]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  
  
  const removeItem = (e) => {
    let allUsers = JSON.parse(localStorage.getItem("userData"));
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    for (let i = 0; i < allUsers.length; i++) {
      if (allUsers[i].email === currentUser["current-user-email"]) {
        let cartData = allUsers[i].cart;
        let removeItem = [];

        for (let j = 0; j < cartData.length; j++) {
          if (cartData[j].id === e.id) {
            continue;
          }
          removeItem.push(cartData[j]);
        }

        allUsers[i].cart = removeItem;
        break;
      }
    }

    localStorage.setItem("userData", JSON.stringify(allUsers));
    window.location.reload();
  };

  const TotalPrice = (items) => {
    console.log(items);

    let totalPrice = 0;

    for (let i = 0; i < items.length; i++) {
      totalPrice += items[i].price;
    }

    totalPrice = Math.ceil(totalPrice * 100) / 100;

    setCartPrice(totalPrice);
  };

  const buyItems = () => {
    const result = window.confirm(`Do you want to buy products?`);
    if (result) {

      let allUsers = JSON.parse(localStorage.getItem("userData"));
      let currentUser = JSON.parse(localStorage.getItem("currentUser"));


      for (let i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email === currentUser["current-user-email"]){
            allUsers[i].cart = [];
            break;
        }
      }

      localStorage.setItem("userData", JSON.stringify(allUsers));
      router("/");
      alert("Products will dilevered soon!");
     
    } else {
      alert("Action canceled!");
    }
  };

  if (!cartItems) {
    return (
      <>
        <div>Loading</div>
      </>
    );
  }

  return (
    <>
      {cartItems &&
        cartItems.map((e, i) => (
          <div key={i}>
            <img src={e.image} alt="productImage"></img>
            <p>{e.category}</p>
            <p>{e.description}</p>
            <p>${e.price}</p>
            <button onClick={() => removeItem(e)}>Remove Item</button>
          </div>
        ))}

      <button onClick={() => TotalPrice(cartItems)}>Get Products Price</button>

      {cartPrice && (
        <>
          <p>Total Cart Price</p>
          <p>{cartPrice}</p>
          <button onClick={buyItems}>Buy Products</button>
        </>
      )}
    </>
  );
};

export default Cart;