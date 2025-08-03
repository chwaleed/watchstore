import { Button } from "@/components/ui/button";
import React from "react";

function OrderConfirmed({ shippingData }) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white p-8 rounded-lg shadow-sm border">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg text-left mb-6">
            <h3 className="font-medium mb-2">Order Details:</h3>
            <p className="text-sm text-gray-600">Order #: #12345</p>
            <p className="text-sm text-gray-600">
              Email confirmation sent to: {shippingData?.email}
            </p>
            <p className="text-sm text-gray-600">
              Shipping to: {shippingData?.firstName} {shippingData?.lastName}
            </p>
          </div>

          <div className="space-y-3">
            <Button className="w-full">Track Your Order</Button>
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmed;
