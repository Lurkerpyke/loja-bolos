import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import AddToCartButton from "@/components/add-to-cart-button"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  )
}

