"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919497093752?text=Hi%20I'm%20interested%20in%20ordering%20Cuppoi%20Coffee"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5
        right-5
        z-50

        bg-green-500
        hover:bg-green-600

        text-white
        rounded-full
        shadow-xl

        transition-all
        duration-300
        hover:scale-110

        flex
        items-center
        justify-center

        w-14
        h-14

        md:w-auto
        md:h-auto
        md:px-6
        md:py-3
      "
      aria-label="WhatsApp Order"
    >
      {/* Mobile */}
      <span className="text-2xl md:hidden">💬</span>

      {/* Desktop */}
      <span className="hidden md:block font-medium">
        WhatsApp Order
      </span>
    </a>
  );
}