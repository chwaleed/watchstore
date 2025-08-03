"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface OrderItemsListProps {
  items: OrderItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export default function OrderItemsList({
  items,
  onUpdateQuantity,
  onRemoveItem,
}: OrderItemsListProps) {
  const handleQuantityDecrease = (id: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      onUpdateQuantity(id, currentQuantity - 1);
    }
  };

  const handleQuantityIncrease = (id: string, currentQuantity: number) => {
    onUpdateQuantity(id, currentQuantity + 1);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Order Items</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 p-4 border rounded-lg"
            >
              {item.image && (
                <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              )}
              <div className="flex-1">
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-sm text-gray-600">
                    ${item.price.toFixed(2)} each
                  </span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2 mt-3">
                  <span className="text-sm text-gray-600">Quantity:</span>
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() =>
                        handleQuantityDecrease(item.id, item.quantity)
                      }
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() =>
                        handleQuantityIncrease(item.id, item.quantity)
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-2">
                <p className="font-bold text-xl">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onRemoveItem(item.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
