import { Link } from "@remix-run/react";

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-white py-16 pt-16 pb-[10rem] sm:pb-[20rem]">
      {/* Background giant text */}
      <span
        className="
      absolute
      bottom-4
      left-1/2
      transform -translate-x-1/2
      text-[5rem] md:text-[12rem] lg:text-[16rem]
      font-semibold
      text-gray-200
      leading-none
      select-none
      pointer-events-none
      z-0
    "
      >
        Eira.club
      </span>

      {/* Foreground content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo + tagline */}
          <div className="space-y-2">
            <Link to="/">
              <img
                src="assets/eira-logo.svg"
                alt="Eira.club logo"
                className="h-12 cursor-pointer"
              />
            </Link>
            <p className="text-neutral-300 text-xs">
              Pay Education Fees &amp; Receive Payments Instantly
            </p>
            <div className="space-y-1">
              <h3 className="text-xs font-medium text-neutral-400">
                Contact Us
              </h3>
              <p className="text-neutral-300 text-[12px]">
                Email:{" "}
                <a
                  href="mailto:support@eira.club"
                  className="hover:text-blue-600 transition"
                >
                  support@eira.club
                </a>
              </p>
              <p className="text-neutral-300 text-[12px]">
                Phone:{" "}
                <a
                  href="tel:+919873189338"
                  className="hover:text-blue-600 transition"
                >
                  +91 9873189338
                </a>
              </p>
              <p className="text-neutral-300 text-[12px]">
                29, RR Road, Block C, Mishal Garhi, Govindpuram, Ghaziabad,
                Uttar Pradesh 201001
              </p>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col space-y-2">
            {[
              { name: "Website", route: "/" },
              {
                name: "Privacy Policy",
                route: "/privacy-policy",
              },
              { name: "Terms of use", route: "/terms-of-use" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.route}
                className="text-neutral-300 text-xs hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex space-x-8 justify-end">
            <a
              href="https://www.instagram.com/eira.club/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="assets/instagram-icon.svg"
                alt=""
                className="h-10 w-10"
              />
            </a>
            <a
              href="https://www.facebook.com/people/Eiraclub/61568530134968/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src="assets/facebook-icon.svg"
                alt=""
                className="h-10 w-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
