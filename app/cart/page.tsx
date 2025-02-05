"use client"

import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    // Here you would typically integrate with a payment gateway
    toast({
      title: "Checkout Completed",
      description: "Thank you for your purchase!",
    })
    clearCart()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="font-bold mr-4">${(item.price * item.quantity).toFixed(2)}</p>
                <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <div className="mt-8 flex justify-between items-center">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Button onClick={handleCheckout}>Checkout</Button>
          </div>
        </div>
      )}
    </div>
  )
}

