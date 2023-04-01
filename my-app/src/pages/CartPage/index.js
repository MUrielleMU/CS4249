import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { loggingjs } from "@/utils/logging.js";
import { Button, Steps, Input } from "antd";
import EndTrialBtn from "@/pages/endTrialBtn";

const Cart = () => {
  const localStorage = window?.localStorage;
  const isFCP = localStorage?.getItem("isFCP");
  const homepage = isFCP === "true" ? "/fcp" : "/ccp";

  let cart = localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
    // 去重
    if (cart?.length > 0) {
      const newCart = [];
      cart?.forEach((item) => {
        if (newCart.indexOf(item) === -1) {
          newCart.push(item);
        }
      });
      cart = newCart;
      let temp = JSON.stringify(cart);
      localStorage.setItem("cart", temp);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Your Shopping Cart</h1>
        <h4 style={{ color: "#AE352B" }}>
          Note: By clicking 'purchase' button, you will end current trial!
        </h4>
        <div>
          {cart && cart?.length > 0 ? (
            <div>
              {cart?.map((item) => (
                <div style={{ marginBottom: "10px" }}> - {item}</div>
              ))}
            </div>
          ) : (
            "Empty"
          )}
        </div>
        <div style={{ marginTop: 24 }}>
          <Link to={homepage}>
            <Button
              style={{
                backgroundColor: "#348DE4",
                color: "#fff",
                marginRight: "24px",
              }}
            >
              Continue Shopping
            </Button>
          </Link>
          <EndTrialBtn text={"Purchase"} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
