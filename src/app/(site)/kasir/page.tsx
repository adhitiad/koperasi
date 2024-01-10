"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cartSlice,
  selectCartItems,
  clearCart,
  selectTotalPrice,
  selectCartCount,
  removeFromCart,
} from "@/libs/cartSlice";
import { useState } from "react";
import ProductList from "@/components/KasirtList";

// TODO: kasir page here
export default function Kasir() {
  const dispatch = useDispatch();
  const cartCount: number = useSelector(selectCartCount);
  const totalPrices: number = useSelector(selectTotalPrice);
  const cartItems: any[] = useSelector(selectCartItems);
  const [cart, setCart] = useState(cartItems);
  const [totalPrice, setTotalPrice] = useState(totalPrices);
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price);
    setCounter(counter + 1);
  };

  const handleRemoveFromCart = (product: any) => {
    dispatch(removeFromCart(product));
    setCart(cart.filter((item) => item.id !== product.id));
    setTotalPrice(totalPrice - product.price);
    setCounter(counter - 1);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    setCart([]);
    setTotalPrice(0);
    setCounter(0);
  };

  const handleIncrement = (product: any) => {
    setCart(
      cart?.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setTotalPrice(totalPrice + product.price);
    setCounter(counter + 1);
  };

  const handleDecrement = (product: any) => {
    setCart(
      cart?.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
    setTotalPrice(totalPrice - product.price);
    setCounter(counter - 1);
  };

  const handlePay = () => {};

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
      setCart([]);
      setTotalPrice(0);
      setCounter(0);
    } catch (error: any) {
      setError("Failed to checkout. Please try again.");

      setLoading(false);
    }
  };

  const renderCartCount = () => {
    return (
      <div className="flex items-center justify-center">
        <span className="mr-2 text-lg font-bold">{cartCount}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    );
  };

  const renderTotalPrice = () => {
    return (
      <div className="flex items-center justify-center">
        <span className="mr-2 text-lg font-bold">${totalPrice}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    );
  };

  const renderCartItems = () => {
    return cart.map((item: any) => (
      <div key={item.id} className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={item.image}
            alt={item.name}
            className="h-16 w-16 rounded-lg object-cover"
          />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-gray-500">${item.price}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => handleRemoveFromCart(item)}
            className="rounded-lg bg-red-500 px-4 py-2 text-white"
          >
            Remove
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <ProductList
              product={product}
              increment={handleIncrement}
              decrement={handleDecrement}
              addToCart={handleAddToCart}
              counter={counter}
            />
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${totalPrice}</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Pajak</p>
              <p className="text-gray-700">Rp. 0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold text-gray-300">Biaya Admin 1%</p>
              <p className="text-lg font-bold text-gray-300">Rp. 129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold text-gray-300">Asuransi</p>
              <p className="text-lg font-bold">Rp. 0</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-bold"> Potongan Angsuran 1 </p>
              <p className="text-lg font-bold">Rp. 0</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Diskon </p>
              <p className="text-lg font-bold">Rp. 0</p>
            </div>

            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold text-gray-700">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold text-gray-700">
                  $134.98 USD
                </p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const product = {
  id: 1,
  name: "Keranjang",
  price: 3000000000,
  image:
    "https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
