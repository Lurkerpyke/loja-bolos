"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type React from "react" // Added import for React

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden">
      <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-primary font-bold mb-4">${product.price.toFixed(2)}</p>
        <div className="flex justify-between">
          <Button asChild variant="outline" size="sm">
            <Link href={`/products/${product.id}`}>View Details</Link>
          </Button>
          <Button size="sm" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

