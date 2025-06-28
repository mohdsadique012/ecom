import React from 'react';
import { useLocation } from 'react-router-dom';
import {bagProducts} from '../Data/index.js'
function Checkout() {
    const url = useLocation();
    console.log(url.pathname.split('/')[1]);
   const product = bagProducts.find((product) => product.url === `/${url.pathname.split('/')[1]}`);
   const [counter, setCounter] = React.useState(1);
  return (
    <div className='bg-[#FBFBFB]'>
    <div className="p-6 sm:px-10">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center mb-8">Checkout</h1>

      {/* Progress Bar */}
      <div className="flex justify-center items-center mb-8">
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            <div className="w-8 h-8 text-sm bg-[#261FB3] text-white rounded-full flex items-center justify-center">
              1
            </div>
            <span className="ml-2 text-xs sm:text-sm">Shipping</span>
          </div>
          <div className=" w-4 sm:w-16 h-0.5 rounded bg-gray-300"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 text-sm bg-[#261FB3] text-white rounded-full flex items-center justify-center">
              2
            </div>
            <span className="ml-2 text-xs sm:text-sm">Billing</span>
          </div>
          <div className="w-4 sm:w-16 h-0.5 rounded bg-gray-300"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 text-sm bg-gray-300 text-gray-500 rounded-full flex items-center justify-center">
              3
            </div>
            <span className="ml-2 text-xs sm:text-sm">Confirmation</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full flex-col md:flex-row gap-8">
        {/* Left Section: Payment Method */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">Payment Method</h2>
          <div className="flex items-center gap-4 mb-6">
            <label className="flex items-center gap-2">
              <input type="radio" defaultChecked name="payment" className="form-radio text-[#261FB3]" />
              <span>Credit Card</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="form-radio text-[#261FB3]" />
              <span>PayPal</span>
            </label>
          </div>

          <h2 className="text-lg font-bold mb-4">Payment Details</h2>
          <div className="mb-4">
            <label className="block text-sm mb-2">Enter Name on Card</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Card Number</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm mb-2">Expiration</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-2">CVV Code</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="123"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" className="form-checkbox text-[#261FB3]" />
            <span className="text-sm">
              By Clicking “Confirm Payment” I agree to the companies term of services
            </span>
          </div>
          <div className="flex  flex-wrap-reverse gap-4">
            <button className="bg-gray-200 text-black px-6 py-3 rounded-lg hover:bg-gray-300">
              Back
            </button>
            <button className="bg-[#261FB3] text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Confirm Payment: {product.price}
            </button>
          </div>
        </div>

        {/* Right Section: Order Details */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">Details Order</h2>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={product.img}
              alt="Product 1"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-sm font-bold">{product.title}</h3>
              {/* <p className="text-sm text-gray-500">Size: 43</p> */}
              <p className="text-sm font-bold">{product.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=>setCounter((prev)=> prev <= 0 ? 0 : prev - 1)} className="px-2 py-1 border rounded-lg">-</button>
              <span>{counter}</span>
              <button onClick={()=>setCounter((prev)=>prev + 1)} className="px-2 py-1 border rounded-lg">+</button>
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Discount code or gift card"
            />
            <button className="bg-[#261FB3] text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-600">
              Apply
            </button>
          </div>
          <div className="text-sm">
            <div className="flex justify-between mb-2">
              <span>Subtotal ({counter} items)</span>
              <span>{product.price}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping cost</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{product.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Checkout;
