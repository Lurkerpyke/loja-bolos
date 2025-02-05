export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">About Sweet Delights</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <img src="/placeholder.svg?height=400&width=400" alt="Our Bakery" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="mb-4">
            Sweet Delights is a family-owned bakery that has been serving delicious cakes and pastries for over 20
            years. Our passion for baking and commitment to quality ingredients sets us apart from the rest.
          </p>
          <p className="mb-4">
            We take pride in creating beautiful and tasty cakes for all occasions, from birthdays and weddings to
            corporate events and holidays. Our team of skilled bakers and decorators work tirelessly to ensure that
            every cake is a masterpiece.
          </p>
          <p>
            At Sweet Delights, we believe that every celebration deserves a perfect cake. That's why we offer a wide
            range of flavors, designs, and customization options to suit your unique taste and style.
          </p>
        </div>
      </div>
    </div>
  )
}

