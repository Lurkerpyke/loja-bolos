"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type React from "react" // Added import for React

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface AddToCartButtonProps {
  product: Product
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <Button onClick={() => addToCart(product)} size="lg">
      Add to Cart
    </Button>
  )
}

export default AddToCartButton

