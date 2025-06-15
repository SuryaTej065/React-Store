import React from "react";
import { useContext } from "react";
import { AppContext } from "./App";
export default function Order() {
  const { orders, email } = useContext(AppContext);
  return (
    <div>
      <h2>My Orders</h2>
      {orders.map((order) => (
        order.email === email &&
        <div key={order.id}>Name:{order.name}  , Price:{order.price}  , Total Quantity:{order.qty} , Total Price:{order.qty*order.price}</div>
      ))}
    </div>
  );
}