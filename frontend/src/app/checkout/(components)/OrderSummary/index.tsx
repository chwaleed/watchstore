"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface OrderSummaryProps {
  subtotal: number;
  shipping?: number;
  tax?: number;
  discount?: number;
}

interface OrderSummaryProps {
  subtotal: number;
  shipping?: number;
  tax?: number;
  discount?: number;
}

export default function OrderSummary({
  subtotal,
  shipping = 0,
  tax = 0,
  discount = 0,
}: OrderSummaryProps) {
  const total = subtotal + shipping + tax - discount;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Price Breakdown */}
        <div className="space-y-3">
          <div className="flex justify-between text-base">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          {shipping > 0 && (
            <div className="flex justify-between text-base">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
          )}

          {tax > 0 && (
            <div className="flex justify-between text-base">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          )}

          {discount > 0 && (
            <div className="flex justify-between text-base text-green-600">
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}
        </div>

        <Separator />

        {/* Total */}
        <div className="flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </CardContent>
    </Card>
  );
}
