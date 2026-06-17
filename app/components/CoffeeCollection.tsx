import Image from "next/image";

export default function CoffeeCollection() {
  return (
    <section id="coffee" className="py-24 px-8 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Coffee Collection
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Arabica */}
          <div className="bg-[#1c1c1c] rounded-2xl overflow-hidden transition duration-300 hover:scale-105">
            <Image
              src="/images/arabica.jpg"
              alt="Arabica Coffee"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Arabica
              </h3>

              <p className="text-gray-400">
                Smooth, aromatic and naturally sweet.
              </p>

              <p className="text-yellow-500 font-bold mb-4">
                ₹399 / 250g
              </p>

              <a
                href="https://wa.me/919497093752?text=Hi,%20I%20would%20like%20to%20order%20Arabica%20Coffee%20(250g)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
                >   
                Buy Now
            </a>
            </div>
          </div>

          {/* Robusta */}
          <div className="bg-[#1c1c1c] rounded-2xl overflow-hidden transition duration-300 hover:scale-105">
            <Image
              src="/images/robusta.jpg"
              alt="Robusta Coffee"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Robusta
              </h3>

              <p className="text-gray-400">
                Strong, bold and rich in caffeine.
              </p>

              <p className="text-yellow-500 font-bold mb-4">
                ₹399 / 250g
              </p>

              <a
                href="https://wa.me/919497093752?text=Hi,%20I%20would%20like%20to%20order%20Robusta%20Coffee%20(250g)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
                >   
                Buy Now
            </a>
            </div>
          </div>

          {/* Filter Coffee */}
          <div className="bg-[#1c1c1c] rounded-2xl overflow-hidden transition duration-300 hover:scale-105">
            <Image
              src="/images/hero.jpg"
              alt="Filter Coffee"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Filter Coffee
              </h3>

              <p className="text-gray-400">
                Traditional South Indian coffee experience.
              </p>

              <p className="text-yellow-500 font-bold mb-4">
                ₹500 / 250g
              </p>

              <a
                href="https://wa.me/919497093752?text=Hi,%20I%20would%20like%20to%20order%20Filter%20Coffee%20(250g)"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
                >   
                Buy Now
            </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}