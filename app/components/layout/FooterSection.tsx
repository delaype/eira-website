export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-white py-16 pt-16 pb-[20rem]">
      {/* Background giant text */}
      <span
        className="
      absolute
      bottom-4
      left-1/2
      transform -translate-x-1/2
      text-[8rem] md:text-[12rem] lg:text-[16rem]
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
            <img
              src="assets/eira-logo.svg"
              alt="Eira.club logo"
              className="h-12"
            />
            <p className="text-neutral-300 text-xs">
              Pay Education Fees &amp; Receive Payments Instantly
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col space-y-2">
            {["Website", "Contact", "Privacy Policy", "Terms of use"].map(
              (item) => (
                <a
                  key={item}
                  href={"https://eira.club"}
                  className="text-neutral-300 text-xs hover:text-blue-600 transition"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Social icons */}
          <div className="flex space-x-8 justify-end">
            <a href="https://www.instagram.com/eiraclub" aria-label="Instagram">
              <img
                src="assets/instagram-icon.svg"
                alt=""
                className="h-10 w-10"
              />
            </a>
            <a href="https://www.facebook.com/eiraclub" aria-label="Facebook">
              <img
                src="assets/facebook-icon.svg"
                alt=""
                className="h-10 w-10"
              />
            </a>
            <a href="https://www.youtube.com/@eiraclub" aria-label="YouTube">
              <img src="assets/youtube-icon.svg" alt="" className="h-10 w-10" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
