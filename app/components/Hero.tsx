import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center pt-20"
    >
      <Image
        src="/images/hero.jpg"
        alt="Coffee"
        fill
        className="object-cover opacity-40"
        priority
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6">
        <p className="uppercase tracking-[0.4em] text-yellow-500 mb-4">
          Kerala Specialty Coffee
        </p>

        <h1 className="text-8xl font-bold mb-6">
          Cuppoi
        </h1>

        <p className="max-w-2xl text-xl text-gray-300 mx-auto">
          From the misty hills of Kerala to your cup. Freshly roasted coffee
          crafted for everyday rituals and unforgettable moments.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#coffee"
            className="bg-yellow-600 px-8 py-3 rounded-lg hover:scale-105 transition"
          >
            Shop Coffee
          </a>

          <a
            href="#about"
            className="border border-white px-8 py-3 rounded-lg hover:scale-105 transition"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
}