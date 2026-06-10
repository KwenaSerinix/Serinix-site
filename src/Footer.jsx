function Footer() {
  return (
    <footer className="bg-[#2f63b8] text-white p-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Build Something Secure?</h2>
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">Contact Us Today</p>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="mailto:admin@serinix.co.za"
              className="rounded-lg bg-[#e85bd8] px-10 py-4 text-sm font-semibold text-white transition hover:bg-[#d63dc2]"
            >
              Contact Us Today
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-12 text-center md:grid-cols-3 md:text-left">
          <div className="flex flex-col items-center gap-5 md:items-start">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.34.03-.67.08-1h4.09a10.1 10.1 0 0 0 1.8 3.2c.38.36.8.67 1.26.92V20zm4.1-2.33a8.07 8.07 0 0 1-3.33 1.73v-3.05c.31-.09.6-.24.87-.43.73-.47 1.35-1.14 1.74-1.95H16.1zM18 11v2h-2.1c-.09-.38-.24-.74-.44-1.07-.34-.46-.8-.84-1.33-1.06V6.8c1.1.37 2.1 1.06 2.8 1.9C18 9.2 18 10.1 18 11zm-6-7c1 0 1.95.18 2.8.5a7.97 7.97 0 0 0-2.8 3.85V4zm-5.35 1.4C8.98 6.03 10.44 6 12 6c.87 0 1.71.08 2.52.24A7.96 7.96 0 0 0 9 4.4zM4.91 9.64a8.06 8.06 0 0 0-1.33 2.36H2.09A7.96 7.96 0 0 1 4.91 9.64zM4 13.1c0 .31.03.62.08.92.83-.22 1.6-.6 2.28-1.12A9.03 9.03 0 0 0 4 13.1zm4.16 2.1c-.68.3-1.4.48-2.16.55v-1.7c.89-.35 1.68-.96 2.25-1.74.22.34.47.66.74.95.44.44.95.8 1.5 1.06V15.2c-.54-.12-1.05-.37-1.33-.7z"
                />
              </svg>
            </div>
            <div className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">SERI NIX</div>
            <p className="text-sm leading-7 text-white/80">
              Secure. Intelligent.
              <br />
              Scalable Software Solutions.
            </p>
          </div>

          <div>
            <div className="text-base font-semibold uppercase tracking-[0.25em] text-white">Quick Links</div>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <a href="#home" className="block transition hover:text-white">
                Home
              </a>
              <a href="#about" className="block transition hover:text-white">
                About Us
              </a>
              <a href="#services" className="block transition hover:text-white">
                Services
              </a>
              <a href="#contact" className="block transition hover:text-white">
                Contact
              </a>
            </div>
          </div>

          <div>
            <div className="text-base font-semibold uppercase tracking-[0.25em] text-white">Contact</div>
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <p>115 Paul Kruger Street</p>
              <p>Pretoria Central, 0002</p>
              <p>Tel: 012 881 6641</p>
              <p>Email: admin@serinix.co.za</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/70">
          © 2026 Serinix. All rights reserved. Enterprise Number: k2014171533
        </div>
      </div>
    </footer>
  )
}

export default Footer
