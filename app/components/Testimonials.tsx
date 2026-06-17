export default function Testimonials() {
  return (
    <section className="py-24 px-8 bg-[#111111]">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-12">
          What Coffee Lovers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#1c1c1c] p-6 rounded-2xl">
            <p>"Rich aroma and smooth taste."</p>
            <h4 className="mt-4 text-yellow-500">★★★★★</h4>
          </div>

          <div className="bg-[#1c1c1c] p-6 rounded-2xl">
            <p>"Best filter coffee I've tried."</p>
            <h4 className="mt-4 text-yellow-500">★★★★★</h4>
          </div>

          <div className="bg-[#1c1c1c] p-6 rounded-2xl">
            <p>"Perfect morning companion."</p>
            <h4 className="mt-4 text-yellow-500">★★★★★</h4>
          </div>

        </div>
      </div>
    </section>
  );
}