import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function Home() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-primary">Welcome to Sweet Delights</h1>
            <p className="text-lg mb-6">Indulge in our delicious, handcrafted cakes for every occasion.</p>
            <Button asChild size="lg">
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
          <div className="lg:w-1/2">
            <img src="/placeholder.svg?height=400&width=400" alt="Delicious Cake" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-secondary rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-secondary-foreground">Custom Orders</h2>
          <p className="text-lg mb-6 text-secondary-foreground">
            Looking for something special? We offer custom cake designs for weddings, birthdays, and other events.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

