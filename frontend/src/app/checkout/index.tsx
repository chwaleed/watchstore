"use client";

import { useState } from "react";
import CheckoutForm from "@/app/checkout/(components)/CheckoutForm";
import PaymentForm from "@/app/checkout/(components)/PaymentForm";
import OrderSummary from "@/app/checkout/(components)/OrderSummary";
import OrderItemsList from "@/app/checkout/(components)/OrderItemsList";
import OrderConfirmed from "@/app/checkout/(components)/OrderConfirmed";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  DatabaseIcon,
  CreditCardIcon,
  UserPlusIcon,
  ShoppingBag,
} from "lucide-react";
import Stepper, { StepperStep } from "@/components/ui/stepper";
import Link from "next/link";

// Types
interface ShippingData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
}

interface PaymentData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  billingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [shippingData, setShippingData] = useState<ShippingData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const orderItems = [
    {
      id: "1",
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      image: "/images/product1.jpg",
    },
    {
      id: "2",
      name: "Product 2",
      price: 49.99,
      quantity: 1,
      image: "/images/product2.jpg",
    },
  ];

  // If cart is empty, show empty cart message
  if (orderItems.length === 0) {
    return (
      <div className="mb-32 bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center py-12">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-8 h-8 text-gray-400" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Your cart is empty
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link href="/home">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const handleShippingSubmit = (data: ShippingData) => {
    setShippingData(data);
    setCurrentStep(2);
  };

  const handlePaymentSubmit = async (data: PaymentData) => {
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setCurrentStep(3);
      console.log("Payment processed:", data); // Log payment data instead of storing
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {};

  const handleRemoveItem = (id: string) => {};

  const calculateTotals = () => {
    const subtotal = 100.0;
    const shipping = 15.99;
    const tax = subtotal * 0.08; // 8% tax

    return { subtotal, shipping, tax };
  };

  const { subtotal, shipping, tax } = calculateTotals();

  const steps: StepperStep[] = [
    {
      id: "shipping",
      label: "Items",
      icon: <UserPlusIcon />,
      content: <div />,
    },

    {
      id: "confirmation",
      label: "Confirmation",
      icon: <DatabaseIcon />,
      content: <div />,
    },
    {
      id: "payment",
      label: "Payment",
      icon: <CreditCardIcon />,
      content: <div />,
    },
  ];
  const handleStepChange = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handleComplete = () => {
    alert("Setup completed successfully!");
    console.log("Form completed");
  };

  return (
    <div className="mb-44  py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Stepper
          steps={steps}
          currentStep={currentStep}
          onStepChange={handleStepChange}
          onComplete={handleComplete}
          showButtons={false}
          allowClickableSteps={false}
          styles={customStyles}
        />

        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            {currentStep > 0 && (
              <Button variant="ghost" onClick={goBack} className="p-2">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
            <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Forms based on current step */}
          <div className="lg:col-span-2">
            {currentStep === 0 && (
              <>
                <OrderItemsList
                  items={orderItems}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                />
              </>
            )}

            {currentStep === 1 && (
              <CheckoutForm onSubmit={handleShippingSubmit} />
            )}
            {currentStep === 2 && (
              <PaymentForm
                onSubmit={handlePaymentSubmit}
                loading={isProcessing}
              />
            )}
          </div>

          {/* Right side - Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} />
              {currentStep == 0 && (
                <Button
                  onClick={() => setCurrentStep(1)}
                  className="w-full mt-10"
                >
                  Contiue
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const customStyles = {
  stepCircle: "shadow-md border-2",
  completedStep: {
    circle: "bg-black border-black text-white shadow-md",
    label: "text-black font-bold",
    connection: "border-black border-2",
  },
  activeStep: {
    circle:
      "bg-gray-800 border-gray-800 text-white shadow-md ring-2 ring-gray-300",
    label: "text-black font-bold",
    connection: "border-gray-300",
  },
  inactiveStep: {
    circle: "border-gray-300 text-gray-500 ",
    label: "text-gray-500",
    connection: "border-gray-200",
  },
};
