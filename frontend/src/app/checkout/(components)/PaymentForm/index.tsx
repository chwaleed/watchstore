"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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

interface PaymentFormProps {
  onSubmit?: (data: PaymentData) => void;
  loading?: boolean;
}

export default function PaymentForm({
  onSubmit,
  loading = false,
}: PaymentFormProps) {
  const [formData, setFormData] = useState<PaymentData>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: {
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("billing.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        billingAddress: {
          ...prev.billingAddress,
          [field]: value,
        },
      }));
    } else {
      // Format card number with spaces
      if (name === "cardNumber") {
        const formattedValue = value
          .replace(/\s/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim();
        setFormData((prev) => ({ ...prev, [name]: formattedValue }));
      }
      // Format expiry date
      else if (name === "expiryDate") {
        const formattedValue = value
          .replace(/\D/g, "")
          .replace(/(\d{2})(\d{2})/, "$1/$2");
        setFormData((prev) => ({ ...prev, [name]: formattedValue }));
      }
      // Limit CVV to 3-4 digits
      else if (name === "cvv") {
        const formattedValue = value.replace(/\D/g, "").slice(0, 4);
        setFormData((prev) => ({ ...prev, [name]: formattedValue }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Payment Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Card Information */}
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                maxLength={5}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                type="password"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                maxLength={4}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardholderName">Cardholder Name</Label>
            <Input
              id="cardholderName"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
            />
          </div>

          <Separator />

          {/* Billing Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Billing Address</h3>

            <div className="space-y-2">
              <Label htmlFor="billing.address">Street Address</Label>
              <Input
                id="billing.address"
                name="billing.address"
                value={formData.billingAddress.address}
                onChange={handleInputChange}
                placeholder="123 Main Street"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="billing.city">City</Label>
                <Input
                  id="billing.city"
                  name="billing.city"
                  value={formData.billingAddress.city}
                  onChange={handleInputChange}
                  placeholder="New York"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing.postalCode">Postal Code</Label>
                <Input
                  id="billing.postalCode"
                  name="billing.postalCode"
                  value={formData.billingAddress.postalCode}
                  onChange={handleInputChange}
                  placeholder="10001"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="billing.country">Country</Label>
                <Input
                  id="billing.country"
                  name="billing.country"
                  value={formData.billingAddress.country}
                  onChange={handleInputChange}
                  placeholder="United States"
                  required
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Processing..." : "Complete Order"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
