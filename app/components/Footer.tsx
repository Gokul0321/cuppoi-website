export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black border-t border-gray-800 py-10 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-3xl text-yellow-600 mb-3">
              Cuppoi
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Premium Kerala coffee crafted from carefully selected
              Arabica and Robusta beans, roasted for rich flavour
              and unforgettable moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <a
                href="#home"
                className="hover:text-yellow-500 transition"
              >
                Home
              </a>

              <a
                href="#coffee"
                className="hover:text-yellow-500 transition"
              >
                Coffee
              </a>

              <a
                href="#about"
                className="hover:text-yellow-500 transition"
              >
                About
              </a>

              <a
                href="#contact"
                className="hover:text-yellow-500 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-4">
              Connect With Us
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">

              <a
                href="https://wa.me/919497093752"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                WhatsApp
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                Instagram
              </a>

              <a
                href="mailto:hello@cuppoi.com"
                className="hover:text-yellow-500 transition"
              >
                hello@cuppoi.com
              </a>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-4">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Cuppoi. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}